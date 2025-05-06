export default class Cryptography {
  private secretKey: CryptoKey | null = null;
  private readonly IV_LENGTH = 32; // o valor padrão para o algorimo AES-GCM é 12 bytes
  private readonly STORAGE_KEY = "_esk"; // encryption_secret_key -> nome que salvaremos no local storage

  private hasSecretKey(): boolean {
    if (this.secretKey) return true;

    return false;
  }

  // função para exportar um array de bytes para uma string base64
  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    return btoa(String.fromCharCode(...bytes));
  }

  // função para exportar uma string base64 para um array de bytes
  private base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binaryString = atob(base64);

    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes.buffer;
  }

  private async createSecretKey(): Promise<void> {
    if (this.hasSecretKey()) return;

    // verifica no localStorage se já tem uma secret key salva
    const storedKey = localStorage.getItem(this.STORAGE_KEY);
    // se tiver, utilizamos a mesma para o processo de criptografia
    if (storedKey) {
      // converte o valor da secret key para um byte array
      const keyData = this.base64ToArrayBuffer(storedKey);
      // importa uma chave utilizada para a criptografia dos dados
      this.secretKey = await window.crypto.subtle.importKey(
        "raw",
        keyData,
        { name: "AES-GCM" },
        false,
        ["encrypt", "decrypt"]
      );
      //se não temos uma secret key salva, geramos uma nova
    } else {
      this.secretKey = await window.crypto.subtle.generateKey(
        {
          name: "AES-GCM",
          length: 256,
        },
        true,
        ["encrypt", "decrypt"]
      );

      // e exportamos essa chave para ser salva no local storage como um base64 string
      const exportedKey = await window.crypto.subtle.exportKey(
        "raw",
        this.secretKey
      );
      localStorage.setItem(
        this.STORAGE_KEY,
        this.arrayBufferToBase64(exportedKey)
      );
    }
  }

  async encrypt(value: string): Promise<string> {
    // cria a secretKey
    await this.createSecretKey();

    if (this.secretKey === null || this.secretKey === undefined)
      throw new Error("Some param has missing or not informed!");

    // converte o valor recebido para bytes para depois encriptá-lo
    // a interface TextEncoder cria um stream de bytes UTF-8 com um valor
    // dado como entrada
    const encoder = new TextEncoder();
    // a constante bytes será do tipo Uint8Array<ArrayBufferLike>
    const bytes = encoder.encode(value);

    // cria um IV - Vetor de Inicialização
    // Um vetor de inicialização (IV) é um valor usado em algoritmos de
    // criptografia para garantir que cada criptografia de um mesmo texto
    // simples retorne um texto cifrado distinto, mesmo usando a
    // mesma chave secreta
    // Uint8Array - representa um tipo de array com 8 bits inteiros sem sinal
    const iv = window.crypto.getRandomValues(new Uint8Array(this.IV_LENGTH));

    // criptografa o valor
    const encryptedValue = await window.crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv,
      },
      this.secretKey,
      bytes
    );

    // combina o valor criptografado com o IV em uma constante
    // do tipo Uint8Array
    const charCodes = new Uint8Array(iv.length + encryptedValue.byteLength);
    charCodes.set(iv);
    charCodes.set(new Uint8Array(encryptedValue), iv.length);

    // converte para uma string base64 Latin-1 (ISO-8859)
    // criptografada para ser salva
    return btoa(String.fromCharCode(...charCodes));
  }

  async decrypt(value: string): Promise<string | null> {
    // cria a secretKey
    await this.createSecretKey();

    if (this.secretKey === null || this.secretKey === undefined)
      throw new Error("Some param has missing or not informed!");

    try {
      // converte o valor passado no parametro para um array de bytes - Uint8Array<ArrayBuffer>
      // .atob() - A função WindowBase64.atob() decodifica uma string de dados que
      // foi encriptada através da codificação base-64.
      const bytes = Uint8Array.from(atob(value), (chars) =>
        chars.charCodeAt(0)
      );

      // extrai o IV (primeiros 32 bytes)
      const iv = bytes.slice(0, this.IV_LENGTH);

      // extrai os valores criptografados para um
      // array de bytes - Uint8Array<ArrayBuffer>
      const encryptedValue = bytes.slice(this.IV_LENGTH);

      // decripta o valor
      const decryptedValue = await window.crypto.subtle.decrypt(
        {
          name: "AES-GCM",
          iv,
        },
        this.secretKey,
        encryptedValue
      );

      // Converte de volta para a string original
      const decoder = new TextDecoder();
      return decoder.decode(decryptedValue);
    } catch (error) {
      throw new Error(`Decription error:${error}`);
    }
  }
}
