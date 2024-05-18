import { useEffect, useState } from "react";
import Customer from "../Customer/Customer";

const CustomerReview = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("customer.json")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, [customers, setCustomers]);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-14 justify-center">
          <div className="text-center w-1/2 lg:text-left">
            {customers.map((customer) => (
              <Customer key={customer.bookId} customer={customer}></Customer>
            ))}
          </div>
          <div className="card shrink-0 w-1/2 shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Review</span>
                </label>
                <textarea
                  placeholder="Bio"
                  className="textarea textarea-bordered w-full h-52"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Post Your Review</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
