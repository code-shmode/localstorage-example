// get value from localStorage
const lsValue = localStorage.getItem("inputValue");

// get the element to display the value in
const span = document.querySelector("span");

// set the innerHTML of span to the value retrieved from localStorage

span.innerHTML = lsValue;
