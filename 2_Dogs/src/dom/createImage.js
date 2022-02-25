const createImage = (src) => {
  const image = document.createElement("img");

  image.src = src;
  image.width = 200;
  image.height = 200;

  return image;
};

export { createImage };