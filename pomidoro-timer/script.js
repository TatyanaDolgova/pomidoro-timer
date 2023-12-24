let timerId;
let countSeconds;

const startTimer = () => {
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');
  let minV;
  let secV;

  if (+minutes.value.split('')[0] === 0) {
    minV = +minutes.value.split('')[1];
  } else {
    minV = +minutes.value;
  }

  if (+seconds.value.split('')[0] === 0) {
    secV = +seconds.value.split('')[1];
  } else {
    secV = +seconds.value;
  }
  countSeconds = minV * 60 + secV;

  timerId = setInterval(() => {
    countSeconds--;
    minutes.value = Math.floor(countSeconds / 60);
    seconds.value = countSeconds % 60;
    if (minutes.value.length < 2) {
      minutes.value = '0' + minutes.value;
    }
    if (seconds.value.length < 2) {
      seconds.value = '0' + seconds.value;
    }
    if (countSeconds <= 0) {
      clearsInterval();
    }
  }, 1000)

}

function clearsInterval() {
  const clock = document.querySelector('.timer');

  clearInterval(timerId);
  clock.style.borderColor = '#900A0A';
  alert("Time's up!")
}

const actionStart = () => {
  const btnStart = document.querySelector('.btn-start');
  const inputs = document.querySelectorAll('input');

  btnStart.addEventListener('click', () => {
    if (btnStart.textContent === 'START') {
      btnStart.textContent = 'PAUSE';
      startTimer();
      inputs.forEach((input) => {
        input.setAttribute('readonly', true);
      })
    } else {
      btnStart.textContent = 'START';
      clearInterval(timerId);
    }
  })
}

const actionSetting = () => {
  const btnSetting = document.querySelector('.btn-setting');
  const inputs = document.querySelectorAll('input');
  const btnStart = document.querySelector('.btn-start');

  btnSetting.addEventListener('click', () => {
    clearInterval(timerId);
    inputs.forEach((input) => {
      input.removeAttribute('readonly');
      btnStart.textContent = 'START';
    })
  })
}

actionStart();
actionSetting();