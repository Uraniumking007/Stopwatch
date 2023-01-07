var stopInterval;

//timer controller. if  'start' is already clicked it does not allow other clicks
//otherwise it misfunctions
var isRunning = 0;
let ominute = document.getElementById('outputMinute');
let nMinute = parseInt(ominute.textContent);
let osecond = document.getElementById('outputSecond');
let nSecond = parseInt(osecond.textContent);
let hour = document.getElementById('outputHour');
let nHour = parseInt(hour.textContent);
let counter = 0;
let calcnum = 1;
const sec = [];
const min = [];
const hr = [];

function second() {
  isRunning+=1;
  if(isRunning==1){
  stopInterval = setInterval(function () {
    nSecond++;
    if (nSecond <= 9) {
      osecond.innerText = '0' + nSecond;
    }
    if (nSecond > 9) {
      osecond.innerText = nSecond;
    }
    if (nSecond > 59) {
      // console.log('minute');
      nSecond = 0;
      osecond.innerHTML = '0' + 0;
      nMinute++;
      chageMin();

      osecond.innerText = '0' + nSecond;
    }
  }, 1000);
}
}

function chageMin() {
  if (nMinute <= 9) {
    ominute.innerText = '0' + nMinute;
  }
  if (nMinute > 9) {
    ominute.innerText = nMinute;
  }
  if (nMinute > 59) {
    nMinute = 0;
    ominute.innerText = '0' + 0;
    nHour++;
    hour.innerText = '0' + nHour;
  }
}
function reset() {
  isRunning=0;
  nSecond = 0;
  nMinute = 0;
  nHour = 0;
  ominute.innerText = '00';
  osecond.innerText = '00';
  hour.innerText = '00';
  clearInterval(stopInterval);
}
function stopit() {
  isRunning=0;
  clearInterval(stopInterval);
}

function lap() {
  if (nSecond < 9) {
    sec.push('0' + nSecond);
  } else {
    sec.push(nSecond);
  }
  if (nMinute < 9) {
    min.push('0' + nMinute);
  } else {
    min.push(nMinute);
  }
  if (nHour < 9) {
    hr.push('0' + nHour);
  } else {
    hr.push(nHour);
  }
  const code = `<div class="lap-record"> ${calcnum}: ${hr[counter]}:${min[counter]}:${sec[counter]} </div>`;
  const div = document.querySelector('.lap-begins');
  div.insertAdjacentHTML('afterbegin', `${code}`);
  counter++;
  calcnum++;
}
document.getElementById('inputStart').addEventListener('click',second);
document.getElementById('inputReset').addEventListener('click', reset);
document.getElementById('inputStop').addEventListener('click', stopit);
document.getElementById('inputLap').addEventListener('click', lap);
