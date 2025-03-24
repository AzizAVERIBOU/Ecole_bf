import React, { useState, useCallback, useMemo, memo, useEffect } from 'react';
import { 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaFileAlt, 
  FaCheckCircle, 
  FaQuestionCircle,
  FaAtom,
  FaCalculator,
  FaFlask,
  FaMicroscope,
  FaDna,
  FaHeartbeat,
  FaLeaf,
  FaBug
} from 'react-icons/fa';
import '../styles/Admission.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface AdmissionStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FAQ {
  question: string;
  answer: string;
}

interface FormData {
  nom: string;
  email: string;
  typeDocument: string;
  matiere: string;
  description: string;
  fichier: File | null;
}

// Composants mémorisés pour éviter les re-rendus inutiles
const TimelineItem = memo(({ step }: { step: AdmissionStep }) => (
  <div className="timeline-item">
    <div className="timeline-icon">
      {step.icon}
    </div>
    <div className="timeline-content" data-tooltip={`Étape ${step.id}`}>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  </div>
));

const FaqItem = memo(({ faq, index }: { faq: FAQ; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button 
          className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={toggleAccordion}
        >
          {faq.question}
        </button>
      </h2>
      <div 
        className={`accordion-collapse ${isOpen ? 'show' : 'collapse'}`}
      >
        <div className="accordion-body">
          {faq.answer.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
});

const filieres = [
  {
    nom: "MPSC",
    description: "Mathématiques, Physique et Sciences de l'Ingénieur",
    icon: <FaCalculator className="filiere-icon" />,
    subIcons: [
      <FaAtom key="physics" className="sub-icon" />,
      <FaCalculator key="maths" className="sub-icon" />
    ]
  },
  {
    nom: "BCPST",
    description: "Biologie, Chimie, Physique et Sciences de la Terre",
    icon: <FaMicroscope className="filiere-icon" />,
    subIcons: [
      <FaDna key="biology" className="sub-icon" />,
      <FaHeartbeat key="medicine" className="sub-icon" />
    ]
  }
];

const Admission: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('mpsi');
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    typeDocument: 'devoir',
    matiere: 'mathematiques',
    description: '',
    fichier: null
  });
  
  // Utilisation de useCallback pour les gestionnaires d'événements
  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  // Utilisation de useMemo pour éviter de recréer ces tableaux à chaque rendu
  const admissionSteps = useMemo<AdmissionStep[]>(() => [
    {
      id: 1,
      title: "Vérification des conditions d'éligibilité",
      description: "Assurez-vous de remplir les conditions requises : être titulaire d'un baccalauréat scientifique avec mention Bien ou Très Bien, ou être en Terminale scientifique avec d'excellents résultats.",
      icon: <FaCheckCircle className="step-icon" />
    },
    {
      id: 2,
      title: "Constitution du dossier de candidature",
      description: "Préparez votre dossier comprenant : formulaire de candidature rempli, copies des relevés de notes des deux dernières années, copie du baccalauréat ou attestation de scolarité, lettre de motivation, et deux lettres de recommandation.",
      icon: <FaFileAlt className="step-icon" />
    },
    {
      id: 3,
      title: "Soumission du dossier",
      description: "Déposez votre dossier complet au secrétariat des CPGE-MENAPLN ou envoyez-le par voie postale à l'adresse indiquée avant la date limite du 30 avril.",
      icon: <FaCalendarAlt className="step-icon" />
    },
    {
      id: 4,
      title: "Examen des dossiers et entretien",
      description: "Les dossiers sélectionnés seront convoqués pour un entretien avec le jury d'admission. Cet entretien vise à évaluer votre motivation et votre aptitude à suivre la formation.",
      icon: <FaGraduationCap className="step-icon" />
    }
  ], []);

  const faqs = useMemo<FAQ[]>(() => [
    {
      question: "Quelles sont les conditions d'admission en CPGE ?",
      answer: "Pour être admis en CPGE, vous devez :\n- Avoir obtenu votre baccalauréat avec une mention au moins Assez Bien\n- Avoir une moyenne minimale de 14/20 en mathématiques et physique\n- Être âgé de moins de 23 ans\n- Etre preselectionné par le jury "
    },
    {
      question: "Quel est le processus de sélection ?",
      answer: "Le processus de sélection comprend :\n1. L'examen du dossier scolaire et des lettres de recommandation\n2. Un entretien avec un jury\n3. Une évaluation de la motivation et du projet de vie"
    },
    {
      question: "Quels sont les documents requis pour l'inscription ?",
      answer: "Les documents nécessaires sont :\n- Une copie du baccalauréat\n- Les relevés de notes des deux dernières années\n- Une copie de la carte d'identité\n- Une photo d'identité\n- une copie du certificat de reussite du baccalauréat\n- Une lettre de motivation"
    },
    {
      question: "Quelles sont les débouchés après la CPGE ?",
      answer: "Après la CPGE, vous pouvez :\n- Intégrer une école d'ingénieurs\n- Poursuivre en licence à l'université\n- Préparer les concours de la fonction publique\n- Accéder à des formations spécialisées \n- Postuler à l'étranger "
    },
    {
      question: "Quel est le coût de la formation ?",
      answer: "La formation en CPGE est gratuite dans les établissements publics. Les seuls frais à prévoir sont :\n- Les frais d'inscription (15500 FCFA)\n- Les manuels et supports de cours sont soit achetés soit empruntés\n- Les frais de concours sont a vos charge\n- Les frais de vie quotidienne sont a vos charge"
    }
  ], []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'file' && 'files' in e.target) {
      const fileInput = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: fileInput.files?.[0] || null }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="container py-5">
      {/* Section Héro */}
      <section className="hero-section text-white text-center mb-5">
        <div className="hero-content">
          <h1 className="display-4 mb-4">Admission aux CPGE-MENAPLN</h1>
          <p className="lead mb-4">
            Rejoignez l'élite des étudiants en classes préparatoires
          </p>
        </div>
      </section>

      {/* Section Filières */}
      <section className="filieres-section mb-5">
        <h2 className="text-center mb-4">
          <FaGraduationCap className="me-2" />
          Nos Filières
        </h2>
        <div className="row g-4">
          {filieres.map((filiere, index) => (
            <div key={index} className="col-md-6">
              <div className="filiere-card">
                <div className="filiere-icon-container">
                  {filiere.icon}
                  <div className="sub-icons-container">
                    {filiere.subIcons}
                  </div>
                </div>
                <div className="filiere-content">
                  <h3>{filiere.nom}</h3>
                  <p>{filiere.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Processus d'admission */}
      <section className="admission-process-section bg-light p-4 rounded mb-5">
        <h2 className="text-center mb-4">Processus d'Admission</h2>
        <div className="timeline">
          {admissionSteps.map((step) => (
            <TimelineItem key={step.id} step={step} />
          ))}
        </div>
      </section>

      {/* Section Calendrier */}
      <section className="calendar-section mb-5">
        <h2 className="text-center mb-4">Calendrier d'Admission 2025-2026</h2>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <h3 className="card-title">15 Février 2025</h3>
                <p className="card-text">Ouverture des inscriptions</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <h3 className="card-title">30 Avril 2025</h3>
                <p className="card-text">Clôture des inscriptions</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <h3 className="card-title">15-30 Mai 2025</h3>
                <p className="card-text">Entretiens de sélection</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <h3 className="card-title">15 Juin 2025</h3>
                <p className="card-text">Publication des résultats</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="faq-section mb-5">
        <h2 className="text-center mb-4">
          <FaQuestionCircle className="me-2" />
          Questions Fréquemment Posées
        </h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </section>

      {/* Section Contact */}
      <section className="contact-section bg-primary text-white p-4 rounded mb-5">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h3>Besoin de plus d'informations ?</h3>
            <p>Notre équipe d'admission est disponible pour répondre à toutes vos questions. N'hésitez pas à nous contacter.</p>
          </div>
          <div className="col-md-4 text-md-end">
            <a href="/contact" className="btn btn-light">Contactez-nous</a>
          </div>
        </div>
      </section>

      {/* Section Formulaire de candidature */}
      <section className="application-section mb-5">
        <h2 className="text-center">
          <FaFileAlt className="me-2" />
          Formulaire de Candidature
        </h2>
        <form className="needs-validation" noValidate>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="nom" className="form-label">Nom complet</label>
                <input
                  type="text"
                  className="form-control"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  placeholder="Entrez votre nom complet"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Adresse email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="exemple@email.com"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="type_document" className="form-label">Type de document</label>
                <select
                  className="form-select"
                  id="type_document"
                  name="type_document"
                  value={formData.typeDocument}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="devoir">Devoir</option>
                  <option value="correction">Correction</option>
                  <option value="cours">Cours</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="matiere" className="form-label">Matière</label>
                <select
                  className="form-select"
                  id="matiere"
                  name="matiere"
                  value={formData.matiere}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Sélectionnez une matière</option>
                  <option value="mathematiques">Mathématiques</option>
                  <option value="physique">Physique</option>
                  <option value="chimie">Chimie</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Décrivez votre document..."
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="fichier" className="form-label">Document à soumettre</label>
            <input
              type="file"
              className="form-control"
              id="fichier"
              name="fichier"
              onChange={handleInputChange}
              accept=".pdf,.doc,.docx"
              required
            />
            <div className="form-text">Formats acceptés : PDF, DOC, DOCX</div>
          </div>

          <button type="submit" className="btn btn-primary">
            <FaFileAlt className="me-2" />
            Soumettre ma candidature
          </button>
        </form>
      </section>
    </div>
  );
};

export default Admission;