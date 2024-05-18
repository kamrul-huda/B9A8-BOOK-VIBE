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
    <div className="flex flex-col md:flex-row  justify-between items-center mt-10 gap-6 min-h-[400px] p-2">
      <div className="w-full md:w-1/2 bg-[#1313130D] rounded-2xl flex justify-center h-full">
        <img className="bg-[#F3F3F3] h-full object-fill" src={image} alt="" />
      </div>
      <div className="w-full md:w-1/2 space-y-3 h-full p-3">
        <p className="text-[##131313] font-bold text-4xl playfair">
          {bookName}
        </p>
        <p className="text-[#131313CC] font-medium text-xl workSans">
          By: {author}
        </p>
        <hr />
        <p className="text-[#131313CC] font-medium text-xl workSans">
          {category}
        </p>
        <hr />
        <p className=".workSans text-[#131313B3] workSans">
          <b>Review: </b> {review}
        </p>
        <div className="flex  items-center gap-4 text-left workSans">
          <b> Tag:</b>
          {tags.map((tag, i) => (
            <p
              key={i}
              className="rounded-full text-[#23BE0A] bg-[#23BE0A0D] font-medium  workSans py-1"
            >
              #{tag}
            </p>
          ))}
        </div>
        <hr />

        <div className="flex gap-2 md:gap-5">
          <div className="workSans text-[#131313B3] flex flex-col gap-3">
            <div> Number of pages:</div>
            <div> Publisher:</div>
            <div> Year of Publishing:</div>
            <div> Rating:</div>
          </div>
          <div className="workSans text-[#131313B3] flex flex-col gap-3">
            <div>
              <b>{totalPages}</b>
            </div>
            <div>
              <b>{publisher}</b>
            </div>
            <div>
              <b>{yearOfPublishing}</b>
            </div>
            <div>
              <b>{rating}</b>
            </div>
          </div>
        </div>

        <div className="flex justify-start gap-4">
          <button
            onClick={handleReadBook}
            className="btn bg-transparent hover:bg-transparent hover:scale-105 text-[#131313] font-semibold text-xl border-solid border-[#1313134D] workSans"
          >
            Read
          </button>
          <button
            onClick={handleWishlistBook}
            className="btn bg-[#50B1C9] text-white hover:bg-[#50B1C9] font-semibold text-xl hover:scale-105 workSans"
          >
            Wishlist
          </button>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default BookDetail;
