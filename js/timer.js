/*Timer*/
function startTimer() { 
  let countDownDate = new Date();
  countDownDate.setHours(countDownDate.getHours() + 6);
  
  let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById('timer').innerHTML = 'Время вышло';
    }
  }, 1000);
}

window.onload = function () {
  startTimer();
};