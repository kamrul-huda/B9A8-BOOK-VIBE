import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
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
      <div className="h-[150px] bg-[#1313130D] flex justify-center items-center .playfair font-bold text-4xl text-[#131313] rounded-3xl">
        Books
      </div>
      <div className="flex justify-center mt-8">
        <details className="dropdown ">
          <summary className="m-1 btn bg-[#23BE0A] text-white hover:bg-[#23BE0A] text-xl ">
            <span className="px-3"> Sort By</span> <IoIosArrowDown />
          </summary>
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
      </div>

      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab checked:font-bold text-lg"
          aria-label="Read Books"
          checked
        />
        <div role="tabpanel" className="tab-content  rounded-box gap-3">
          {displayReadBooks.map((book) => (
            <ReadBook key={book.bookId} book={book}></ReadBook>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab checked:font-bold text-lg"
          aria-label="Wishlist Books"
        />
        <div role="tabpanel" className="tab-content  rounded-box p-6">
          {displayWishlistBooks.map((book) => (
            <ReadBook key={book.bookId} book={book}></ReadBook>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
