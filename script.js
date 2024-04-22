let timer;
let totalSeconds = 0;

function startTimer() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    totalSeconds = hours * 3600 + minutes * 60 + seconds;

    timer = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timer);
            alert("Timer finished!");
        } else {
            displayTime(totalSeconds);
            totalSeconds--;
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    totalSeconds = 0;
    displayTime(totalSeconds);
}

function displayTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const display = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(remainingSeconds)}`;
    document.getElementById('display').textContent = display;
}

function formatTime(time) {
    return (time < 10) ? `0${time}` : time;
}
