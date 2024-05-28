import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { formatDistanceToNow, parseISO } from "date-fns";
import "./AllStyles.css";


function ProductsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const apiKey = "572983a96e15481d804f5f0043bb94e9";
        const apiUrls = [
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
          `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`,
          `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${apiKey}`,
          `https://newsapi.org/v2/top-headlines?q=trump&apiKey=${apiKey}`,
          `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`,
          `https://newsapi.org/v2/everything?q=apple&from=2024-05-15&to=2024-05-15&sortBy=popularity&apiKey=${apiKey}`,
          `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${apiKey}`,
        ];

        let allArticles = [];
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        const now = new Date();

        for (let url of apiUrls) {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            const articles = data.articles.filter((article) => {
              const publishedAt = new Date(article.publishedAt);
              const ageInDays = (now - publishedAt) / (1000 * 60 * 60 * 24);
              return (
                ageInDays <= 2 &&
                article.title &&
                article.description &&
                article.author &&
                article.urlToImage &&
                article.title !== "[Removed]" &&
                article.description !== "[Removed]" &&
                article.author !== "[Removed]" &&
                article.publishedAt !== "[Removed]" &&
                article.urlToImage !== "[Removed]"
              );
            }).map((article) => ({
              ...article,
              publishedAt: formatDistanceToNow(parseISO(article.publishedAt), { addSuffix: true }),
            }));
            allArticles = allArticles.concat(articles);
            await delay(1000); // 1 second delay between requests
          } else {
            console.error("Failed to fetch articles from:", url);
          }
        }

        setArticles(allArticles);
        setLoading(false);

        // Restore scroll position
        const savedScrollPosition = sessionStorage.getItem('scrollPosition');
        if (savedScrollPosition) {
          window.scrollTo(0, parseInt(savedScrollPosition));
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const handleArticleClick = (article, index) => {
    const currentScrollPosition = window.scrollY;
    sessionStorage.setItem('scrollPosition', currentScrollPosition);
    navigate(`/products/${index}`, { state: { article } });
  };

  return (
    <div className="news-article-parent">
      <div className="header-and-btn">
        <h1>News Articles</h1>
        <button className="btn-style" id="news-art-btn">
          <Link className="back-btn-link" to=".." relative="path">
            Back to homepage
          </Link>
        </button>
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
                  <p>Author: {article.author}</p>
                  <p>Published: {article.publishedAt}</p>
                  <button className="btn-style">Read More</button>
                </span>
              </Link>
            </div>
          ))}
        </ul>
      )}
      <button className="btn-style" id="news-art-btn">
        <Link className="back-btn-link" to=".." relative="path">
          Back to homepage
        </Link>
      </button>
    </div>
  );
}

export default ProductsPage;


//PROBABLY THE OLD BEST BELOW


// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { HashLoader } from "react-spinners";
// import "./AllStyles.css";

// function ProductsPage() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true); // Added loading state

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true); // Setting loading to true when fetching starts
//         const apiKey = "572983a96e15481d804f5f0043bb94e9";
//         const apiUrls = [
//           `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
//           `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`,
//           `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${apiKey}`,
//           `https://newsapi.org/v2/top-headlines?q=trump&apiKey=${apiKey}`,
//           `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`,
//           `https://newsapi.org/v2/everything?q=apple&from=2024-05-15&to=2024-05-15&sortBy=popularity&apiKey=${apiKey}`,
//           `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${apiKey}`,
//         ];

//         let allArticles = [];

//         const fetchArticles = async (url) => {
//           const response = await fetch(url);
//           if (response.ok) {
//             const data = await response.json();
//             return data.articles.filter(
//               (article) =>
//                 article.title &&
//                 article.description &&
//                 article.author &&
//                 article.publishedAt &&
//                 article.urlToImage &&
//                 article.title !== "[Removed]" &&
//                 article.description !== "[Removed]" &&
//                 article.author !== "[Removed]" &&
//                 article.publishedAt !== "[Removed]" &&
//                 article.urlToImage !== "[Removed]"
//             );
//           } else {
//             console.error("Failed to fetch articles from:", url);
//             return [];
//           }
//         };

//         for (let url of apiUrls) {
//           const articles = await fetchArticles(url);
//           allArticles = allArticles.concat(articles);
//         }

//         setArticles(allArticles);
//         setLoading(false); // Setting loading to false when fetching is done
//       } catch (error) {
//         console.error("Error fetching articles:", error);
//         setLoading(false); // Setting loading to false in case of error
//       }
//     };

//     fetchData();

//     // Refreshing articles every 4 minutes
//     const interval = setInterval(fetchData, 4 * 60 * 1000);

//     return () => clearInterval(interval);
//   }, []);

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

//       {loading ? (
//         <div className="loader-container">
//           <HashLoader color="#fe302f" speedMultiplier={1} />
//         </div>
//       ) : (
//         <ul>
//           {articles.map((article, index) => (
//             <div key={index}>
//               <Link className="art-link" to={`/products/${index}`}>
//                 <img
//                   className="text-image"
//                   src={article.urlToImage}
//                   alt={article.title}
//                 />
//                 <span className="art-details">
//                   <h2>{article.title}</h2>
//                   <p>{article.description}</p>
//                   <p>Author: {article.author}</p>
//                   <p>Published At: {article.publishedAt}</p>
//                   <button className="btn-style">Read More</button>
//                 </span>
//               </Link>
//             </div>
//           ))}
//         </ul>
//       )}
//       <button className="btn-style" id="news-art-btn">
//         <Link className="back-btn-link" to=".." relative="path">
//           Back to homepage
//         </Link>
//       </button>
//     </div>
//   );
// }

// export default ProductsPage;
