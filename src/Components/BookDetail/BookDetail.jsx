import { useLoaderData, useParams } from "react-router-dom";
import { getStoredReadBook, saveReadBooks } from "../../Utility/localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetail = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId === parseInt(id));

  const handleReadBook = () => {
    const storedReadBooks = getStoredReadBook();
    console.log(storedReadBooks);
    const isExist = storedReadBooks.find((book) => book === parseInt(id));
    if (isExist) {
      toast("Already exists");
    } else {
      saveReadBooks(parseInt(id));
      toast("Read book successfully");
    }
  };

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="flex justify-between items-center">
      <div className="bg-red-300">
        <img className="bg-[#1313130D h-[400px]" src={image} alt="" />
      </div>
      <div>
        <p>{bookName}</p>
        <p>{author}</p>
        <p>{category}</p>
        <p>{review}</p>
        <p>{tags}</p>
        <p>{totalPages}</p>
        <p>{publisher}</p>
        <p>{yearOfPublishing}</p>
        <p>{rating}</p>
        <button onClick={handleReadBook}>Read</button>
        <button>Wishlist</button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookDetail;
