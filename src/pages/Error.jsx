import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import "./AllStyles.css";

function ErrorPage() {
  return (
    <div className="error-page-css">
      <MainNavigation />
      <main  className="error-page-main">
        <h1>An error occured!!</h1>
        <p>Could not find this page.</p>
        <button className="btn-style" id="news-art-btn">
        <Link className="back-btn-link" to=".." relative="path">
          Back to homepage
        </Link>
      </button>
      </main>
      
    </div>
  );
}

export default ErrorPage;
