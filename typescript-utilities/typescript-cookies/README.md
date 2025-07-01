`Cryptography.ts`

Nessa classe temos uma propriedade do tipo **CryptoKey**, a CryptoKey é uma interface que representa uma chave criptografada derivada de um algoritmo definido.

Um objeto do tipo CryptoKey pode ser inicializado através da função **SubtleCrypto.generateKey()**

O método **generateKey()** da interface **SubtleCrypto** é utilizado para gerar uma nova key (com um algorítmo simétrico). Ele recebe os parâmetros:

- **algorithm** - Um objeto definido do tipo key que.
- **extractable** - Um valor booleano que indica se é possível exportar a key gerada
- **keyUsages** - um array de string que indica a utilidade da nova key gerada. Os possíveis valores são:
  - encrypt - encriptar valores
  - decrypt - decriptar valores
  - sign - a chave pode ser usada para assinar mensagens
  - verify - chave pode ser usada para verificação
  - deriveKey - permitindo que a key seja utilizada como uma key base para quando se derivando uma nova key.

Esse método retorna uma Promise<> com a **CryptoKey** para algoritmo simétrico ou uma **CryptoKeyPair** para algoritmo assímetrico.

Nessa classe temos também duas constantes inicializadas:

- **IV_LENGTH**: Com o valor de 32 (bytes). O valor padrão para o algoritmo AES-GCM é 12 bytes
- **STORAGE_KEY**: Representa o nome dado para salvarmos esse valor no LocalStorage da máquina do usuário, isso para que seja possível tanto encriptar como decriptar os valores por meio da mesma classe. Já que precisaremos de uma chave de criptografia para isso.

Temos uma função chamada **hasSecretKey** para verificar se temos algum valor para o objeto CryptoKey.

Temos também a função **arrayBufferToBase64** para realizar a exportação de um array de bytes para uma string no formato base64. E também a função **base64ToArrayBuffer** que exporta uma string base64 para um array de bytes.

Na sequência vamos para a nossa função **createSecretKey** que vai criar de fato uma Secret Key (SK) e realizar o armazeamento dela no LocalStorage. Essa função primeiramente verifica no LocalStorage se já temos uma secret key salva e se tiver utilizamos a mesma para o processo de criptografia.

```
const storedKey = localStorage.getItem(this.STORAGE_KEY);
if (storedKey) {
```

Se nós já tivermos uma SK salva no LocalStorage, então primeiro convertemos o valor dela para um byte array:

```
const keyData = this.base64ToArrayBuffer(storedKey);
```

Depois importamos ela para utilizar na criptografia:

```
this.secretKey = await window.crypto.subtle.importKey(
  "raw",
  keyData,
  { name: "AES-GCM" },
  false,
  ["encrypt", "decrypt"]
);
```

Caso não tivermos ainda uma SK, nós então criamos ela:

```
this.secretKey = await window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256,
  },
  true,
  ["encrypt", "decrypt"]
);
```

E exportamos essa chave para ser salva no LocalStorage:

```
const exportedKey = await window.crypto.subtle.exportKey(
  "raw",
  this.secretKey
);
localStorage.setItem(
  this.STORAGE_KEY,
  this.arrayBufferToBase64(exportedKey)
);
```

#### Função encrypt

Nessa função nós recebemos um valor que desejamos criptografar no como uma string, primeiramente criamos uma Secret Key e logo em seguida convertemos o valor recebido para bytes para depois encriptá-lo. A interface **TextEncoder** cria um stream de bytes UTF-8 com um valor dado como entrada.

```
const encoder = new TextEncoder();
const bytes = encoder.encode(value);
```

Com isso a constante **bytes** será do tipo **Uint8Array<ArrayBufferLike>**.

Depois nós criamos um **IV - Vetor de Inicialização**. Um vetor de inicialização (IV) é um valor usado em algoritmos de criptografia para garantir que cada criptografia de um mesmo texto simples retorne um texto cifrado distinto, mesmo usando a mesma chave secreta. **Uint8Array** - representa um tipo de array com 8 bits inteiros sem sinal.

```
const iv = window.crypto.getRandomValues(new Uint8Array(this.IV_LENGTH));
```

Criptografamos o valor:

```
const encryptedValue = await window.crypto.subtle.encrypt(
  {
    name: "AES-GCM",
    iv,
  },
  this.secretKey,
  bytes
);
```

Combinamos o valor criptografado com o IV em uma constante do tipo Uint8Array para garantir uma maior segurança.

```
const charCodes = new Uint8Array(iv.length + encryptedValue.byteLength);
charCodes.set(iv);
charCodes.set(new Uint8Array(encryptedValue), iv.length);
```

E por fim convertemos para uma string **base64 Latin-1 (ISO-8859)** o valor para ser criptografada e salva.
