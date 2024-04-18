import { NavLink } from "react-router-dom";
import "./styles/footer.css";

function Footer() {
  return (
    <div className="parent-nav">
      {/* changer la direction !!!! */}
      <NavLink className="boutton-a-props" to="/map">
        {" "}
        A propos{" "}
      </NavLink>

      <NavLink className="boutton-carte" to="/map">
        {" "}
        Carte{" "}
      </NavLink>
    </div>
  );
}
export default Footer;
