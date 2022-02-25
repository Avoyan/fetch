const removeFirstChild = (node) => {
  if (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

export { removeFirstChild }