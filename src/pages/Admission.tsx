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

const Admission: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('mpsi');
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    dateNaissance: '',
    email: '',
    telephone: '',
    adresse: '',
    ville: '',
    pays: '',
    filiere: '',
    niveau: '',
    etablissement: '',
    moyenneBac: '',
    mentionBac: '',
    anneeBac: '',
    specialiteBac: '',
    documents: {
      bac: null,
      bulletin: null,
      photo: null,
      carteIdentite: null,
      lettreMotivation: null
    }
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
      const file = fileInput.files?.[0] || null;
      
      // Si le nom du champ contient un point, c'est un champ dans l'objet documents
      if (name.includes('.')) {
        const [parent, child] = name.split('.');
        setFormData(prev => ({
          ...prev,
          documents: {
            ...prev.documents,
            [child as keyof typeof prev.documents]: file
          }
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: file }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="container">
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
        <div className="row g-4 justify-content-center">
          {filieres.map((filiere, index) => (
            <div key={index} className="col-md-5">
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
        <div className="row justify-content-center">
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
      <section className="application-section">
        <h2 className="text-center mb-4">
          <FaFileAlt className="me-2" />
          Formulaire de Candidature
        </h2>
        <form className="needs-validation" noValidate>
          {/* Informations personnelles */}
          <div className="card mb-4">
            <div className="card-header">
              <h4 className="mb-0">Informations Personnelles</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="nom" className="form-label">Nom</label>
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
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="prenom" className="form-label">Prénom</label>
                    <input
                      type="text"
                      className="form-control"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="dateNaissance" className="form-label">Date de naissance</label>
                    <input
                      type="date"
                      className="form-control"
                      id="dateNaissance"
                      name="dateNaissance"
                      value={formData.dateNaissance}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
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
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="telephone" className="form-label">Téléphone</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="adresse" className="form-label">Adresse</label>
                    <input
                      type="text"
                      className="form-control"
                      id="adresse"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="ville" className="form-label">Ville</label>
                    <input
                      type="text"
                      className="form-control"
                      id="ville"
                      name="ville"
                      value={formData.ville}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="pays" className="form-label">Pays</label>
                    <input
                      type="text"
                      className="form-control"
                      id="pays"
                      name="pays"
                      value={formData.pays}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Informations académiques */}
          <div className="card mb-4">
            <div className="card-header">
              <h4 className="mb-0">Informations Académiques</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="filiere" className="form-label">Filière souhaitée</label>
                    <select
                      className="form-select"
                      id="filiere"
                      name="filiere"
                      value={formData.filiere}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Sélectionnez une filière</option>
                      <option value="mpsi">MPSI</option>
                      <option value="bcpst">BCPST</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="niveau" className="form-label">Niveau actuel</label>
                    <select
                      className="form-select"
                      id="niveau"
                      name="niveau"
                      value={formData.niveau}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Sélectionnez votre niveau</option>
                      <option value="terminale">Terminale</option>
                      <option value="bac">Baccalauréat obtenu</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="etablissement" className="form-label">Établissement actuel</label>
                    <input
                      type="text"
                      className="form-control"
                      id="etablissement"
                      name="etablissement"
                      value={formData.etablissement}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="specialiteBac" className="form-label">Spécialité au Bac</label>
                    <input
                      type="text"
                      className="form-control"
                      id="specialiteBac"
                      name="specialiteBac"
                      value={formData.specialiteBac}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="moyenneBac" className="form-label">Moyenne au Bac</label>
                    <input
                      type="number"
                      step="0.01"
                      className="form-control"
                      id="moyenneBac"
                      name="moyenneBac"
                      value={formData.moyenneBac}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="mentionBac" className="form-label">Mention au Bac</label>
                    <select
                      className="form-select"
                      id="mentionBac"
                      name="mentionBac"
                      value={formData.mentionBac}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Sélectionnez la mention</option>
                      <option value="assez-bien">Assez Bien</option>
                      <option value="bien">Bien</option>
                      <option value="tres-bien">Très Bien</option>
                      <option value="mention-trot">Mention Exelent ( tres bien continue comme ça)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="anneeBac" className="form-label">Année d'obtention du Bac</label>
                    <input
                      type="number"
                      className="form-control"
                      id="anneeBac"
                      name="anneeBac"
                      value={formData.anneeBac}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documents requis */}
          <div className="card mb-4">
            <div className="card-header">
              <h4 className="mb-0">Documents Requis</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="bac" className="form-label">Copie du Baccalauréat</label>
                    <input
                      type="file"
                      className="form-control"
                      id="bac"
                      name="documents.bac"
                      onChange={handleInputChange}
                      accept=".pdf"
                      required
                    />
                    <div className="form-text">Format PDF uniquement</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="bulletin" className="form-label">Bulletin de notes</label>
                    <input
                      type="file"
                      className="form-control"
                      id="bulletin"
                      name="documents.bulletin"
                      onChange={handleInputChange}
                      accept=".pdf"
                      required
                    />
                    <div className="form-text">Format PDF uniquement</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="photo" className="form-label">Photo d'identité</label>
                    <input
                      type="file"
                      className="form-control"
                      id="photo"
                      name="documents.photo"
                      onChange={handleInputChange}
                      accept=".jpg,.jpeg,.png"
                      required
                    />
                    <div className="form-text">Formats acceptés : JPG, JPEG, PNG</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="carteIdentite" className="form-label">Carte d'identité</label>
                    <input
                      type="file"
                      className="form-control"
                      id="carteIdentite"
                      name="documents.carteIdentite"
                      onChange={handleInputChange}
                      accept=".pdf"
                      required
                    />
                    <div className="form-text">Format PDF uniquement</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group mb-3">
                    <label htmlFor="lettreMotivation" className="form-label">Lettre de motivation</label>
                    <input
                      type="file"
                      className="form-control"
                      id="lettreMotivation"
                      name="documents.lettreMotivation"
                      onChange={handleInputChange}
                      accept=".pdf"
                      required
                    />
                    <div className="form-text">Format PDF uniquement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg">
              <FaFileAlt className="me-2" />
              Soumettre ma candidature
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Admission;