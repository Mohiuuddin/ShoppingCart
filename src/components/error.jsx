import { useRouteError, Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="successContainer">
      <div className="successCard errorState">
        <FaExclamationTriangle size={60} color="#ff6b6b" />
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="errorDetail">
          <i>{error.statusText || error.message}</i>
        </p>
        <div className="actionButtons">
          <Link to="/" className="continueBtn">
            <FaHome /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}