import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      {/* changer la direction !!!! */}
      <NavLink className="boutton-a-props" to="/map">
        {" "}
        A propos{" "}
      </NavLink>

      <NavLink className="boutton-carte" to="/map">
        {" "}
        A propos{" "}
      </NavLink>
    </div>
  );
}
export default Footer;
