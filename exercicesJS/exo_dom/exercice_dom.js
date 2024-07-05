let body = document.body;

body.style =
  "background: radial-gradient(circle, rgba(244,116,6,1) 0%, rgba(229,18,1,1) 88%)";

// Create main container
let mainContainer = document.createElement("div");
body.append(mainContainer);
mainContainer.classList.add("mainContainer");
mainContainer.style = "display:flex; justify-content:center;";
// Create main container
let rowContainer = document.createElement("div");
mainContainer.append(rowContainer);
rowContainer.classList.add("rowContainer");
rowContainer.style = "flex-direction: column;";
// Create first container
let container = document.createElement("div");
rowContainer.append(container);
container.classList.add("container");
// Create second container
let container2 = document.createElement("div");
container.after(container2);
container2.classList.add("container");
// H1
let h1 = document.createElement("h1");
container2.append(h1);
h1.innerHTML = "Here I am !";
// Inside containers
// row container
let row = document.createElement("div");
container.append(row);
row.classList.add("row");
// description container
let description = document.createElement("div");
container2.append(description);
description.classList.add("description");
// create pictures
for (let i = 1; i < 3; i++) {
  row.append(document.createElement("div"));
  row.querySelector("div:nth-child(" + i + ")").classList.add("divPicture" + i);
  if (i == 2) {
    row.querySelector("div:nth-child(2)").style.lineHeight = 0;
  }
  for (let j = 1; j < 3; j++) {
    document
      .querySelector(".row div:nth-child(" + i + ")")
      .classList.add("picture");
    let img = document.createElement("img");
    document.querySelector(".picture:nth-child(" + i + ")").append(img);
    img.setAttribute("src", "https://picsum.photos/200");
    if (j % 2 == 0) {
      img.style.marginLeft = "2px";
    } else {
      img.style.marginRight = "2px";
    }
  }
}
row.style.width = "fit-content";
row.style.height = "fit-content";
row.style.backgroundColor = "white";

description.style = "font-weight:600; font-size: 1.2em;";
description.innerHTML = "<p>julie.doe@example.com</p>";
description.innerHTML += "<p>25</p>";
description.innerHTML += "<p>08/02/1995</p>";
