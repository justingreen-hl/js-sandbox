// https://www.honeybadger.io/blog/errors-nodejs/
const userError = new TypeError('Something happened!');
console.log(userError.name);
console.log(userError.message);
console.log(userError.stack);