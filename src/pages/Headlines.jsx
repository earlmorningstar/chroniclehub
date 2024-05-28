// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./AllStyles.css";

// function Headlines() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const apiKey = "572983a96e15481d804f5f0043bb94e9";

//         // Array of API URLs
//         const apiUrls = [
//           `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
//           `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`,
//           `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${apiKey}`,
//           `https://newsapi.org/v2/top-headlines?q=trump&apiKey=${apiKey}`,
//         ];

//         // Array to store all articles from different APIs
//         let allArticles = [];

//         // Fetch data from each API URL
//         await Promise.all(
//           apiUrls.map(async (url) => {
//             const response = await fetch(url);
//             if (response.ok) {
//               const data = await response.json();
//               const filteredArticles = data.articles.filter(
//                 (article) =>
//                   article.title &&
//                   article.description &&
//                   article.author &&
//                   article.publishedAt &&
//                   article.urlToImage &&
//                   article.title !== "[Removed]" &&
//                   article.description !== "[Removed]" &&
//                   article.author !== "[Removed]" &&
//                   article.publishedAt !== "[Removed]" &&
//                   article.urlToImage !== "[Removed]"
//               );
//               allArticles = allArticles.concat(filteredArticles);
//             } else {
//               console.error("Failed to fetch articles from:", url);
//             }
//           })
//         );

//         // Shuffle the articles
//         shuffleArray(allArticles);

//         // Set the shuffled articles
//         setArticles(allArticles);
//       } catch (error) {
//         console.error("Error fetching articles:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Fisher-Yates shuffle algorithm
//   const shuffleArray = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   };

//   return (
//     <div className="news-article-parent">
//       <div className="header-and-btn">
//         <h1>News Articles</h1>
//         <button className="btn-style" id="news-art-btn">
//           <Link className="back-btn-link" to=".." relative="path">
//             Back to homepage
//           </Link>
//         </button>
//       </div>

//       <ul>
//         {articles.map((article, index) => (
//           <div key={index}>
//             <Link className="art-link" to={`/products/${index}`}>
//               <img
//                 className="text-image"
//                 src={article.urlToImage}
//                 alt={article.title}
//               />
//               <span className="art-details">
//                 <h2>{article.title}</h2>
//                 <p>{article.description}</p>
//                 <p>Author: {article.author}</p>
//                 <p>Published At: {article.publishedAt}</p>
//                 <button className="btn-style">Read More</button>
//               </span>
//             </Link>
//           </div>
//         ))}
//       </ul>
//       <button className="btn-style" id="news-art-btn">
//         <Link className="back-btn-link" to=".." relative="path">
//           Back to homepage
//         </Link>
//       </button>
//     </div>
//   );
// }

// export default Headlines;
