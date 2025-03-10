import React from 'react';
import { FaGraduationCap, FaBook, FaFileAlt, FaTrophy } from 'react-icons/fa';
import '../styles/Mediatheque.css';

// Types pour les sections et les items
interface Item {
  year?: string;
  subject?: string;
  description: string;
}

interface Section {
  title: string;
  icon: React.ReactNode;
  data: Item[];
}

const Mediatheque: React.FC = () => {
  const sections: Section[] = [
    {
      title: 'Liste des Admis',
      icon: <FaGraduationCap />,
      data: [
        { year: '2023', description: 'Liste des étudiants admis en 2023' },
        { year: '2022', description: 'Liste des étudiants admis en 2022' },
        { year: '2021', description: 'Liste des étudiants admis en 2021' },
      ],
    },
    {
      title: 'Anciens Devoirs CPGE-MENAPLN',
      icon: <FaBook />,
      data: [
        { subject: 'Mathématiques', description: 'Devoirs et exercices de mathématiques' },
        { subject: 'Physique', description: 'Devoirs et exercices de physique' },
        { subject: 'Chimie', description: 'Devoirs et exercices de chimie' },
      ],
    },
    {
      title: 'Anciens Devoirs CPGE',
      icon: <FaFileAlt />,
      data: [
        { subject: 'Mathématiques', description: 'Devoirs et exercices de mathématiques' },
        { subject: 'Physique', description: 'Devoirs et exercices de physique' },
        { subject: 'Chimie', description: 'Devoirs et exercices de chimie' },
      ],
    },
    {
      title: 'Anciens Concours',
      icon: <FaTrophy />,
      data: [
        { year: '2023', description: 'Sujets et corrigés des concours 2023' },
        { year: '2022', description: 'Sujets et corrigés des concours 2022' },
        { year: '2021', description: 'Sujets et corrigés des concours 2021' },
      ],
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="mt-4">Médiathèque</h1>

      {sections.map((section, index) => (
        <section key={index} className={`about-section mb-5 ${section.icon ? 'bg-light p-4 rounded' : ''}`}>
          <h2 className="text-center mb-4">
            {section.icon && <span className="me-2" aria-hidden="true">{section.icon}</span>}
            {section.title}
          </h2>
          <div className="row">
            {section.data.map((item, idx) => (
              <div key={idx} className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title">{item.year || item.subject}</h3>
                    <p className="card-text">{item.description}</p>
                    <button className="btn btn-primary" aria-label={`Accéder à ${item.year || item.subject}`}>Accéder</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Mediatheque;
