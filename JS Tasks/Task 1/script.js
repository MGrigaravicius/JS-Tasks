/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
var lbNum = 2.2046;
var gNum = 0.001;
var ozNum = 35.274;

document
  .getElementById("converter")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var kgValue = Number(this.querySelector("input[name=weight]").value);
    document.getElementById("conSva").innerHTML = kgValue * lbNum;
    document.getElementById("conGra").innerHTML = kgValue / gNum;
    document.getElementById("conUnc").innerHTML = kgValue * ozNum;
  });
