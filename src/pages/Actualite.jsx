import React from 'react';

const Actualite = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Actualités de la CPGE-MENAPLN</h1>

      {/* Section Actualités Récentes */}
      <section className="mb-5">
        <h2 className="mb-4">Actualités Récentes</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Ouverture des inscriptions 2024</h5>
                <p className="card-text">
                  La CPGE-MENAPLN annonce l'ouverture des inscriptions pour l'année académique 2024-2025. 
                  Les candidats intéressés peuvent déposer leurs dossiers du 1er au 31 juillet 2024.
                </p>
                <p className="text-muted">Publié le 15 février 2024</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Nouveau partenariat avec l'Université de Ouagadougou</h5>
                <p className="card-text">
                  La CPGE-MENAPLN renforce ses partenariats académiques avec la signature d'une convention 
                  de collaboration avec l'Université de Ouagadougou.
                </p>
                <p className="text-muted">Publié le 10 février 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Événements */}
      <section className="mb-5">
        <h2 className="mb-4">Événements à Venir</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Journée Portes Ouvertes</h5>
                <p className="card-text">
                  Venez découvrir notre établissement lors de notre journée portes ouvertes le 15 mars 2024.
                  Une occasion unique de rencontrer les enseignants et les étudiants.
                </p>
                <p className="text-muted">15 mars 2024</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Conférence sur les Langues Nationales</h5>
                <p className="card-text">
                  Une conférence internationale sur la promotion des langues nationales se tiendra 
                  dans nos locaux le 20 avril 2024.
                </p>
                <p className="text-muted">20 avril 2024</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Cérémonie de Remise des Diplômes</h5>
                <p className="card-text">
                  La promotion 2023 recevra ses diplômes lors d'une cérémonie solennelle le 30 mai 2024.
                </p>
                <p className="text-muted">30 mai 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Blog */}
      <section className="mb-5">
        <h2 className="mb-4">Blog Éducatif</h2>
        <article className="mb-4">
          <h3>L'importance des langues nationales dans l'éducation</h3>
          <p className="lead">
            La CPGE-MENAPLN s'engage dans la promotion des langues nationales comme vecteur de développement.
          </p>
          <p>
            Dans un contexte mondialisé, la préservation et la promotion des langues nationales revêtent 
            une importance capitale. La CPGE-MENAPLN, en tant qu'institution d'excellence, s'engage 
            activement dans cette mission à travers ses programmes d'enseignement et ses activités de recherche.
          </p>
          <p>
            Notre approche pédagogique intègre harmonieusement l'enseignement des langues nationales 
            avec les disciplines scientifiques, créant ainsi un environnement d'apprentissage riche 
            et diversifié. Les étudiants sont encouragés à explorer les liens entre les connaissances 
            traditionnelles et modernes, favorisant ainsi une compréhension approfondie de leur culture 
            tout en développant des compétences académiques solides.
          </p>
          <p>
            Les projets de recherche menés par nos étudiants et enseignants contribuent à l'enrichissement 
            des ressources pédagogiques en langues nationales, facilitant ainsi leur intégration dans 
            le système éducatif formel. Cette dynamique permet de créer un pont entre le savoir 
            traditionnel et l'éducation moderne, essentiel pour le développement durable de notre société.
          </p>
        </article>

        <article className="mb-4">
          <h3>Les débouchés après la CPGE</h3>
          <p className="lead">
            Découvrez les nombreuses opportunités qui s'offrent à nos étudiants après leur formation.
          </p>
          <p>
            La CPGE-MENAPLN prépare ses étudiants à intégrer les plus grandes écoles d'ingénieurs 
            et de commerce du Burkina Faso et de la sous-région. Notre formation rigoureuse permet 
            aux étudiants d'acquérir des compétences solides en sciences fondamentales et en langues, 
            ouvrant ainsi la voie à de nombreuses opportunités professionnelles.
          </p>
          <p>
            Les diplômés de notre établissement se distinguent par leur polyvalence et leur capacité 
            d'adaptation. Ils sont particulièrement recherchés dans les secteurs de l'éducation, 
            de la recherche, de l'industrie et des services. Notre réseau d'anciens étudiants, 
            actifs dans divers domaines, témoigne de la qualité de notre formation et de la 
            pertinence de notre approche pédagogique.
          </p>
        </article>
      </section>

      {/* Section Newsletter */}
      <section className="bg-light p-4 rounded">
        <h2 className="text-center mb-4">Restez Informé</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="d-flex gap-2">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Votre adresse email"
              />
              <button type="submit" className="btn btn-primary">
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Actualite; 