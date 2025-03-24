import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaUsers, FaChalkboardTeacher, FaHistory } from 'react-icons/fa';
import '../styles/About.css';

const About: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = (): void => {
      setIsLargeScreen(window.innerWidth > 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container py-5">
      {/* Section Héro */}
      <section className="hero-section text-white text-center mb-5">
        <div className="hero-content">
          <h1 className="display-4 mb-4">À propos de CPGE-MENAPLN</h1>
          <p className="lead mb-4">
            Une institution d'excellence au service de l'éducation
          </p>
        </div>
      </section>

      {/* Section Histoire */}
      <section className="about-section mb-5">
        <h2 className="text-center mb-4"><FaHistory className="me-2" />Notre Histoire</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="lead">
              Fondées en 2020, les Classes Préparatoires aux Grandes Écoles du MENAPLN (CPGE-MENAPLN) sont nées de la volonté du gouvernement burkinabè d'offrir une formation d'excellence aux bacheliers les plus méritants du pays.
            </p>
            <p>
              Notre mission est de préparer les étudiants aux concours d'entrée des grandes écoles d'ingénieurs et de commerce, tant au niveau national qu'international. Depuis notre création, nous nous sommes engagés à maintenir les plus hauts standards académiques et à cultiver l'excellence dans tous les aspects de notre enseignement.
            </p>
          </div>
          <div className="col-md-6">
            <img 
              src="/images/building.jpg" 
              alt="Bâtiment CPGE-MENAPLN" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Section Mission et Valeurs */}
      <section className={`${isLargeScreen ? 'card' : ''} bg-light p-4 rounded mb-5`}>
        <h2 className="text-center mb-4"><FaGraduationCap className="me-2" />Notre Mission et Nos Valeurs</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-primary">Mission</h3>
                <p className="card-text">
                  Notre mission est de former l'élite intellectuelle et scientifique de demain, en offrant un enseignement rigoureux et exigeant, adapté aux standards internationaux. Nous visons à développer chez nos étudiants non seulement des compétences académiques solides, mais aussi des qualités humaines essentielles pour leur réussite future.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-primary">Valeurs</h3>
                <ul className="card-text">
                  <li><strong>Excellence :</strong> Nous encourageons la poursuite de l'excellence dans tous les domaines.</li>
                  <li><strong>Intégrité :</strong> Nous valorisons l'honnêteté et l'éthique dans toutes nos actions.</li>
                  <li><strong>Innovation :</strong> Nous promouvons la créativité et l'innovation dans l'enseignement.</li>
                  <li><strong>Inclusion :</strong> Nous célébrons la diversité et l'inclusion dans notre communauté.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="team-section mb-5">
        <h2 className="text-center mb-4"><FaUsers className="me-2" />Notre Équipe</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img src="/images/director.jpg" className="card-img-top" alt="Directeur" />
              <div className="card-body text-center">
                <h3 className="card-title">Dr. Amadou DIALLO</h3>
                <p className="card-text text-muted">Directeur des CPGE-MENAPLN</p>
                <p className="card-text">
                  Docteur en Mathématiques Appliquées, Dr. DIALLO apporte plus de 20 ans d'expérience dans l'enseignement supérieur et la recherche.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img src="/images/academic.jpg" className="card-img-top" alt="Responsable Académique" />
              <div className="card-body text-center">
                <h3 className="card-title">Prof. Fatou SANE</h3>
                <p className="card-text text-muted">Responsable Académique</p>
                <p className="card-text">
                  Professeure agrégée de Physique, Prof. SANE supervise l'ensemble des programmes académiques et veille à leur excellence.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img src="/images/admin.jpg" className="card-img-top" alt="Responsable Administratif" />
              <div className="card-body text-center">
                <h3 className="card-title">M. Issouf OUEDRAOGO</h3>
                <p className="card-text text-muted">Responsable Administratif</p>
                <p className="card-text">
                  Fort de son expérience en gestion administrative, M. OUEDRAOGO assure le bon fonctionnement quotidien de l'établissement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Corps Enseignant */}
      <section className="faculty-section bg-light p-4 rounded mb-5">
        <h2 className="text-center mb-4"><FaChalkboardTeacher className="me-2" />Notre Corps Enseignant</h2>
        <p className="lead text-center mb-4">
          Nos enseignants sont sélectionnés parmi les meilleurs spécialistes dans leurs domaines respectifs. Ils combinent expertise académique et expérience pédagogique pour offrir un enseignement de qualité supérieure.
        </p>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-primary">Département de Mathématiques</h3>
                <p className="card-text">
                  Notre équipe de mathématiciens comprend des docteurs et agrégés qui excellent dans leur domaine. Ils dispensent un enseignement rigoureux couvrant l'analyse, l'algèbre, la géométrie et les probabilités.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-primary">Département de Physique-Chimie</h3>
                <p className="card-text">
                  Nos professeurs de physique et chimie allient théorie et expérimentation pour donner aux étudiants une compréhension profonde des phénomènes naturels et des lois qui les régissent.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-primary">Département de Sciences de l'Ingénieur</h3>
                <p className="card-text">
                  Nos enseignants en sciences de l'ingénieur apportent leur expertise pratique pour initier les étudiants aux principes fondamentaux de l'ingénierie et de la conception.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-primary">Département de Langues et Sciences Humaines</h3>
                <p className="card-text">
                  Notre équipe pluridisciplinaire en langues et sciences humaines aide les étudiants à développer leurs compétences linguistiques et leur culture générale, essentielles pour les concours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;