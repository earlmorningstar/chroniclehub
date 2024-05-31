import { BsTwitterX } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import "./AllStyles.css";

function StayConnected() {
  return (
    <div className="stay-connected-section">
      <span>Stay Connected, Follow Us:</span>
      <div>
        <span className="sc-icon">
          <a
            href="https://x.com/earlmorningsta1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX size={25} className="rotate-icon" />
          </a>
        </span>
        <span className="sc-icon">
          <a
            href="https://instagram.com/earlmorningstar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialInstagram size={25} className="rotate-icon" />
          </a>
        </span>
        <span className="sc-icon">
          <a
            href="https://github.com/earlmorningstar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={25} className="rotate-icon" />
          </a>
        </span>
        <span className="sc-icon">
          <a
            href="https://linkedin.com/in/joel-onyeabor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={25} className="rotate-icon" />
          </a>
        </span>
        <span className="sc-icon">
          <a
            href="mailto:onyeaborjoel@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TfiEmail size={25} className="rotate-icon" />
          </a>
        </span>
      </div>
    </div>
  );
}

export default StayConnected;
