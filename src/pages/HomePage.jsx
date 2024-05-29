import "./AllStyles.css";
import Footer from "./Footer.jsx";
import HeroSection from "./HeroSection.jsx";
import LatestPost from "./LatestPost.jsx";
import MeetTheAuthor from "./MeetTheAuthor.jsx";
import StayConnected from "./StayConnected.jsx";
import IntroNote from "./IntroNote.jsx";

function HomePage() {
  return (
    <div className="homePage-section">
      <IntroNote />
      <HeroSection />
      <LatestPost />
      <MeetTheAuthor />
      <StayConnected />
      <Footer />
    </div>
  );
}

export default HomePage;
