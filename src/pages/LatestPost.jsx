import ArticlesContext from "../store/ArticlesContext";
import { useContext } from "react";
import { HashLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
import "./AllStyles.css";

function LatestPost() {
  const { articles, loading } = useContext(ArticlesContext);
  const article = articles.length > 0 ? articles[0] : null;

  if (loading) {
    return (
      <div className="loader-container-homePage">
        <HashLoader color="#fe302f" speedMultiplier={1} />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="latestBlogPost">
        <span>Latest Blog Post</span>
        <section className="latestBlogPost-unavil-text">
          <h2>Check back soon</h2>
          <h3>Once posts are published, you’ll see them here.</h3>
        </section>
      </div>
    );
  }

  return (
    <div className="latestBlogPost">
      <span>Latest Blog Post</span>
      {article.urlToImage && (
        <div className="latest-post-image-parent">
          <img
            className="latest-post-image"
            src={article.urlToImage}
            alt={article.title}
          />
        </div>
      )}
      <div className="latestBlogPost-text">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <p>Source: {article.source?.name}</p>
        <p>Author: {article.author}</p>
        <p>Published: {article.publishedAt}</p>
        <p>Content: {article.content}</p>
        <NavLink className="explore-navlink" to="/products">
          <button id="latestPostBtn" className="btn-style">
            View Blog
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default LatestPost;
