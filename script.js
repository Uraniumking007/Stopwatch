var stopInterval
let ominute = document.getElementById('outputMinute');
let nMinute = parseInt(ominute.textContent);
let osecond = document.getElementById('outputSecond');
let nSecond = parseInt(osecond.textContent);
let hour = document.getElementById("outputHour");
let nHour = parseInt(hour.textContent);
let counter = 0;
let calcnum = 1;
const sec = [];
const min = [];
const hr = [];

function second() {
  stopInterval = setInterval(function () {
    nSecond++;
    if (nSecond <= 9) {
      document.getElementById('outputSecond').innerText = '0' + nSecond;
    }
    if (nSecond > 9) {
      document.getElementById('outputSecond').innerText = nSecond;
    }
    if (nSecond > 59) {
      // console.log('minute');
      nSecond = 0;
      osecond.innerHTML = '0' + 0;
      nMinute++;
      if (nMinute <=9) {
        ominute.innerText = '0' + nMinute;
      }
      if (nMinute > 9 ) {
        ominute.innerText = nMinute;
      }
      if (nMinute > 59) {
        nMinute = 0;
        ominute.innerText = '0' + 0;
        nHour++;
        hour.innerText = '0' + nHour;
      }

      document.getElementById('outputSecond').innerText = '0' + nSecond;
    }
  }, 1000);
}
function reset() {
  document.getElementById('outputMinute').innerText = "00";
  document.getElementById('outputSecond').innerText = "00";
  document.getElementById('outputHour').innerText = "00";
  clearInterval(stopInterval);
}
function stopit() {
  clearInterval(stopInterval);
}

function lap() {
  sec.push(nSecond)
  min.push(nMinute)
  hr.push(nHour)
  const code = `<div class="lap-record"> ${calcnum}: ${hr[counter]}:${min[counter]}:${sec[counter]} </div>`;
  const div = document.querySelector(".lap-begins");
  div.insertAdjacentHTML("afterbegin", `${code}`);
  counter++;
  calcnum++;
}
document.getElementById('inputStart').addEventListener('click', second);
document.getElementById('inputReset').addEventListener('click', reset);
document.getElementById('inputStop').addEventListener('click', stopit);
document.getElementById('inputLap').addEventListener('click', lap);