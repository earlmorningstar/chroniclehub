import { useContext, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import ArticlesContext from "../store/ArticlesContext";
import "./AllStyles.css";

function ProductsPage() {
  const { articles, loading } = useContext(ArticlesContext);
  const navigate = useNavigate();

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
    }
  }, []);

  const handleArticleClick = (article, index) => {
    const currentScrollPosition = window.scrollY;
    sessionStorage.setItem("scrollPosition", currentScrollPosition);
    navigate(`/products/${index}`, { state: { article } });
  };

  return (
    <div className="news-article-parent">
      <div className="header-and-btn">
        <h1>News Articles</h1>
        <NavLink className="back-btn-link" to=".." relative="path">
          <button className="btn-style">back to homepage</button>
        </NavLink>
      </div>

      {loading ? (
        <div className="loader-container">
          <HashLoader color="#fe302f" speedMultiplier={1} />
        </div>
      ) : (
        <ul>
          {articles.map((article, index) => (
            <div key={index} onClick={() => handleArticleClick(article, index)}>
              <Link className="art-link" to={`/products/${index}`}>
                <img
                  className="text-image"
                  src={article.urlToImage}
                  alt={article.title}
                />
                <span className="art-details">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <p className="author">Author: {article.author}</p>
                  <p>Published: {article.publishedAt}</p>
                  <button className="btn-style">Read More</button>
                </span>
              </Link>
            </div>
          ))}
        </ul>
      )}
      <NavLink className="back-btn-link" to=".." relative="path">
        <button className="btn-style">back to homepage</button>
      </NavLink>
    </div>
  );
}

export default ProductsPage;