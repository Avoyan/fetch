import { titleCase } from "../utils/titleCase.util.js";

const createAndFillTable = (data, columns) => {
  const table = document.createElement("table");

  const trHead = document.createElement("tr");
  columns.forEach(element => {
    const th = document.createElement("th");
    th.textContent = titleCase(element);
    trHead.append(th);
  });
  table.append(trHead);

  data.forEach(element => {
    const tr = document.createElement("tr");
    columns.forEach(column => {
      const td = document.createElement("td");
      td.textContent = titleCase(element[column]);
      tr.append(td);
    });
    table.append(tr);
  });

  return table;
}

export { createAndFillTable }