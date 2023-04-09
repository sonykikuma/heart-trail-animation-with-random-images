const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");
// heart trail- animation part
const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
// image randomly added
btnEl.addEventListener("click", () => {
  imageNum = 10;
  addNewImages();
  //console.log("clicked");
});

function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/200?random=${Math.floor(
      Math.random() * 20000
    )}`;

    imageContainerEl.appendChild(newImgEl);
  }
}
