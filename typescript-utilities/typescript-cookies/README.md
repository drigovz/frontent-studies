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
