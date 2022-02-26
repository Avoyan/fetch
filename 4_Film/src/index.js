import { createAndFillCard } from "./dom/createAndFillCard.js";
import { getFilmData } from "./services/film.service.js";

async function main() {
  const main = document.getElementById('main');
  const filmData = await getFilmData();

  const card = createAndFillCard(filmData, [
    'title',
    'description',
    'director',
    'producer',
    'release_date'
  ]);

  main.append(card);
}

main();