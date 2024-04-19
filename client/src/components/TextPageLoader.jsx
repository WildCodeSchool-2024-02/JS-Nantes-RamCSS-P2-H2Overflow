import { NavLink } from "react-router-dom";

function TextPageLoader() {
  // * code en attente pour annimation
  // const { setIsAnimating } = useContext(AnimationContext);

  // const handleClick = () => {
  //   setIsAnimating(true);
  //   setTimeout(() => {
  //     setIsAnimating(false);
  //     window.location.href = "/map";
  //     // Ajoutez ici la logique pour naviguer vers la page "map"
  //   }, 2000);
  // };
  // * ///////////////////////////////////////// * //

  return (
    <section className="section_loader">
      <h2 className="h2-loader">Découvrez les profondeurs invisibles</h2>
      <p className="p-loader">
        Explorez les nappes phréatiques pour comprendre
        <br />
        leur importance et leur préservation.
        <br />
        <br />
        Notre base de données est composée de 1000 tableaux de sources
        différentes.
      </p>
      <NavLink className="button" to="/map">
        Accéder aux données
      </NavLink>
    </section>
  );
}

export default TextPageLoader;
