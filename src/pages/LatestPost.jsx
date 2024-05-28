import "./AllStyles.css";

function LatestPost({ article }) { // Receive article as prop
  return (
    <div className="latestBlogPost">
      <span>Latest Blog Posts</span>
      <h1>Articles</h1>
      {article && ( // Render article details if it exists
        <>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <p>Source: {article.source?.name}</p>
          <p>Author: {article.author}</p>
          <p>Published: {article.publishedAt}</p>
          {article.urlToImage && (
            <img
              className="latest-post-image"
              src={article.urlToImage}
              alt={article.title}
            />
          )}
        </>
      )}
    </div>
  );
}

export default LatestPost;



// import "./AllStyles.css";

// function LatestPost() {
//   return (
    
//       <div className="latestBlogPost">
//         <span>Latest Blog Posts</span>
//         <h1>Articles</h1>
//         <h2>Title</h2>
//         <p>Description</p>
//         <p>Source: </p>
//         <p>Author:</p>
//         <p>Published:</p>
//         <div>Image</div>
//       </div>
    
//   );
// }

// export default LatestPost;
