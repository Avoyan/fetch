import { createAndFillTable } from "./dom/createAndFillTable.js";
import { getAllFilms } from "./services/film.service.js";

async function main() {
  const main = document.getElementById('main');
  const filmData = await getAllFilms();

  const table = createAndFillTable(filmData, [
    'title',
    'release_date',
    'director',
    'description'
  ]);

  main.append(table);
}

main();