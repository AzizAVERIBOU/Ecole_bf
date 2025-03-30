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
  FaBug,
  FaArrowUp
} from 'react-icons/fa';
import '../styles/Admission.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

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
  prenom: string;
  dateNaissance: string;
  email: string;
  telephone: string;
  adresse: string;
  ville: string;
  pays: string;
  filiere: string;
  niveau: string;
  etablissement: string;
  moyenneBac: string;
  mentionBac: string;
  anneeBac: string;
  specialiteBac: string;
  documents: {
    bac: File | null;
    bulletin: File | null;
    photo: File | null;
    carteIdentite: File | null;
    lettreMotivation: File | null;
  };
}

interface AdmissionFormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  dateNaissance: string;
  niveau: string;
  filiere: string;
  message: string;
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
    nom: "MPSI",
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

const ScrollToTop = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
      aria-label="Retour en haut"
    >
      <FaArrowUp />
    </button>
  );
});

const ScrollProgress = memo(() => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div 
      className="scroll-progress"
      style={{ transform: `scaleX(${progress / 100})` }}
    />
  );
});

const Admission: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('mpsi');
  const [formData, setFormData] = useState<AdmissionFormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateNaissance: '',
    niveau: '',
    filiere: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    // Initialiser EmailJS
    emailjs.init('YOUR_PUBLIC_KEY');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: `${formData.prenom} ${formData.nom}`,
          from_email: formData.email,
          telephone: formData.telephone,
          date_naissance: formData.dateNaissance,
          niveau: formData.niveau,
          filiere: formData.filiere,
          message: formData.message
        }
      );

      setSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (err) {
      setError('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admission-container">
      <ScrollProgress />
      <ScrollToTop />
      
      {/* Section Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="row align-items-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img 
                src="/images/logo-cpge.jpg" 
                alt="CPGE MENAPLN" 
                className="hero-logo"
              />
            </div>
            <div className="col-md-8">
              <h1>Admission CPGE MENAPLN</h1>
              <p className="lead">
                Préparez votre avenir avec excellence dans notre classe préparatoire aux grandes écoles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Timeline */}
      <section className="timeline-section">
        <div className="timeline-container">
          <h2 className="text-center mb-5">Processus d'Admission</h2>
          <div className="timeline">
            {admissionSteps.map((step) => (
              <TimelineItem key={step.id} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Filières */}
      <section className="filieres-section">
        <div className="filieres-container">
          <h2 className="text-center mb-5">Nos Filières</h2>
          <div className="row">
            {filieres.map((filiere, index) => (
              <div key={index} className="col-md-6 mb-4">
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
        </div>
      </section>

      {/* Section FAQ */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="text-center mb-5">Questions Fréquentes</h2>
          <div className="accordion">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Formulaire */}
      <section className="application-section">
        <div className="form-container">
          <h2 className="text-center mb-4">
            <FaFileAlt className="me-2" />
            Formulaire de Candidature
          </h2>
          <div className="card shadow">
            <div className="card-body">
              {success ? (
                <div className="alert alert-success">
                  <FaCheckCircle className="me-2" />
                  Votre demande d'admission a été envoyée avec succès ! Vous serez redirigé vers la page d'accueil.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="form-col">
                        <label htmlFor="nom" className="form-label">Nom</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nom"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="prenom" className="form-label">Prénom</label>
                        <input
                          type="text"
                          className="form-control"
                          id="prenom"
                          name="prenom"
                          value={formData.prenom}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-row">
                      <div className="form-col">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="telephone" className="form-label">Téléphone</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="telephone"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-row">
                      <div className="form-col">
                        <label htmlFor="dateNaissance" className="form-label">Date de Naissance</label>
                        <input
                          type="date"
                          className="form-control"
                          id="dateNaissance"
                          name="dateNaissance"
                          value={formData.dateNaissance}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="niveau" className="form-label">Niveau</label>
                        <select
                          className="form-select"
                          id="niveau"
                          name="niveau"
                          value={formData.niveau}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Sélectionnez un niveau</option>
                          <option value="Bac">Bac</option>
                          <option value="Bac+1">Bac+1</option>
                          <option value="Bac+2">Bac+2</option>
                          <option value="Bac+3">Bac+3</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="filiere" className="form-label">Filière</label>
                    <select
                      className="form-select"
                      id="filiere"
                      name="filiere"
                      value={formData.filiere}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Sélectionnez une filière</option>
                      <option value="Informatique">Informatique</option>
                      <option value="Génie Civil">Génie Civil</option>
                      <option value="Mécanique">Mécanique</option>
                      <option value="Électrique">Électrique</option>
                      <option value="Chimie">Chimie</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message (Optionnel)</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  {error && (
                    <div className="alert alert-danger">
                      {error}
                    </div>
                  )}

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="loading-spinner" />
                          Envoi en cours...
                        </>
                      ) : (
                        'Envoyer la demande'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Admission);