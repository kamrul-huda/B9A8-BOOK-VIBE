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

const getStoredWishlistBook = () => {
  const storedWishlistBooks = localStorage.getItem("wishlist-books");
  if (storedWishlistBooks) {
    return JSON.parse(storedWishlistBooks);
  }

  return [];
};

const saveWishlistBooks = (id) => {
  const storedWishlistBooks = getStoredWishlistBook();
  storedWishlistBooks.push(id);
  localStorage.setItem("wishlist-books", JSON.stringify(storedWishlistBooks));
};

export {
  getStoredReadBook,
  saveReadBooks,
  getStoredWishlistBook,
  saveWishlistBooks,
};
