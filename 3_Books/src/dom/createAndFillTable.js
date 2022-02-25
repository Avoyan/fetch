import { titleCase } from "../utils/titleCase.util.js";

const createAndFillTable = (data) => {
  const table = document.createElement("table");

  const trHead = document.createElement("tr");

  const columns = [
    "title",
    "author_name",
    "first_publish_year",
    "subject"
  ];

  columns.forEach(element => {
    const th = document.createElement("th");
    th.textContent = titleCase(element);
    trHead.append(th);
  });

  table.append(trHead);

  data.forEach(element => {
    const tr = document.createElement("tr");
    
    columns.slice(0, 3).forEach(column => {
      const td = document.createElement("td");
      td.textContent = element[column];
      tr.append(td);
    });

    const td = document.createElement("td");
    td.textContent = typeof element['subject'] !== "undefined" ? element['subject'].slice(0, 5).join(", ") : "";
    tr.append(td);

    table.append(tr);
  });

  return table;
}

export { createAndFillTable }