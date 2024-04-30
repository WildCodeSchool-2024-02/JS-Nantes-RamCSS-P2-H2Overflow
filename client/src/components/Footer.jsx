import { NavLink } from "react-router-dom";
import "./styles/footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="button-container">
        {/* changer la direction !!!! */}
        <NavLink className="button-footer" to="/map">
          {" "}
          Carte{" "}
        </NavLink>
        <NavLink className="button-footer" to="/mentions-legales">
          {" "}
          Mentions légales{" "}
        </NavLink>
        <NavLink className="button-footer" to="/a-propos">
          {" "}
          A propos{" "}
        </NavLink>
      </div>
      <p className="copyright">© 2024 - H2Overflow - Tous droits réservés</p>
    </footer>
  );
}
export default Footer;
