// generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF'; // hexcode value
    let color = '#';
    for (let i = 0; i < 6; i++) {   // i<6 because #ffffff(for color after # there are 6 digits)
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let interval;
  const startChangingColor = function () {
    if (!interval) {    // for safety check
      interval = setInterval(changeBgColor, 1000);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  const stopChangingColor = function () {
    clearInterval(interval);
    interval = null;  // dereferencing , making the memory free.
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  