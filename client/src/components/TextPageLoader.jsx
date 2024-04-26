import { NavLink } from "react-router-dom";

function TextPageLoader({ stationData, moyenneProfondeur }) {
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
        Explorez les nappes phréatiques pour comprendre leur importance et leur
        préservation.
      </p>
      <p className="p-loader">
        En France, au 1er janvier 2024, {stationData} nappes phréatiques ont été
        analysées. La moyenne de toutes ces nappes est de {moyenneProfondeur}%.
      </p>
      <NavLink className="button" to="/map">
        Accéder aux données
      </NavLink>
    </section>
  );
}

export default TextPageLoader;
