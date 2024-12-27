const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// setInterval set the time of execution of the code . Here we want to change the time in every second .
