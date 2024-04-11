//declaring
const form = document.querySelector("#form-container");
const render = document.querySelector("#render-button");
const imageContainer = document.querySelector("#meme-container");

//create divs for images
//there has to be a much shorter or more efficient way to do this
function createDivs(img, topInput, botInput) {
  //add div
  const newDiv = document.createElement("div");
  imageContainer.append(newDiv);
  newDiv.classList.add("img-box");

  //add image to div
  const newImg = document.createElement("img");
  newImg.src = img;
  newDiv.append(newImg);
  newDiv.classList.add("imgs");

  //add top text to div
  const topText = document.createElement("p");
  topText.innerText = topInput.toUpperCase();
  newDiv.append(topText);
  topText.classList.add("top-t");

  //add bottom text to div
  const botText = document.createElement("p");
  botText.innerText = botInput.toUpperCase();
  newDiv.append(botText);
  botText.classList.add("bot-t");

  //add image X overlay for removing
  const x = document.createElement("img");
  x.src =
    "https://i.pinimg.com/236x/3f/7d/84/3f7d84ab0161a273efb4d411d5a97f92.jpg";
  newDiv.append(x);
  x.classList.add("x");

  //remove div on X click
  x.addEventListener("click", function (e) {
    newDiv.remove();
  });
}

//main listener
render.addEventListener("click", function (e) {
  e.preventDefault();
  const img = document.querySelector("#image-link").value;
  const topInput = document.querySelector("#top-text").value;
  const botInput = document.querySelector("#bot-text").value;
  createDivs(img, topInput, botInput);
  down();
});
