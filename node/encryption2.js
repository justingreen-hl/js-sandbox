// https://medium.com/@tony.infisical/guide-to-nodes-crypto-module-for-encryption-decryption-65c077176980
import crypto from 'node:crypto';

const encryptSymmetric = (key, plaintext) => {
  const iv = crypto.randomBytes(12).toString('base64');
  const cipher = crypto.createCipheriv(
    "aes-256-gcm",
    Buffer.from(key, 'base64'),
    Buffer.from(iv, 'base64')
  );
  let ciphertext = cipher.update(plaintext, 'utf-8', 'base64');
  ciphertext += cipher.final('base64');
  const tag = cipher.getAuthTag()

  return { ciphertext, iv, tag }
}

const plaintext = "encrypt this string";
const key = crypto.randomBytes(32).toString('base64');

const { ciphertext, iv, tag } = encryptSymmetric(key, plaintext);

console.log(iv);

const decryptSymmetric = (key, ciphertext, iv, tag) => {
  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    Buffer.from(key, 'base64'),
    Buffer.from(iv, 'base64')
  );

  decipher.setAuthTag(Buffer.from(tag, 'base64'));

  let plaintext = decipher.update(ciphertext, 'base64', 'utf8');
  plaintext += decipher.final('utf8');

  return plaintext;
}

const decryptedText = decryptSymmetric(key, ciphertext, iv, tag);

console.log(decryptedText)