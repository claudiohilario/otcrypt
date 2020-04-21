
const crypto = require('crypto');
const { algorithms } = require('./constants');

class Otcrypt {
    constructor({ algorithm, secret }) {
        this.algorithm = algorithm || algorithms.DES;
        this.secret = crypto.scryptSync(secret, 'salt', 8);

        this.iv = Buffer.alloc(8, 0);
    }

    encrypt(text) {
        const cipher = crypto.createCipheriv(this.algorithm, this.secret, this.iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        return encrypted + cipher.final('hex');
    }

    decrypt(textEncrypted) {
        const decrypter = crypto.createDecipheriv(this.algorithm, this.secret, this.iv);
        let decrypted = decrypter.update(textEncrypted, 'hex', 'utf8');
        return decrypted + decrypter.final('utf8');
    }
}

module.exports = { Otcrypt, algorithms };
