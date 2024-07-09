let div;
let img;
let i = 1;
window.onclick = (e) => {
  div = document.createElement("div");
  img = document.createElement("img");
  document.body.prepend(div);
  div.append(img);
  cursorX = e.pageX;
  cursorY = e.pageY;
  div.style.marginLeft = cursorX + "px";
  div.style.marginTop = cursorY + "px";
  div.style.position = "absolute";
  img.src = "https://picsum.photos/200/300";
};
