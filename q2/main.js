// Setup
let stringCont = document.getElementById("strvari");
let intCont = document.getElementById("integervar");
let sumFuncAns = document.getElementById("sumfans");
let if_elseAns = document.getElementById("ifelseheadans");

// Variables
let stringVar = "Sashank";
stringCont.innerHTML = stringVar;
let integerVar = 90;
stringCont.innerHTML = integerVar;

// Sum function
let sumFunc = (num1, num2) => {
  return num1 + num2;
};

sumFuncAns.innerHTML = sumFunc(9,10);

// Decision making
let age = 29;
if (age >= 21) {
  if_elseAns.innerHTML = "Yeah";
} else {
  if_elseAns.innerHTML = "Nope";
}

// Loops
for (let i = 1; i < 11; i++) {
  document.write(i ** 5 + "<br>");
}