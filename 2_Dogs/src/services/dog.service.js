const getRandomImageByBreed = async (breed) => {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  const json = await response.json();

  return json.message;
}

export { getRandomImageByBreed };