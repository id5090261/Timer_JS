let startBox = document.querySelector('.start-box');
let inputCounter = document.querySelector("#input-counter");
let startCounter = document.querySelector("#start-counter");
let errorElement = document.querySelector("#error-message");
let timeCircle = document.querySelector(".c100");

startCounter.addEventListener('click', function(e) {
    let seconds = parseInt(inputCounter.value)
    if(isNaN(seconds)) {
        errorElement.textContent = "enter valid number";
        errorElement.classList.add('active');
        return;
    }
    errorElement.classList.remove("active");
    timeCircle.style.display = 'block';
    startBox.style.display = 'none';
});