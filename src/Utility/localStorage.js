const getStoredReadBook = () => {
  const storedReadBooks = localStorage.getItem("read-books");
  if (storedReadBooks) {
    return JSON.parse(storedReadBooks);
  }

  return [];
};

const saveReadBooks = (id) => {
  const storedReadBooks = getStoredReadBook();

  storedReadBooks.push(id);
  localStorage.setItem("read-books", JSON.stringify(storedReadBooks));
};

export { getStoredReadBook, saveReadBooks };
