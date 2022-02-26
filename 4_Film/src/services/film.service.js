const getFilmData = async () => {
  const response = await fetch("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe");
  return await response.json();
}

export { getFilmData };