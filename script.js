let startBox = document.querySelector('.start-box');
let inputCounter = document.querySelector("#input-counter");
let startCounter = document.querySelector("#start-counter");
let errorElement = document.querySelector("#error-message");
let timeCircle = document.querySelector(".c100");
let timerNum = document.querySelector('.c100 > span');

startCounter.addEventListener('click', function(e) {
    let seconds = parseInt(inputCounter.value)
    if(isNaN(seconds)) {
        // errorElement.textContent = "enter valid number";
        errorElement.classList.add('active');
        return;
    }
    errorElement.classList.remove("active");
    timeCircle.style.display = 'block';
    startBox.style.display = 'none';

    timerNum.textContent = seconds;

    let timerId  = setInterval(()=> {
        if(seconds <= 1){
            clearInterval(timerId);
            startBox.classList.add('active');
            timeCircle.style.display = 'none';
        }
        seconds -= 1;
        timerNum.textContent = seconds;
    }, 1000);
});