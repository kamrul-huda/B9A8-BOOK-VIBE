import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Ooops..!!!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button>Go Back Home</button>
      </Link>
      {/* {error.status === 404 && (
        <div>
          <h3>Page not found</h3>
          <Link to="/">
            <button>Go Back Home</button>
          </Link>
        </div>
      )} */}
    </div>
  );
};

export default ErrorPage;
