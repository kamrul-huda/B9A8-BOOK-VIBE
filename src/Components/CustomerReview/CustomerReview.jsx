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
    <div className="">
      <div className="hero min-h-screen bg-base-200 rounded-3xl mt-10">
        <div className="hero-content flex-col md:flex-row-reverse gap-14 justify-center">
          <div className="text-center w-full md:w-1/2  md:text-left">
            {customers.map((customer) => (
              <Customer key={customer.bookId} customer={customer}></Customer>
            ))}
          </div>
          <div className="card shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
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
                  placeholder="Review"
                  className="textarea textarea-bordered w-full h-60"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#23BE0A] hover:bg-[#23BE0A] text-white">
                  Post Your Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
