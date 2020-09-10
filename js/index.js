const myButton = document.getElementById("clickMe");
const noun1 = document.getElementById("noun1");
const noun1Input = document.getElementById("noun1Input");
const noun2 = document.getElementById("noun2");
const noun2Input = document.getElementById("noun2Input");
const placeholder = document.getElementsByClassName("placeholder");

myButton.addEventListener("click", function (event) {
  event.preventDefault();

  placeholder[0].textContent = noun1Input.value;
  placeholder[1].textContent = noun2Input.value;
});

// myButton.addEventListener("click", function (event) {
//   event.preventDefault();

//   noun1.innerHTML = noun1Input.value;
//   noun2.innerHTML = noun2Input.value;
// });

// myButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   placeholder.innerHTML = noun1Input.value;
//   placeholder.innerHTML = noun2Input.value;
// });
