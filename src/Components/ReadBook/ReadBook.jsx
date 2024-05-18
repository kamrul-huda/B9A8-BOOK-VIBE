import PropTypes from "prop-types";
import { GoPeople } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

const ReadBook = ({ book }) => {
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
    <div className="md:flex justify-between items-center mt-10 gap-6 md:h-[300px] border-2 rounded-xl p-5">
      <div className="md:w-1/3 bg-[#1313130D] rounded-2xl flex justify-center h-full">
        <img className="bg-[#F3F3F3] h-full object-fill" src={image} alt="" />
      </div>
      <div className="md:w-2/3 space-y-2 h-full md:flex md:flex-col md:justify-center">
        <p className="text-[##131313] font-bold text-2xl md:text-4xl playfair mt-3 md:mt-0">
          {bookName}
        </p>
        <p className="text-[#131313CC] font-medium text-xl workSans">
          By: {author}
        </p>

        <div className="md:flex  items-center gap-10 text-left workSans">
          <div className="flex  items-center gap-4 text-left workSans">
            <b> Tag</b>
            {tags.map((tag, i) => (
              <p
                key={i}
                className="rounded-full text-[#23BE0A] bg-[#23BE0A0D] font-medium  workSans py-1 px-2"
              >
                #{tag}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-2 text-left workSans">
            <span>
              <IoLocationOutline />
            </span>
            <span>Year of Publishing </span>
            <span>{yearOfPublishing}</span>
          </div>
        </div>

        <div className="md:flex justify-start items-center gap-6 pb-3">
          <div className="workSans text-[#131313B3] flex items-center gap-2">
            <span>
              <GoPeople />
            </span>
            <span> Publisher:</span>
            <span> {publisher}</span>
          </div>
          <div className="workSans text-[#131313B3] flex items-center gap-2">
            <span>
              <RiPagesLine />
            </span>
            <span> pages:</span>
            <span>{totalPages}</span>
          </div>
        </div>
        <hr className="" />
        <div className="flex flex-col gap-2 md:flex md:flex-row md:justify-start md:items-center pt-3 md:gap-6">
          <div className="btn bg-[#328EFF26] hover:bg-[#328EFF26] hover:scale-105 rounded-full workSans text-[#328EFF]">
            <span> Category:</span>
            <span> {category}</span>
          </div>
          <div className="btn workSans text-[#FFAC33] bg-[#FFAC3326] hover:bg-[#FFAC3326] hover:scale-105 rounded-full">
            <span> Rating:</span>
            <span>{rating}</span>
          </div>
          <Link to={`/bookDetail/${bookId}`}>
            <button className="btn w-full bg-[#23BE0A] hover:bg-[#23BE0A] hover:scale-105 text-white rounded-full font-medium text-base workSans">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ReadBook.propTypes = {
  book: PropTypes.object,
};

export default ReadBook;
