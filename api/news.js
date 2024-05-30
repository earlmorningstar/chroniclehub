// api/news.js

// import fetch from "node-fetch";

// const fetchNews = async (req, res) => {
//   const { query } = req;
//   const apiKey = process.env.REACT_APP_NEWS_API_KEY;
//   let apiUrl = `https://newsapi.org/v2/top-headlines`;

//   if (query.sources) {
//     apiUrl += `?sources=${query.sources}`;
//   } else if (query.country && query.category) {
//     apiUrl += `?country=${query.country}&category=${query.category}`;
//   } else if (query.country) {
//     apiUrl += `?country=${query.country}`;
//   } else if (query.q) {
//     apiUrl = `https://newsapi.org/v2/top-headlines?q=${query.q}`;
//   } else if (query.everything) {
//     apiUrl = `https://newsapi.org/v2/everything?q=${query.everything}`;
//     if (query.from && query.to && query.sortBy) {
//       apiUrl += `&from=${query.from}&to=${query.to}&sortBy=${query.sortBy}`;
//     }
//   } else if (query.domains) {
//     apiUrl = `https://newsapi.org/v2/everything?domains=${query.domains}`;
//   }

//   apiUrl += `&apiKey=${apiKey}`;

//   const response = await fetch(apiUrl);
//   const data = await response.json();
//   res.status(response.status).json(data);
// };

// export default fetchNews;

// import fetch from "node-fetch";

// const fetchNews = async (req, res) => {
//   const { query } = req;
//   const apiKey = process.env.REACT_APP_NEWS_API_KEY;
//   let apiUrl = `https://newsapi.org/v2/top-headlines`;

//   if (query.sources) {
//     apiUrl += `?sources=${query.sources}`;
//   } else if (query.country && query.category) {
//     apiUrl += `?country=${query.country}&category=${query.category}`;
//   } else if (query.country) {
//     apiUrl += `?country=${query.country}`;
//   } else if (query.q) {
//     apiUrl = `https://newsapi.org/v2/top-headlines?q=${query.q}`;
//   } else if (query.everything) {
//     apiUrl = `https://newsapi.org/v2/everything?q=${query.everything}`;
//     if (query.from && query.to && query.sortBy) {
//       apiUrl += `&from=${query.from}&to=${query.to}&sortBy=${query.sortBy}`;
//     }
//   } else if (query.domains) {
//     apiUrl = `https://newsapi.org/v2/everything?domains=${query.domains}`;
//   }

//   apiUrl += `&apiKey=${apiKey}`;

//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       res.status(response.status).json({ error: "Failed to fetch news" });
//       return;
//     }
//     const data = await response.json();
//     res.status(response.status).json(data);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// export default fetchNews;
