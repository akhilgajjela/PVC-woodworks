import { Link } from "react-router-dom";
import logo from "../assets/images/logo1.png";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__col footer__col--brand">
          <Link to="/" className="footer__brand">
            <img src={logo} alt="" className="footer__logo" width={56} height={56} />
            <span className="footer__name">VENKATESHWARA PVC Wood Works</span>
          </Link>
          <p className="footer__tagline">
            Crafting durable PVC wood furniture and fixtures with timeless warmth and trusted
            craftsmanship.
          </p>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Quick links</h3>
          <ul className="footer__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Contact</h3>
          <address className="footer__address">
            <p>Thorrur 500163</p>
            <p>Mahabubabd, Telangana</p>
            <p>
              <a href="tel:+919949453139">+91 9949453139</a>
            </p>
            <p>
              <a href="mailto:gajjelaakhil39@gmail.com.in">gajjelaakhil39@gmail.com.in</a>
            </p>
            <p className="footer__hours">Mon–Sun: 9:00 AM – 7:00 PM</p>
          </address>
        </div>
      </div>

      <div className="footer__bar">
        <p>© {year} VENKATESHWARA PVC Wood Works. All rights reserved.</p>
      </div>
    </footer>
  );
}
