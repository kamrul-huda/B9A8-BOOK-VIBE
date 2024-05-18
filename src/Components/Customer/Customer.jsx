import PropTypes from "prop-types";

const Customer = ({ customer }) => {
  const { id, customerName, review_date, image, review, rating } = customer;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mb-10">
        <div className="avatar ">
          <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 translate-x-[-50%] translate-y-[-50%]">
            <img src={image} />
          </div>
        </div>

        <div className="card-body">
          <h4 className="workSans text-[#131313B3]">{review_date}</h4>
          <h2 className="workSans font-bold text-2xl">{customerName}</h2>
          <p className="workSans text-[#131313B3]">{review}</p>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              checked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Customer.propTypes = {
  customer: PropTypes.object,
};

export default Customer;
