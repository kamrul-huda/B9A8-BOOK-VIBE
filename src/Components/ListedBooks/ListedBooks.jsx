import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getStoredReadBook,
  getStoredWishlistBook,
} from "../../Utility/localStorage";
import ReadBook from "../ReadBook/ReadBook";

const ListedBooks = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [displayReadBooks, setDisplayReadBooks] = useState([]);

  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [displayWishlistBooks, setDisplayWishlistBooks] = useState([]);

  const handleReadBooksFilter = (filter) => {
    if (filter === "Sort By") {
      setDisplayReadBooks(readBooks);
    } else if (filter === "Rating") {
      setDisplayReadBooks([]);
      const ratingBooks = [...readBooks].sort((a, b) =>
        a.rating > b.rating ? 1 : -1
      );

      setDisplayReadBooks(ratingBooks);
    } else if (filter === "Number of pages") {
      const noOfPagesOfBook = [...readBooks].sort((a, b) =>
        a.totalPages > b.totalPages ? 1 : -1
      );
      setDisplayReadBooks([]);
      setDisplayReadBooks(noOfPagesOfBook);
    } else if (filter === "Publisher year") {
      const publisherBooks = [...readBooks].sort((a, b) =>
        a.yearOfPublishing > b.yearOfPublishing ? 1 : -1
      );
      setDisplayReadBooks([]);
      setDisplayReadBooks(publisherBooks);
    }
  };

  useEffect(() => {
    const storedReadBooks = getStoredReadBook();
    const storedWishlistBooks = getStoredWishlistBook();

    if (books.length > 0) {
      const booksRead = [];
      for (const id of storedReadBooks) {
        const book = books.find((book) => book.bookId === id);
        if (book) {
          booksRead.push(book);
        }
      }
      setReadBooks(booksRead);
      setDisplayReadBooks(booksRead);
    }

    if (books.length > 0) {
      const booksWishList = [];
      for (const id of storedWishlistBooks) {
        const book = books.find((book) => book.bookId === id);
        if (book) {
          booksWishList.push(book);
        }
      }
      setWishlistBooks(booksWishList);
      setDisplayWishlistBooks(booksWishList);
    }
  }, []);

  return (
    <div>
      <div className="h-[100px] bg-slate-300">Books</div>

      <details className="dropdown">
        <summary className="m-1 btn">Sort By</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleReadBooksFilter("Rating")}>
            <a>Rating</a>
          </li>
          <li onClick={() => handleReadBooksFilter("Number of pages")}>
            <a>Number of pages</a>
          </li>
          <li onClick={() => handleReadBooksFilter("Publisher year")}>
            <a>Publisher</a>
          </li>
        </ul>
      </details>

      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 1"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box gap-3"
        >
          {displayReadBooks.map((book) => (
            <ReadBook key={book.bookId} book={book}></ReadBook>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 2"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <ul>
            {displayWishlistBooks.map((book) => (
              <li key={book.bookId}>
                <span>
                  {book.bookName} {book.author}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
