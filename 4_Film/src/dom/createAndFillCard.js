import { titleCase } from "../utils/titleCase.util.js";

const createAndFillCard = (data, columns) => {
  const card = document.createElement("card");
  card.className = "card";

  columns.forEach(element => {
    const cardItem = document.createElement("div");
    cardItem.className = "card-item";
    const itemTitle = document.createElement("span");
    itemTitle.className = "item-title";
    itemTitle.textContent = titleCase(element) + ":";
    cardItem.append(itemTitle, data[element]);
    card.append(cardItem);
  });

  return card;
}

export { createAndFillCard }