import "./AllStyles.css";
import CH1 from "./../images/CH1.jpg";

function StayConnected() {
  return (
    <div className="stay-connected-section">
      <span>Stay Connected</span>
      <div>
        
        <div className="stay-conn-img-parent">
          <img className="stay-conn-img" src={CH1} alt="description" />
        </div>
        <div className="stay-conn-img-parent">
          <img className="stay-conn-img" src={CH1} alt="description" />
        </div>
        <div className="stay-conn-img-parent">
          <img className="stay-conn-img" src={CH1} alt="description" />
        </div>
        <div className="stay-conn-img-parent">
          <img className="stay-conn-img" src={CH1} alt="description" />
        </div>
        <div className="stay-conn-img-parent">
          <img className="stay-conn-img" src={CH1} alt="description" />
        </div>
        <div className="stay-conn-img-parent">
          <img className="stay-conn-img" src={CH1} alt="description" />
        </div>
      </div>
    </div>
  );
}

export default StayConnected;
