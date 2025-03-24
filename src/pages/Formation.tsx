import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import '../styles/Formation.css';

interface FormationCardProps {
  title: string;
  description: string;
  link: string;
}

// Composant mémorisé pour éviter les re-rendus inutiles
const FormationCard = memo(({ title, description, link }: FormationCardProps) => (
  <div className="col-lg-6 col-md-12 mb-4">
    <div className="card shadow border-0 h-100">
      <article className="card-body text-center p-5 p-md-4 d-flex flex-column">
        <h5 className="card-title fw-bold text-primary">{title}</h5>
        <p className="card-text text-muted flex-grow-1">{description}</p>
        <div className="mt-auto">
          <a target="_blank" href={link} className="btn btn-outline-primary" rel="noopener noreferrer">
            En savoir plus
          </a>
        </div>
      </article>
    </div>
  </div>
));

const Formation: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(window.innerWidth > 992);

  // Utilisation de useCallback pour optimiser la fonction de redimensionnement
  const handleResize = useCallback((): void => {
    setIsLargeScreen(window.innerWidth > 992);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]); // Dépendance à handleResize qui est maintenant mémorisée

  // Mémorisation des données de formation pour éviter les recalculs inutiles
  const formationData = useMemo(() => [
    {
      id: 'mpsi',
      title: 'Classes MPSI',
      description: 'La filière MPSI (Mathématiques, Physique et Sciences de l\'Ingénieur) s\'adresse aux bacheliers généraux. Les mathématiques sont à l\'honneur dans cette filière qui valorise particulièrement l\'abstraction.',
      link: 'https://prepas.org/?article=49'
    },
    {
      id: 'bcpst',
      title: 'Classes BCPST',
      description: 'Les classes BCPST (Biologie, Chimie, Physique et Sciences de la Terre) sont les seules prépas accessibles après un bac général dans lesquelles on étudie les Sciences de la Vie et de la Terre.',
      link: 'https://prepas.org/?article=41'
    }
  ], []);

  // Mémorisation des classes CSS pour éviter les recalculs inutiles
  const headerClasses = useMemo(() => {
    return `formation-header text-center mb-5 p-md-5 ${isLargeScreen ? 'card' : ''}`;
  }, [isLargeScreen]);

  const sectionClasses = useMemo(() => {
    return `container my-5 p-5 ${isLargeScreen ? 'card' : ''}`;
  }, [isLargeScreen]);

  return (
    <div className="container-fluid p-3">
      <section className={headerClasses}>
        <div className="formation-header-content container">
          <h1 className="display-6 display-md-4 fw-bold mb-5">Nos Formations</h1>
          <p className="lead border rounded p-3 text-muted text-center mt-3">
            Notre établissement propose des classes préparatoires d'excellence en <span className="fw-bold">MPSI</span> et en <span className="fw-bold">BCPST</span> conçues pour les étudiants ambitieux. Ces formations offrent un enseignement rigoureux et exigeant, alliant théorie et pratique pour préparer efficacement aux concours des grandes écoles. Encadrés par une équipe pédagogique expérimentée, nos élèves développent des compétences solides et une méthodologie de travail efficace pour exceller dans leur parcours académique.
          </p>
        </div>
      </section>

      <section className={sectionClasses}>
        <div className="row">
          <h1 className="my-5">Formations</h1>
          {formationData.map(formation => (
            <FormationCard
              key={formation.id}
              title={formation.title}
              description={formation.description}
              link={formation.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Formation;
