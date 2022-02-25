const searchBook = async (name, page = 1) => {
  const params = new URLSearchParams({
    q: name,
    page: page,
  });
  console.log();

  const response = await fetch(
    `https://openlibrary.org/search.json?${params.toString()}`
  );

  return await response.json();
}

export { searchBook };