// function second()   {
//     let j = 0;
//     for (let i = 0; i < 60; i++) {
//       document.getElementById(second).value = j;
//       j = j + 1;
//     }
// }
// document.getElementById("outputSecond").value = 00
function second() {
  let jod = (document.getElementById("outputSecond"));
  let scout = parseInt(jod);
  setInterval(function () {scout += 1 }, 1000);

  document.getElementById("outputSecond").value = scout;
}
document.getElementById("inputStart").addEventListener("click",second)