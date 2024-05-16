import PropTypes from "prop-types";

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
    <div className="flex justify-between items-center mt-10 gap-6 h-[300px] border-2 rounded-xl">
      <div className="w-1/2 bg-[#1313130D] rounded-2xl flex justify-center h-full">
        <img className="bg-[#F3F3F3] h-full object-fill" src={image} alt="" />
      </div>
      <div className="w-1/2 space-y-2 h-full">
        <p className="text-[##131313] font-bold text-4xl">{bookName}</p>
        <p className="text-[#131313CC] font-medium text-xl">By: {author}</p>

        <div className="flex  items-center gap-4 text-left">
          <b> Tag:</b>
          {tags.map((tag, i) => (
            <p
              key={i}
              className="rounded-full text-[#23BE0A] bg-[#23BE0A0D] font-medium  .workSans py-1"
            >
              #{tag}
            </p>
          ))}
        </div>

        <div className="flex justify-start items-center gap-6">
          <div className=".workSans text-[#131313B3] ">
            <span> Publisher:</span>
            <span> {publisher}</span>
          </div>
          <div className=".workSans text-[#131313B3]">
            <span> pages:</span>
            <span>{totalPages}</span>
          </div>
        </div>
        <hr />
        <div className="flex justify-start items-center gap-6">
          <div className=".workSans text-[#131313B3]">
            <span> Category:</span>
            <span> {category}</span>
          </div>
          <div className=".workSans text-[#131313B3]">
            <span> Rating:</span>
            <span>{rating}</span>
          </div>
          <button className="btn bg-[#23BE0A] hover:bg-[#23BE0A] hover:scale-105 text-[#131313] font-semibold text-base .workSans">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

ReadBook.propTypes = {
  book: PropTypes.object,
};

export default ReadBook;
