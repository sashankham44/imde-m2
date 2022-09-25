// Getting the container for the number
let numberdiv = document.getElementById("digit");

// Value of the number
let number = 0;

// Accessing buttons using IDs
let plus = document.getElementById("increment-button");
let minus = document.getElementById("decrement-button");

// Adding actions to do if button is clicked
plus.addEventListener("click", () => {
    ++number;
    numberdiv.innerHTML = number;
})

minus.addEventListener("click", () => {
    if (number > 0){
        --number;
        numberdiv.innerHTML = number;
    }
    else {
        numberdiv.innerHTML = 0;
    }
})