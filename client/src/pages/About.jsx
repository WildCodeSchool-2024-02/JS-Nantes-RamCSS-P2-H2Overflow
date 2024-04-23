import Footer from "../components/Footer";
import "../components/styles/about.css";

function About() {
  return (
    <>
      <h2>A propos</h2>
      <div className="about-container">
        <h3>Qui se cache derrière H2Overflow?</h3>
        <p>
          4 développeurs en reconversion professionnelle : Julien, Lucas,
          Michaël et Pascal. Cette application web a été créée dans le cadre le
          projet 2 de notre formation à la Wild Code School. L'objectif de ce
          projet était de créer une application web utilisant la bibliothèque
          Javascript "React", ainsi qu'une API.
        </p>
        <h3>Pourquoi H2Overflow?</h3>
        <p>
          L'objectif de cette application web n'est pas scientifique. Elle
          reflète notre propre interprétation des données. Nous les avons
          utilisés dans le cadre d'une comparaison du taux de remplissage des
          nappes phréatiques en métropole et dans les DOM-TOM.
        </p>
        <h3>Quelles sources H2Overflow utilise?</h3>
        <p>
          Pour réaliser notre application, nous avons utilisé les données sur la
          piézométrie disponible sur Hubeau (lien), un outil de diffusion de
          données du SIE* à destination des ré utilisateurs, qu'il s'agisse de
          développeurs web ou mobiles, de bureaux d'études, de services publics,
          de collectivités, d'entreprises, ...
          <br />
          Dans cette API, nous avons utilisé les données des bases :{" "}
        </p>
        <ul>
          <li>Chronique : Pour obtenir des informations sur les relevés</li>
          <li>
            Station : Pour obtenir des renseignements sur les réserves d'eau
            souterraines
          </li>
        </ul>
        <h3>Comment H2Overflow trouve ses chiffres?</h3>
        <p>...</p>
        <p className="notabene">
          *Système d'Information sur l'Eau : Dispositif mis en place par l'État
          pour partager et rendre accessibles les données sur l'eau du secteur
          public.{" "}
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
