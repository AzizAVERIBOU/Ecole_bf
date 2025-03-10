import React, { useState } from 'react';
import { FaGraduationCap, FaBook, FaFileAlt, FaTrophy, FaUpload } from 'react-icons/fa';
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

interface FormData {
  nom: string;
  email: string;
  typeDocument: string;
  matiere: string;
  description: string;
  fichier: File | null;
}

const Mediatheque: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    typeDocument: 'devoir',
    matiere: 'mathematiques',
    description: '',
    fichier: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prevState => ({
        ...prevState,
        fichier: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer le fichier
    console.log('Document soumis:', formData);
    // Réinitialiser le formulaire
    setFormData({
      nom: '',
      email: '',
      typeDocument: 'devoir',
      matiere: 'mathematiques',
      description: '',
      fichier: null
    });
  };

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
      {/* Section Héro */}
      <section className="hero-section text-white text-center mb-5">
        <div className="hero-content">
          <h1 className="display-4 mb-4">Médiathèque CPGE-MENAPLN</h1>
          <p className="lead mb-4">
            Centre de ressources pédagogiques et documentaires
          </p>
        </div>
      </section>

      {sections.map((section, index) => (
        <section key={index} className={`${index % 2 === 0 ? 'about-section' : 'formations-section bg-light'} p-4 rounded mb-5`}>
          <h2 className="text-center mb-4">
            <span className="me-2">{section.icon}</span>
            {section.title}
          </h2>
          <div className="row">
            {section.data.map((item, idx) => (
              <div key={idx} className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title">{item.year || item.subject}</h3>
                    <p className="card-text">{item.description}</p>
                    <button className="btn btn-primary">Accéder</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Section Soumettre un Document */}
      <section className="submit-section bg-light p-4 rounded mb-5">
        <h2 className="text-center mb-4">
          <FaUpload className="me-2" />
          Soumettre un Document
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom complet</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="typeDocument" className="form-label">Type de document</label>
                    <select
                      className="form-select"
                      id="typeDocument"
                      name="typeDocument"
                      value={formData.typeDocument}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="devoir">Devoir</option>
                      <option value="correction">Correction</option>
                      <option value="cours">Cours</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="matiere" className="form-label">Matière</label>
                    <select
                      className="form-select"
                      id="matiere"
                      name="matiere"
                      value={formData.matiere}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="mathematiques">Mathématiques</option>
                      <option value="physique">Physique</option>
                      <option value="chimie">Chimie</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="fichier" className="form-label">Document (PDF, DOC, DOCX)</label>
                    <input
                      type="file"
                      className="form-control"
                      id="fichier"
                      name="fichier"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      <FaUpload className="me-2" />
                      Soumettre le document
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mediatheque;
