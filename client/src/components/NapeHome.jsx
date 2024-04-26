import "./styles/NapeHome.css";

function NapeHome({
  ville,
  departement,
  dateDebut,
  dateFin,
  profondeur,
  nomNappe,
}) {
  return (
    <div className="nape-home">
      <h2 className="titre-nape">{nomNappe}</h2>
      <p className="P">
        Cette nappe se trouve sur la commune de {ville} dans le département{" "}
        {departement}. <br />
        Le dernier relevé sur cette nappe a été réalisé le {dateFin}. <br />
        Cette nappe est en activité depuis le {dateDebut} et sa profondeur est
        de {profondeur}m.
      </p>
    </div>
  );
}

export default NapeHome;
