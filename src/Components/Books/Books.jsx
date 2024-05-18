import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [books, setBooks]);
  return (
    <div className="mt-10 text-center">
      <h2 className=" playfair font-bold text-4xl text-[#131313] mb-10">
        Books
      </h2>
      <div className="grid lg:grid-cols-3 gap-4 p-2 md:p-0">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
