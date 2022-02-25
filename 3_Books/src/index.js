import { createAndFillTable } from "./dom/createAndFillTable.js";
import { createPagination, makePageNumberActive } from "./dom/pagination.js";
import { searchBook } from "./services/book.service.js";

async function main() {
  const input = document.getElementById('book');
  const button = document.getElementById('search');
  const hits = document.getElementById('hits');
  const list = document.getElementById('list');
  const pages = document.getElementById('pages');

  button.addEventListener('click', async () => {
    const resp = await searchBook(input.value); 
    hits.textContent = `${resp.numFound} hits`;

    const table = createAndFillTable(resp.docs);
    list.replaceChild(table, list.firstChild);

    const paginat = createPagination(input.value, resp);
    pages.replaceChild(paginat, pages.firstChild);
    makePageNumberActive();
  });
}

main();