const { createHmac } = await import ('node:crypto');

const secret = 'abcdefg';
const hash = createHmac('sha256', secret).update('I love cookies').digest('hex');

console.log(hash);