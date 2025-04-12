import { useContext, useEffect, useState } from "react";
import { useLocation, useParams, NavLink } from "react-router-dom";
import { HashLoader } from "react-spinners";
import "./AllStyles.css";
import ArticlesContext from "../store/ArticlesContext";

function ProductsDetailPage() {
  const { articles, loading } = useContext(ArticlesContext);
  const [article, setArticle] = useState(null);
  const { productId } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.state && location.state.article) {
      setArticle(location.state.article);
    } else if (articles.length > 0) {
      const selectedArticle = articles[parseInt(productId)];
      setArticle(selectedArticle);
    }
  }, [productId, location.state, articles]);

  if (loading || !article) {
    return (
      <div className="loader-container">
        <HashLoader color="#fe302f" speedMultiplier={1} />
      </div>
    );
  }

  return (
    <div className="productDetailParentDiv">
      <div className="header-and-btn">
        <h1>Article Details</h1>
        <NavLink className="back-btn-link" to=".." relative="path">
          <button className="btn-style">previous page</button>
        </NavLink>
      </div>

      <img
        className="prddetial-text-image"
        src={article.urlToImage}
        alt={article.title}
      />
      <div id="art-details-id" className="art-details">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <p>Source: {article.source.name}</p>
        <p className="author">Author: {article.author}</p>
        <p>Published: {article.publishedAt}</p>
        <p>
          Content: {article.content}
          {article.content.includes("[+") && (
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {" "}
              Read More
            </a>
          )}
        </p>
        <NavLink className="back-btn-link" to=".." relative="path">
          <button className="btn-style">previous page</button>
        </NavLink>
      </div>
    </div>
  );
}

export default ProductsDetailPage;