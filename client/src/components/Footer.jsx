import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <NavLink className="boutton-a-props" to="/">
        A propos
      </NavLink>

      <NavLink className="boutton-carte" to="/PagePrincipale">
        A propos
      </NavLink>
    </div>
  );
}
export default Footer;
