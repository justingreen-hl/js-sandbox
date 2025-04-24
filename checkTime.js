class CheckTime {
  getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = date.getHours() < 12 ? 'am' : 'pm';
    return `${hours}:${minutes}${ampm}`
  }
}

const test = new CheckTime();

console.log(test.getTime());