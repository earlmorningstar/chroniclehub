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

// SAME CODE WITHOUT USING CONTEXT PROVIDER.

// import { useState, useEffect } from "react";
// import { useLocation, useParams, Link } from "react-router-dom";
// import { HashLoader } from "react-spinners";
// import "./AllStyles.css";
// import { formatDistanceToNow, parseISO } from "date-fns";

// function ProductsDetailPage() {
//   const [article, setArticle] = useState(null);
//   const { productId } = useParams();
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     if (location.state && location.state.article) {
//       setArticle(location.state.article);
//     } else {
//       const fetchData = async () => {
//         try {
//           const apiKey = "572983a96e15481d804f5f0043bb94e9";
//           const apiUrls = [
//             `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
//             `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`,
//             `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${apiKey}`,
//             `https://newsapi.org/v2/top-headlines?q=trump&apiKey=${apiKey}`,
//             `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`,
//             `https://newsapi.org/v2/everything?q=apple&from=2024-05-15&to=2024-05-15&sortBy=popularity&apiKey=${apiKey}`,
//             `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${apiKey}`,
//           ];

//           let allArticles = [];
//           const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//           const now = new Date();

//           for (let url of apiUrls) {
//             const response = await fetch(url);
//             if (response.ok) {
//               const data = await response.json();
//               const articles = data.articles.filter((article) => {
//                 const publishedAt = new Date(article.publishedAt);
//                 const ageInDays = (now - publishedAt) / (1000 * 60 * 60 * 24);
//                 return (
//                   ageInDays <= 2 &&
//                   article.title &&
//                   article.description &&
//                   article.author &&
//                   article.urlToImage &&
//                   article.title !== "[Removed]" &&
//                   article.description !== "[Removed]" &&
//                   article.author !== "[Removed]" &&
//                   article.publishedAt !== "[Removed]" &&
//                   article.urlToImage !== "[Removed]"
//                 );
//               }).map((article) => ({
//                 ...article,
//                 publishedAt: formatDistanceToNow(parseISO(article.publishedAt), { addSuffix: true }),
//               }));
//               allArticles = allArticles.concat(articles);
//               await delay(1000);
//             } else {
//               console.error("Failed to fetch articles from:", url);
//             }
//           }

//           if (allArticles.length > 0) {
//             const selectedArticle = allArticles[parseInt(productId)];
//             setArticle(selectedArticle);
//           }
//         } catch (error) {
//           console.error("Error fetching articles:", error);
//         }
//       };

//       fetchData();
//     }
//   }, [productId, location.state]);

//   if (!article) {
//     return (
//       <div className="loader-container">
//         <HashLoader color="#fe302f" speedMultiplier={1} />
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="productDetailParentDiv">
//         <div className="header-and-btn">
//           <h1>Article Details</h1>
//           <button className="btn-style" id="news-art-btn">
//             <Link className="back-btn-link" to=".." relative="path">
//               Previous Page
//             </Link>
//           </button>
//         </div>

//         <img
//           className="prddetial-text-image"
//           src={article.urlToImage}
//           alt={article.title}
//         />
//         <div id="art-details-id" className="art-details">
//           <h2>{article.title}</h2>
//           <p>{article.description}</p>
//           <p>Source: {article.source.name}</p>
//           <p className="author">Author: {article.author}</p>
//           <p>Published: {article.publishedAt}</p>
//           <p>
//             Content: {article.content}
//             {article.content.includes("[+") && (
//               <a href={article.url} target="_blank" rel="noopener noreferrer"> Read More</a>
//             )}
//           </p>
//           <button className="btn-style" id="news-art-btn">
//             <Link className="back-btn-link" to=".." relative="path">
//               Previous Page
//             </Link>
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default ProductsDetailPage;
