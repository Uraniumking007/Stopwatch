// function second()   {
//     let j = 0;
//     for (let i = 0; i < 60; i++) {
//       document.getElementById(second).value = j;
//       j = j + 1;
//     }
// }
// document.getElementById("outputSecond").value = 00
// let minute = document.getElementById("outputMinute");
// let nMinute = parseInt(minute.textContent);
// var minute = 00;

function second() {
  let ominute = document.getElementById('outputMinute');
  let nMinute = parseInt(ominute.textContent);
  let jod = document.getElementById('outputSecond');
  let scout = parseInt(jod.textContent);
  let hour = document.getElementById("outputHour");
  let nHour = parseInt(hour.textContent);
  setInterval(function () {
    scout++;
    if (scout <= 9) {
      document.getElementById('outputSecond').innerText = '0' + scout;
    }
    if (scout > 9) {
      document.getElementById('outputSecond').innerText = scout;
    }
    if (scout > 99) {
      // console.log('minute');
      scout = 0;
      jod.innerHTML = '0' + 0;
      nMinute++;
      if (nMinute <=9) {
        ominute.innerText = '0' + nMinute;
      }
      if (nMinute > 9 ) {
        ominute.innerText = nMinute;
      }
      if (nMinute > 60) {
        nMinute = 0;
        ominute.innerText = '0' + 0;
        nHour++;
        hour.innerText = '0' + nHour;
      }

      document.getElementById('outputSecond').innerText = '0' + scout;
    }
  }, 1000);
}
document.getElementById('inputStart').addEventListener('click', second);
