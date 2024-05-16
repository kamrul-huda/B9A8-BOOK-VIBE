import { useLoaderData, useParams } from "react-router-dom";
import {
  getStoredReadBook,
  getStoredWishlistBook,
  saveReadBooks,
  saveWishlistBooks,
} from "../../Utility/localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetail = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId === parseInt(id));

  const handleReadBook = () => {
    const storedReadBooks = getStoredReadBook();
    const isExist = storedReadBooks.find((book) => book === parseInt(id));
    if (isExist) {
      toast.warn("You have Already Read this books");
    } else {
      saveReadBooks(parseInt(id));
      toast.success("Books Added to Read List");
    }
  };

  const handleWishlistBook = () => {
    const storedWishlistBooks = getStoredWishlistBook();
    const storedReadBooks = getStoredReadBook();
    const isExistReadBook = storedReadBooks.find(
      (book) => book === parseInt(id)
    );
    const isExist = storedWishlistBooks.find((book) => book === parseInt(id));
    if (isExist || isExistReadBook) {
      toast("You have Already Read this books");
    } else {
      saveWishlistBooks(parseInt(id));
      toast.success("Books Added to Wishlist");
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
        <button onClick={handleWishlistBook}>Wishlist</button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookDetail;
