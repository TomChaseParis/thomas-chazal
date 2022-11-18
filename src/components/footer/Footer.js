import { FaGithub, FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./FooterStyles.css";

const Footer = () => {
  const openGitHub = (url) => {
    // 👇️ setting target to _blank with window.open
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>Paris 15e</p>
          </div>

          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>+ 33 6 25 17 23 39</p>
          </div>

          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <Link to="/contact">
              <p id="email-email">chasethomasparis@gmail.com</p>
            </Link>
          </div>

          <div className="github">
            <FaGithub
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <button
              className="github"
              onClick={() => openGitHub("https://github.com/TomChaseParis")}
            >
              Github
            </button>
          </div>
          <div></div>
        </div>
        <div className="right">
          <p>@copyright 2022 - Thomas Chazal</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
