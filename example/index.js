const { Otcrypt } = require('../src/index');

const SECRET = 'SECRET_HASH';

const otcrypt = new Otcrypt({ secret: SECRET });

const TEXT = 'text to encrypt';
const encryptedText = otcrypt.encrypt(TEXT);
console.log('Encrypted text: ', encryptedText);
const decriptedText = otcrypt.decrypt(encryptedText);
console.log('Decrypted text: ', decriptedText);

