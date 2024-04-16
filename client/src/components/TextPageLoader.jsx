import { NavLink } from "react-router-dom";

function TextPageLoader() {
  return (
    <>
      <p className="PLoader">
        Découvrez les profondeurs invisibles
        <br />
        Explorez les nappes phréatiques pour comprendre <br /> leur importance
        et leur préservation.
      </p>

      <NavLink className="Boutton" to="/PagePrincipale">
        Accéder aux données
      </NavLink>
    </>
  );
}
export default TextPageLoader;
