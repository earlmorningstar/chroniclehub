import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./AllStyles.css";

const IntroNote = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Checking localStorage to see if the note has been shown before
    const hasShownNote = localStorage.getItem('hasShownIntroNote');

    if (!hasShownNote) {
      setIsVisible(true);
      // Setting the flag in localStorage to indicate the note has been shown
      localStorage.setItem('hasShownIntroNote', 'true');
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="intro-note">
        <div className="intro-note-content">
          <button className="dismiss-button" onClick={handleDismiss}>
          <AiOutlineClose />
          </button>
          <div className="intro-note-texts">
          <h1>
            Welcome to ChronicleHub: Your Premier Destination for Reliable News
          </h1>
          <p>
            In today's fast-paced world, staying informed is more important than
            ever. Welcome to ChronicleHub, your go-to news blog designed to keep
            you up-to-date with the latest headlines and stories from around the
            globe. At ChronicleHub, we understand the need for timely, accurate,
            and comprehensive news coverage, which is why we source our news
            directly from the highly reputable "newsapi.org."
          </p>
          <p>
            At ChronicleHub, we pride ourselves on delivering a diverse range of
            news articles that cover a variety of topics including politics,
            business, technology, entertainment, sports, health, and more. Our
            aim is to ensure that you have access to a wide spectrum of
            perspectives and insights, helping you stay informed about the
            issues that matter most to you.
          </p>
          <p>
            We believe in transparency and credibility, which is why every news
            article you find on ChronicleHub includes detailed information about
            its origins. Each article is accompanied by the name of the original
            source, the author, the date of publication, relevant images, and a
            brief description. Additionally, we provide a snippet of the content
            to give you a quick overview, along with a direct URL to the main
            source website where you can read the full story.
          </p>
          <p>
            One of the key features of ChronicleHub is our commitment to keeping
            you up-to-date. Our news feed is constantly refreshed with the
            latest stories, ensuring that you have access to the most current
            information available. Whether it's breaking news or in-depth
            analysis, you can count on us to keep you informed in real-time.
          </p>
          <p>
            ChronicleHub offers an extensive archive that allows you to search
            through every article published by over 150,000 news sources and
            blogs over the past five years. This powerful search functionality
            enables you to dive deep into historical news, explore trends, and
            revisit significant events with ease. Whether you are a researcher,
            a student, or simply a news enthusiast, our archive is a valuable
            resource for exploring the rich tapestry of recent history.
          </p>
          <p>
            Our website is designed with you in mind. We strive to provide a
            user-friendly experience that makes it easy for you to find the news
            you need. The homepage features the latest headlines, while
            categories and tags help you navigate through different topics
            effortlessly. Additionally, our search functionality allows you to
            quickly find articles on specific subjects or events.
          </p>
          <p>
            At ChronicleHub, we are more than just a news blog; we are a
            community of informed individuals who value the importance of
            staying updated. We encourage you to join our community, engage with
            the content, share your thoughts, and participate in discussions.
            Follow us on social media to stay connected and be part of a network
            that values truth, accuracy, and insightful reporting.
          </p>
          <p>
            Thank you for choosing ChronicleHub as your trusted source for news.
            We are dedicated to providing you with high-quality, reliable
            information that you can count on. Explore our site, read the latest
            articles, and discover a world of news at your fingertips. Welcome
            to ChronicleHub, where staying informed is just the beginning.
          </p>
          <p>
            We value your feedback and are always here to assist you. If you
            have any questions, suggestions, or comments, please feel free to
            reach out to us. Your input is invaluable in helping us improve and
            serve you better.
          </p>
          <p>
            Stay informed, stay connected, and enjoy the journey with
            ChronicleHub. Welcome aboard!
          </p>
          <p>Sincerely, The ChronicleHub Team</p>
          </div>
          
        </div>
      </div>
    )
  );
};

export default IntroNote;





// import { useState, useEffect } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import "./AllStyles.css";

// const IntroNote = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     // Automatically show the note when the component mounts
//     setIsVisible(true);
//   }, []);

//   const handleDismiss = () => {
//     setIsVisible(false);
//   };

//   return (
//     isVisible && (
//       <div className="intro-note">
//         <div className="intro-note-content">
//           <button className="dismiss-button" onClick={handleDismiss}>
//             <AiOutlineClose />
//           </button>
//           <div className="intro-note-texts">
//           <h1>
//             Welcome to ChronicleHub: Your Premier Destination for Reliable News
//           </h1>
//           <p>
//             In today's fast-paced world, staying informed is more important than
//             ever. Welcome to ChronicleHub, your go-to news blog designed to keep
//             you up-to-date with the latest headlines and stories from around the
//             globe. At ChronicleHub, we understand the need for timely, accurate,
//             and comprehensive news coverage, which is why we source our news
//             directly from the highly reputable "newsapi.org."
//           </p>
//           <p>
//             At ChronicleHub, we pride ourselves on delivering a diverse range of
//             news articles that cover a variety of topics including politics,
//             business, technology, entertainment, sports, health, and more. Our
//             aim is to ensure that you have access to a wide spectrum of
//             perspectives and insights, helping you stay informed about the
//             issues that matter most to you.
//           </p>
//           <p>
//             We believe in transparency and credibility, which is why every news
//             article you find on ChronicleHub includes detailed information about
//             its origins. Each article is accompanied by the name of the original
//             source, the author, the date of publication, relevant images, and a
//             brief description. Additionally, we provide a snippet of the content
//             to give you a quick overview, along with a direct URL to the main
//             source website where you can read the full story.
//           </p>
//           <p>
//             One of the key features of ChronicleHub is our commitment to keeping
//             you up-to-date. Our news feed is constantly refreshed with the
//             latest stories, ensuring that you have access to the most current
//             information available. Whether it's breaking news or in-depth
//             analysis, you can count on us to keep you informed in real-time.
//           </p>
//           <p>
//             ChronicleHub offers an extensive archive that allows you to search
//             through every article published by over 150,000 news sources and
//             blogs over the past five years. This powerful search functionality
//             enables you to dive deep into historical news, explore trends, and
//             revisit significant events with ease. Whether you are a researcher,
//             a student, or simply a news enthusiast, our archive is a valuable
//             resource for exploring the rich tapestry of recent history.
//           </p>
//           <p>
//             Our website is designed with you in mind. We strive to provide a
//             user-friendly experience that makes it easy for you to find the news
//             you need. The homepage features the latest headlines, while
//             categories and tags help you navigate through different topics
//             effortlessly. Additionally, our search functionality allows you to
//             quickly find articles on specific subjects or events.
//           </p>
//           <p>
//             At ChronicleHub, we are more than just a news blog; we are a
//             community of informed individuals who value the importance of
//             staying updated. We encourage you to join our community, engage with
//             the content, share your thoughts, and participate in discussions.
//             Follow us on social media to stay connected and be part of a network
//             that values truth, accuracy, and insightful reporting.
//           </p>
//           <p>
//             Thank you for choosing ChronicleHub as your trusted source for news.
//             We are dedicated to providing you with high-quality, reliable
//             information that you can count on. Explore our site, read the latest
//             articles, and discover a world of news at your fingertips. Welcome
//             to ChronicleHub, where staying informed is just the beginning.
//           </p>
//           <p>
//             We value your feedback and are always here to assist you. If you
//             have any questions, suggestions, or comments, please feel free to
//             reach out to us. Your input is invaluable in helping us improve and
//             serve you better.
//           </p>
//           <p>
//             Stay informed, stay connected, and enjoy the journey with
//             ChronicleHub. Welcome aboard!
//           </p>
//           <p>Sincerely, The ChronicleHub Team</p>
//           </div>
          
//         </div>
//       </div>
//     )
//   );
// };

// export default IntroNote;
