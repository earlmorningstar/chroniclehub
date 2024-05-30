import { createContext, useState, useEffect } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";

const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const apiKey = "572983a96e15481d804f5f0043bb94e9";
        const apiKey = process.env.REACT_APP_NEWS_API_KEY;
        // console.log("API Key:", apiKey);
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
            const articles = data.articles
              .filter((article) => {
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
              })
              .map((article) => ({
                ...article,
                publishedAt: formatDistanceToNow(
                  parseISO(article.publishedAt),
                  { addSuffix: true }
                ),
              }));
            allArticles = allArticles.concat(articles);
            await delay(1000);
          } else {
            console.error("Failed to fetch articles from:", url);
          }
        }

        setArticles(allArticles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, loading }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesContext;
