import React from 'react';
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaClock, FaUniversity, FaUserGraduate, FaRocket, FaTrophy, FaSchool } from 'react-icons/fa';
import '../styles/Formation.css';

interface Formation {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const formations: Formation[] = [
  {
    id: 1,
    title: "MPSI",
    description: "Mathématiques, Physique et Sciences de l'Ingénieur - Préparation aux grandes écoles d'ingénieurs",
    icon: <FaGraduationCap className="formation-icon" />
  },
  {
    id: 2,
    title: "BCPST",
    description: "Biologie, Chimie, Physique et Sciences de la Terre - Préparation aux écoles d'agronomie et vétérinaires",
    icon: <FaBook className="formation-icon" />
  }
];

const parcours = [
  {
    id: 1,
    year: "Semestre 1",
    title: "Fondamentaux",
    description: "Introduction aux concepts fondamentaux en mathématiques, physique et chimie",
    icon: <FaBook />
  },
  {
    id: 2,
    year: "Semestre 2",
    title: "Approfondissement",
    description: "Approfondissement des connaissances et développement des compétences",
    icon: <FaUniversity />
  },
  {
    id: 3,
    year: "Semestre 3",
    title: "Consolidation",
    description: "Consolidation des connaissances et préparation aux concours",
    icon: <FaUserGraduate />
  },
  {
    id: 4,
    year: "Semestre 4",
    title: "Préparation Finale",
    description: "Préparation intensive aux concours et révision des acquis",
    icon: <FaRocket />
  }
];

const reussites = {
  concours: [
    {
      id: 1,
      nom: "École Polytechnique",
      description: "École d'ingénieurs de prestige",
      pays: "France",
      icon: <FaTrophy />
    },
    {
      id: 2,
      nom: "Centrale Casablanca",
      description: "Ecole d'ingenieur generaliste",
      pays: "Maroc",
      icon: <FaTrophy />
    },
    {
      id: 3,
      nom: "INPHB",
      description: "Ecole d'ingenieur en informatique et systemes de gestion",
      pays: "Côte d'Ivoire",
      icon: <FaTrophy />
    },
    {
      id: 4,
      nom: "2IE",
      description: "Ecole d'ingenieur en sciences et technologies",
      pays: "Burkina Faso",
      icon: <FaTrophy />
    },
    {
      id: 5,
      nom: "Asecna",
      description: "Ecole d'ingenieur en sciences et technologies",
      pays: "Sénégal",
      icon: <FaTrophy />
    },
    {
      id: 6,
      nom: "ISE",
      description: "je connais pas la description Raso ",
      pays: "Burkina Faso",
      icon: <FaTrophy />
    }
  ],
  universites: [
    {
      id: 1,
      nom: "Ecole Centrale Casablanca",
      description: "Pôle d'excellence scientifique",
      pays: "Maroc",
      icon: <FaSchool />
    },
    {
      id: 2,
      nom: "Ecole Polytechnique de Ouagadougou",
      description: "Centre de recherche renommé",
      pays: "Burkina Faso",
      icon: <FaSchool />
    },
    {
      id: 3,
      nom: "Université de Ouagadougou",
      description: "Pôle scientifique majeur",
      pays: "Burkina Faso",
      icon: <FaSchool />
    },
    {
      id: 4,
      nom: "2IE",
      description: "Centre d'innovation technologique",
      pays: "Burkina Faso",
      icon: <FaSchool />
    },
    {
      id: 5,
      nom: "ISE",
      description: "je connais pas la description, Raso ",
      pays: "Burkina Faso",
      icon: <FaSchool />
    },
    {
      id: 6,
      nom: "UQAC",
      description: "une université qui a une branche en informatique",
      pays: "Canada",
      icon: <FaSchool />
    },
    {
      id: 7,
      nom: "UQAR",
      description: "une université qui a une branche en informatique",
      pays: "Canada",
      icon: <FaSchool />
    }
  ]
};

const Formation: React.FC = () => {
  return (
    <div className="container-fluid p-0">
      {/* Section Héro */}
      <section className="hero-section text-white text-center mb-5">
        <div className="hero-content">
          <h1 className="display-4 mb-4">Nos Formations</h1>
          <p className="lead mb-4">
            Découvrez nos programmes d'excellence pour former les leaders de demain
          </p>
        </div>
      </section>

      {/* Section des formations */}
      <section className="formations-section mb-5">
        <div className="container">
          <div className="row justify-content-center">
            {formations.map((formation) => (
              <div key={formation.id} className="col-md-6 mb-4">
                <div className="formation-card">
                  <div className="formation-icon-wrapper">
                    {formation.icon}
                  </div>
                  <h3 className="formation-title">{formation.title}</h3>
                  <p className="formation-description">{formation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Parcours */}
      <section className="parcours-section mb-5">
        <div className="container">
          <h2 className="text-center mb-5">Votre Parcours CPGE</h2>
          <div className="parcours-container">
            <div className="parcours-line"></div>
            {parcours.map((etape, index) => (
              <div key={etape.id} className="parcours-item">
                <div className="parcours-content">
                  <div className="parcours-icon">
                    {etape.icon}
                  </div>
                  <div className="parcours-text">
                    <h3 className="parcours-year">{etape.year}</h3>
                    <h4 className="parcours-title">{etape.title}</h4>
                    <p className="parcours-description">{etape.description}</p>
                  </div>
                </div>
                {index < parcours.length - 1 && (
                  <div className="parcours-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section des objectifs */}
      <section className="objectives-section mb-5">
        <div className="container">
          <div className="objectives-card">
            <h2 className="text-center mb-4">Nos Objectifs</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="objective-item">
                  <FaGraduationCap className="objective-icon" />
                  <h4>Excellence Académique</h4>
                  <p>Former des étudiants de haut niveau</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="objective-item">
                  <FaBook className="objective-icon" />
                  <h4>Programme Rigoureux</h4>
                  <p>Cursus adapté aux standards internationaux</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="objective-item">
                  <FaChalkboardTeacher className="objective-icon" />
                  <h4>Encadrement de Qualité</h4>
                  <p>Professeurs expérimentés et dévoués</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section des réussites */}
      <section className="reussites-section mb-5">
        <div className="container">
          <h2 className="text-center mb-5">Nos Réussites</h2>
          
          {/* Concours réussis */}
          <div className="reussites-concours mb-5">
            <h3 className="text-center mb-4">
              <FaTrophy className="me-2" />
              Concours Réussis
            </h3>
            <div className="row">
              {reussites.concours.map((concours) => (
                <div key={concours.id} className="col-md-3 mb-4">
                  <div className="reussite-card">
                    <div className="reussite-icon">
                      {concours.icon}
                    </div>
                    <h4 className="reussite-title">{concours.nom}</h4>
                    <p className="reussite-description">{concours.description}</p>
                    <div className="reussite-pays">{concours.pays}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Universités partenaires */}
          <div className="reussites-universites">
            <h3 className="text-center mb-4">
              <FaSchool className="me-2" />
              Universités Partenaires
            </h3>
            <div className="row">
              {reussites.universites.map((universite) => (
                <div key={universite.id} className="col-md-3 mb-4">
                  <div className="reussite-card">
                    <div className="reussite-icon">
                      {universite.icon}
                    </div>
                    <h4 className="reussite-title">{universite.nom}</h4>
                    <p className="reussite-description">{universite.description}</p>
                    <div className="reussite-pays">{universite.pays}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formation;
