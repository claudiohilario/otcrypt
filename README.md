# otcrypt
Simple library to encrypt and decrypt strings in nodejs.
Algorithm used is: DES (Data Encryption Standard)

# Usage Example
```js
const { Otcrypt } = require('./src/index');

const SECRET = 'SECRET_HASH';

const otcrypt = new Otcrypt({ secret: SECRET });

const TEXT = 'text to encrypt';
const encryptedText = otcrypt.encrypt(TEXT);
console.log('Encrypted text: ', encryptedText); //Encrypted text:  be88a8de7244c6f1da768d23311d20d3
const decriptedText = otcrypt.decrypt(encryptedText);
console.log('Decrypted text: ', decriptedText); //Decrypted text:  text to encrypt
```
