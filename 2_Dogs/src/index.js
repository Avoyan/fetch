import { createImage } from "./dom/createImage.js";
import { getRandomImageByBreed } from "./services/dog.service.js";
import { removeFirstChild } from "./utils/removeFirstChild.util.js";

async function main() {
  const select = document.getElementById('breed');
  const imageContainer = document.getElementById('image-container');

  select.addEventListener('change', async (event) => {
    const value = event.target.value;
    if (value === "") {
      removeFirstChild(imageContainer);
      return;
    }

    const imageSrc = await getRandomImageByBreed(value);
    const image = createImage(imageSrc);
    removeFirstChild(imageContainer);
    imageContainer.append(image);
  });
}

main();