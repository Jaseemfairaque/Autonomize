import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer__container">
      <Link to="/" className="text-sm">Muhamed Jaseem Fairaque</Link>
    </footer>
  );
};

export default Footer;
