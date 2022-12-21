// function second()   {
//     let j = 0;
//     for (let i = 0; i < 60; i++) {
//       document.getElementById(second).value = j;
//       j = j + 1;
//     }
// }
// document.getElementById("outputSecond").value = 00
function second() {
  let jod = document.getElementById('outputSecond');
  let scout = parseInt(jod.textContent);
  setInterval(function () {
    scout++;
    document.getElementById('outputSecond').innerText = scout;
  }, 100);
}
document.getElementById('inputStart').addEventListener('click', second);
