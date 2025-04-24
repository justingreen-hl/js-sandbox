class CheckTime {
  getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = date.getHours() < 12 ? 'am' : 'pm';
    return `${hours}:${minutes}${ampm}`
  }

  getDate() {
    const date = new Date();
    const month = date.getMonth();
    const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = date.getDay();
    const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayNumber = date.getDate();
    return `${monthArr[month]} ${currentDayNumber}, ${date.getFullYear()} ${daysArr[day]}`;
  }

  getCurrentDayNumber() {
    const date = new Date().getDate();
    return date;
  }
}

const test = new CheckTime();

// console.log(test.getTime());
console.log(test.getDate());