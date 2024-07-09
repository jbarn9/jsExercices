let input = "";
function onFocus(element) {
  input = document.getElementById(`${element.id}`);
  element.style = "background-color: blue; color: white;";
}
function onBlur(element) {
  input = document.getElementById(`${element.id}`);
  element.style = "";
}

// document.querySelectorAll("input").forEach((input) => {
//   input.value = "Salut";
// });
