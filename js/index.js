const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    // get the value in the input
    const inputValue = input.value;
    // store the value in localStorage
    localStorage.setItem("inputValue", inputValue);
});
