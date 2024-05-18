import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="max-h-screen flex flex-col justify-center items-center gap-8 p-5">
      <div>
        <img
          className="h-[500px] object-cover"
          src="https://i.ibb.co/f2Hq18R/9169232.png"
          alt=""
        />
      </div>
      <div className="text-center space-y-5">
        <h1 className="text-4xl font-bold text-textCol">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-textCol">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <div>
          <Link to="/">
            <button className="btn bg-[#23BE0A] text-white hover:bg-[#23BE0A] workSans">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
