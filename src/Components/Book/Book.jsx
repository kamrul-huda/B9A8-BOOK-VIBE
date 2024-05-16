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
        <div className="card card-compact bg-base-100 border-2 border-solid ">
          <figure>
            <img className="h-[250px]" src={image} alt="Shoes" />
          </figure>

          <div className="card-body">
            <div className="flex items-center justify-start gap-3">
              {tags.map((tag) => (
                <p>{tag}</p>
              ))}
            </div>
            <h2>{bookName}</h2>
            <h2>{author}</h2>
            <hr />
            <div className="flex justify-between items-center">
              <p>{category}</p>
              <p className="flex justify-end items-center">
                <span>{rating}</span>
                <span>
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
