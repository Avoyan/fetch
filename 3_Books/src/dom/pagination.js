import { searchBook } from "../services/book.service.js";
import { createAndFillTable } from "./createAndFillTable.js";

const makePageNumberActive = () => {
  const pageLinks = document.querySelectorAll('.pagination a');
  const activePage = window.localStorage.getItem('page');
  pageLinks.forEach(element => {
    element.classList.remove("active");
    if (element.innerText === activePage) {
      element.classList.add("active");
    }
  });
}

const createPagination = (inputValue, resp) => {
  const pagesCount = Math.ceil(resp.numFound / 100);
  const paginat = document.createElement("div");
  paginat.className = "pagination";
  for (let p = 1; p <= pagesCount; p++) {
    const a = document.createElement("a");
    a.textContent = p;
    a.addEventListener('click', async function () {
      const resp = await searchBook(inputValue, p); 
      
      const table = createAndFillTable(resp.docs);
      list.replaceChild(table, list.firstChild);
      window.localStorage.setItem('page', p);
      makePageNumberActive();
    })
    paginat.append(a);
  }
  window.localStorage.setItem('page', 1);
  return paginat;
}

export { createPagination, makePageNumberActive }