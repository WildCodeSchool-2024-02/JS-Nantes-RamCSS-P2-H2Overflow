import Footer from "../components/Footer";
import "../components/styles/about.css";
import "../App.css";

function About() {
  return (
    <>
      <div className="about-global-container">
        <h2>A propos</h2>
        <div className="text-container">
          <div className="height-scrollbar">
            <div className="text-element">
              <h3>Qui se cache derrière H2Overflow?</h3>
              <p>
                4 développeurs en reconversion professionnelle : Julien, Lucas,
                Michaël et Pascal. Cette application web a été créée dans le
                cadre le projet 2 de notre formation à la Wild Code School.
                L'objectif de ce projet était de créer une application web
                utilisant la bibliothèque Javascript "React", ainsi qu'une API.
              </p>
              <h3>Pourquoi H2Overflow?</h3>
              <p>
                L'objectif de cette application web n'est pas scientifique. Elle
                reflète notre propre interprétation des données. Nous les avons
                utilisés dans le cadre d'une comparaison du taux de remplissage
                des nappes phréatiques en métropole et dans les DOM-TOM.
              </p>
              <h3>Quelles sources H2Overflow utilise?</h3>
              <p>
                Pour réaliser notre application, nous avons utilisé les données
                sur la piézométrie disponible sur Hubeau (lien), un outil de
                diffusion de données du{" "}
                <dfn>
                  <abbr
                    title="Système d'Information sur l'Eau : Dispositif mis en place par l'État
            pour partager et rendre accessibles les données sur l'eau du secteur
            public."
                  >
                    SIE
                  </abbr>
                </dfn>{" "}
                à destination des ré utilisateurs, qu'il s'agisse de
                développeurs web ou mobiles, de bureaux d'études, de services
                publics, de collectivités, d'entreprises, ...
                <br />
                Dans cette API, nous avons utilisé les données des bases :{" "}
              </p>
              <ul>
                <li>
                  Chronique : Pour obtenir des informations sur les relevés
                </li>
                <li>
                  Station : Pour obtenir des renseignements sur les réserves
                  d'eau souterraines
                </li>
              </ul>
              <h3>Comment H2Overflow calcul ces données?</h3>
              <p>
                Pour afficher nos différents chiffres, nous avons utilisés
                différents calculs :
              </p>
              <ul>
                <li>Calcul du pourcentage de remplissage de la nappe :</li>
              </ul>
              <p>
                Depuis l'API, en se basant sur le{" "}
                <dfn>
                  <abbr title="Code National de la Bande du Sous-Sol : référence d'un ouvrage souterrain utilisé pour le captage d'eau.">
                    code_BSS
                  </abbr>
                </dfn>{" "}
                de chaque nappe, nous avons utilisé les données suivantes :{" "}
                <dfn>
                  <abbr title="La profondeur à laquelle l'ouvrage souterrain a été examiné.">
                    "profondeur_investigation"
                  </abbr>
                </dfn>
                ,{" "}
                <dfn>
                  <abbr title="Hauteur mesurée en fonction du niveau d'eau par rapport au plafond de l'ouvrage souterrain.">
                    "profondeur_nappe"
                  </abbr>
                </dfn>
              </p>
              <br />
              <div className="calcul">
                <p>Pourcentage du taux de remplissage de la nappe = </p>
                <img
                  className="img-calcul"
                  src="../src/assets/images/img-calcul-pourcentage.png"
                  alt="calcul mathématique"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
