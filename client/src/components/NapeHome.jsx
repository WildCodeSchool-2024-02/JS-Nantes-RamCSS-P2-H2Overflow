import "./styles/NapeHome.css";

function NapeHome() {
  return (
    <div className="nape-home">
      <h2 className="titre-nape">Nom de la nappe</h2>
      <p className="P">
        Cette nappe se trouve sur la commune de Nantes dans le departement de
        Loire Atlantique <br />
        Le dernier relevé sur cette nappe a été réalisé le 25/04/2024 <br />
        Cette nappe est en activité depuis le xx/xx/xxxx et sa profondeur est de
        35m
      </p>
    </div>
  );
}
export default NapeHome;
