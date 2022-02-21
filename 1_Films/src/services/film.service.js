const getAllFilms = async () => {
  const response = await fetch("https://ghibliapi.herokuapp.com/films");
  return await response.json();
}

export { getAllFilms };