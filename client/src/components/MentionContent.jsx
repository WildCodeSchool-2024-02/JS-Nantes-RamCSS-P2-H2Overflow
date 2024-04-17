function MentionContent() {
  return (
    <figure className="card">
      <h1 className="mentionlegaltitre">Mentions légales</h1>

      <p className="mentionlegalp">
        {" "}
        <br /> Ce site web est édité par [Nom de la société], une société [forme
        juridique] au capital de [montant du capital social],
      </p>

      <p className="mentionlegalp2">
        {" "}
        <br />
        immatriculée au Registre du Commerce et des Sociétés de [ville] sous le
        numéro [numéro RCS], dont le siège social est situé au [adresse ].
      </p>

      <p>
        {" "}
        <br /> Directeur de la publication : [Nom du directeur de la
        publication] Contact : [Adresse email de contact]
        <br /> Hébergement : Ce site est hébergé par [Nom de l'hébergeur], dont
        le siège social est situé au [adresse complète].
      </p>

      <p>
        {" "}
        <br />
        Propriété Intellectuelle : Tous les éléments présents sur ce site, y
        compris mais non limité aux textes, images, logos, graphiques, vidéos,
        et autres contenus, sont la propriété intellectuelle de [Nom de la
        société] ou de ses concédants de licence, et sont protégés par les lois
        françaises et internationales sur le droit d'auteur et la propriété
        Intellectuelle.
      </p>

      <p>
        {" "}
        <br />
        Toute reproduction, distribution, modification ou utilisation de ces
        éléments sans l'autorisation préalable écrite de [Nom de la société] est
        strictement interdite.
      </p>

      <p>
        {" "}
        <br />
        Collecte de données personnelles : [Nom de la société] collecte et
        traite les données personnelles conformément à sa politique de
        confidentialité, disponible à l'adresse suivante : [lien vers la
        politique de confidentialité].
      </p>

      <p>
        {" "}
        <br /> Cookies : Ce site utilise des cookies. Pour plus d'informations
        sur l'utilisation des cookies et sur la manière de les gérer, veuillez
        consulter notre politique en matière de cookies disponible à l'adresse
        suivante : [lien vers la politique en matière de cookies].
      </p>
    </figure>
  );
}

export default MentionContent;
