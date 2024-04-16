import { NavLink } from "react-router-dom";

function TextPageLoader(data) {
  const { data: dataContent } = data;

  return (
    <section className="section_loader">
      <h2 className="h2-loader">Découvrez les profondeurs invisibles</h2>

      <p className="p-loader">
        Explorez les nappes phréatiques pour comprendre
        <br />
        leur importance et leur préservation.
        <br />
        <br />
        Notre base de donnée est composée de {dataContent} tableaux de source
        diférentes.
      </p>

      <NavLink className="boutton" to="/map">
        Accéder aux données
      </NavLink>
    </section>
  );
}
export default TextPageLoader;
