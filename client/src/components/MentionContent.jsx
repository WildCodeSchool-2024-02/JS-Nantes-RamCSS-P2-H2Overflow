function MentionContent() {
  const monTab = [
    {
      paragraph:
        "Éditeur du site : Nom de l'entreprise ou de l'individu Adresse Téléphone Email de contact  ",
    },
    { paragraph: "Directeur de publication : Nom du directeur de publication" },
    {
      paragraph:
        "Hébergement : Nom de la société d'hébergement adresse de l'hébergeur Téléphone de l'hébergeur Email de contact de l'hébergeur",
    },
    {
      paragraph:
        "Propriété intellectuelle :Le contenu de ce site web, y compris les textes, images, graphiques, logos, et tout autre élément, est la propriété de [Nom de l'entreprise] ou de ses partenaires et est protégé par les lois sur la propriété intellectuelle. Toute reproduction, distribution, modification ou utilisation de ce contenu sans autorisation écrite préalable est strictement interdite.",
    },
    {
      paragraph:
        "Protection des données personnelles :  Les informations collectées sur ce site sont destinées à  [Nom de l'entreprise ] et peuvent être utilisées dans le cadre de la gestion de la relation client. Conformément à la loi informatique et libertés du [date], vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, veuillez nous contacter à l'adresse [adresse email].",
    },
    {
      paragraph:
        "Cookies :Ce site utilise des cookies pour améliorer l'expérience utilisateur. En utilisant ce site, vous consentez à l'utilisation de cookies conformément à notre politique en matière de cookies.",
    },
    {
      paragraph:
        "Liens vers des sites tiers :Ce site peut contenir des liens vers des sites web de tiers. [Nom de l'entreprise] n'est pas responsable du contenu ou des pratiques de confidentialité de ces sites.",
    },
    {
      paragraph:
        "Modification des mentions légales :[Nom de l'entreprise] se réserve le droit de modifier les présentes mentions légales à tout moment. Nous vous invitons donc à consulter cette page régulièrement.",
    },
    {
      paragraph:
        "Propriété intellectuelle :Le contenu de ce site web, y compris les textes, images, graphiques, logos, et tout autre élément, est la propriété de [Nom de l'entreprise] ou de ses partenaires et est protégé par les lois sur la propriété intellectuelle. Toute reproduction, distribution, modification ou utilisation de ce contenu sans autorisation écrite préalable est strictement interdite.",
    },
    {
      paragraph:
        "Protection des données personnelles :  Les informations collectées sur ce site sont destinées à  [Nom de l'entreprise ] et peuvent être utilisées dans le cadre de la gestion de la relation client. Conformément à la loi informatique et libertés du [date], vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, veuillez nous contacter à l'adresse [adresse email].",
    },
    {
      paragraph:
        "Propriété intellectuelle :Le contenu de ce site web, y compris les textes, images, graphiques, logos, et tout autre élément, est la propriété de [Nom de l'entreprise] ou de ses partenaires et est protégé par les lois sur la propriété intellectuelle. Toute reproduction, distribution, modification ou utilisation de ce contenu sans autorisation écrite préalable est strictement interdite.",
    },
  ];
  return (
    <>
      <h2 className="mentionlegaltitre"> Mentions légales </h2>
      <div className="mention-legale">
        <figure className="card">
          {/* {monTab.map((el) => el.paragraph)} */}
          {monTab.map((el) => (
            <p className="text" key="el">
              {" "}
              {el.paragraph}
            </p>
          ))}
        </figure>
      </div>
    </>
  );
}

export default MentionContent;
