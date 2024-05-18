import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
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
    <div>
      <Link to={`/bookDetail/${bookId}`}>
        <div className="card card-compact bg-base-100 border-2 border-solid p-4 ">
          <img
            className="bg-[#F3F3F3] rounded-2xl h-[200px] object-contain"
            src={image}
            alt="Shoes"
          />

          <div className="card-body space-y-2">
            <div className="flex  justify-between items-center gap-3 text-left">
              {tags.map((tag, i) => (
                <p
                  key={i}
                  className="rounded-full text-[#23BE0A] bg-[#23BE0A0D] font-medium  .workSans pl-3 py-2"
                >
                  {tag}
                </p>
              ))}
            </div>
            <h2 className="text-[#131313] .playfair font-bold text-2xl text-left">
              {bookName}
            </h2>
            <h2 className="text-[#131313CC] font-medium .workSans text-lg  text-left">
              By: {author}
            </h2>
            <hr className="border-dashed" />
            <div className="flex justify-between items-center text-[#131313CC] font-medium text-left text-base">
              <p className="">{category}</p>
              <p className="flex justify-end items-center gap-1">
                <span>{rating}</span>
                <span className="font-bold">
                  <CiStar />
                </span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
