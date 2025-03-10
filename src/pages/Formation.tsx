import React, { useState, useEffect } from 'react';
import '../styles/Formation.css';

const Formation: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = (): void => {
      setIsLargeScreen(window.innerWidth > 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container-fluid p-3">
      <section className={`formation-header text-center mb-5 p-md-5 ${isLargeScreen ? 'card' : ''}`}>
        <div className="formation-header-content container">
          <h1 className="display-6 display-md-4 fw-bold mb-5">Nos Formations</h1>
          <p className="lead border rounded p-3 text-muted text-center mt-3">
            Notre établissement propose des classes préparatoires d'excellence en <span className="fw-bold">MPSI</span> et en <span className="fw-bold">BCPST</span> conçues pour les étudiants ambitieux. Ces formations offrent un enseignement rigoureux et exigeant, alliant théorie et pratique pour préparer efficacement aux concours des grandes écoles. Encadrés par une équipe pédagogique expérimentée, nos élèves développent des compétences solides et une méthodologie de travail efficace pour exceller dans leur parcours académique.
          </p>
        </div>
      </section>

      <section className={`container my-5 p-5 ${isLargeScreen ? 'card' : ''}`}>
        <div className="row">
          <h1 className="my-5">Formations</h1>
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="card shadow border-0">
              <article className="card-body text-center p-5 p-md-4">
                <h5 className="card-title fw-bold text-primary">Classes MPSI</h5>
                <p className="card-text text-muted">
                  La filière MPSI (Mathématiques, Physique et Sciences de l'Ingénieur) s'adresse aux bacheliers généraux. Les mathématiques sont à l'honneur dans cette filière qui valorise particulièrement l'abstraction.
                </p>
                <a target="_blank" href="https://prepas.org/?article=49" className="btn btn-outline-primary" rel="noopener noreferrer">
                  En savoir plus
                </a>
              </article>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="card shadow border-0">
              <article className="card-body text-center p-5 p-md-4">
                <h5 className="card-title fw-bold text-primary">Classes BCPST</h5>
                <p className="card-text text-muted">
                  Les classes BCPST (Biologie, Chimie, Physique et Sciences de la Terre) sont les seules prépas accessibles après un bac général dans lesquelles on étudie les Sciences de la Vie et de la Terre.
                </p>
                <a target="_blank" href="https://prepas.org/?article=41" className="btn btn-outline-primary" rel="noopener noreferrer">
                  En savoir plus
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formation;
