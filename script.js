const timeDisplay = document.getElementById('time-display');
const dateDisplay = document.getElementById('date-display');

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];
const days = ["Sun", "Mon", "Thue", "When", "Thur", "Fri", "Sat"];


const minimumTwoDigits = (number) => {
    return ((number < 10) ? '0' : '') + number;
}

setInterval(() => {
    let date = new Date();

    let day = days[date.getDay()];
    let month = months[date.getMonth()];

    let hours = minimumTwoDigits(date.getHours())
    let minutes = minimumTwoDigits(date.getMinutes())
    let seconds = minimumTwoDigits(date.getSeconds())

    timeDisplay.innerHTML = `${hours} : ${minutes} : ${seconds}`;
    dateDisplay.innerHTML = `${day}.${minimumTwoDigits(date.getDate())}.${month}.${date.getFullYear()}`;
})
