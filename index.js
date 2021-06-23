import "./styles.css";

const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");

canvas.addEventListener("mousemove", (event) => {
  draw(event.layerX, event.layerY);
});
canvas.addEventListener("touchmove", (event) => {
  draw(event.layerX, event.layerY);
});
//パソコンでクリックしてる間だけ描けるようにした機能
canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});
//スマホで描けるようにする機能
canvas.addEventListener("touchstart", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("touchend", () => {
  context.closePath();
  isDrag = false;
});
//お絵かきするところをきれいにする機能
const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});
//ペンの色を変える機能
const colorRed = document.querySelector("#color-red");
colorRed.addEventListener("click", () => {
  context.strokeStyle = "red";
});
const colorBlue = document.querySelector("#color-blue");
colorBlue.addEventListener("click", () => {
  context.strokeStyle = "blue";
});
const colorGreen = document.querySelector("#color-green");
colorGreen.addEventListener("click", () => {
  context.strokeStyle = "green";
});
const colorBlack = document.querySelector("#color-black");
colorBlack.addEventListener("click", () => {
  context.strokeStyle = "black";
});

let isDrag = false;
//線をかく機能
function draw(x, y) {
  if (!isDrag) {
    return;
  }
  context.lineWidth = 3;
  context.lineTo(x, y);
  context.stroke();
}
