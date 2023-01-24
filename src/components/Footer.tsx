import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import "../styles/footer.css";

const Footer = () => {
  const handleFacebook = () => {
    window.open("https://www.facebook.com/rappimexico/", "_blank");
  };

  const handleTwitter = () => {
    window.open("https://twitter.com/rappimexico?lang=es", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/rappimx/", "_blank");
  };
  return (
    <footer className="footerSection">
      <div className="socialIcons">
        <AiFillFacebook className="socialIcon" onClick={handleFacebook} />
        <AiOutlineTwitter className="socialIcon" onClick={handleTwitter} />
        <AiOutlineInstagram className="socialIcon" onClick={handleInstagram} />
      </div>
      <div> © 2023 Rappi Clone-ITK</div>
    </footer>
  );
};

export default Footer;
