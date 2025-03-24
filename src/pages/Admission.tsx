import React, { useState, useCallback, useMemo, memo } from 'react';
import { FaGraduationCap, FaCalendarAlt, FaFileAlt, FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';
import '../styles/Admission.css';

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

// Composants mémorisés pour éviter les re-rendus inutiles
const TimelineItem = memo(({ step }: { step: AdmissionStep }) => (
  <div className="timeline-item">
    <div className="timeline-icon">
      {step.icon}
    </div>
    <div className="timeline-content">
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  </div>
));

const FaqItem = memo(({ faq, index }: { faq: FAQ; index: number }) => (
  <div className="accordion-item" key={index}>
    <h2 className="accordion-header" id={`faqHeading${index}`}>
      <button 
        className="accordion-button collapsed" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target={`#faqCollapse${index}`} 
        aria-expanded="false" 
        aria-controls={`faqCollapse${index}`}
      >
        {faq.question}
      </button>
    </h2>
    <div 
      id={`faqCollapse${index}`} 
      className="accordion-collapse collapse" 
      aria-labelledby={`faqHeading${index}`} 
      data-bs-parent="#faqAccordion"
    >
      <div className="accordion-body">
        {faq.answer}
      </div>
    </div>
  </div>
));

const Admission: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('mpsi');
  
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
      question: "Quels sont les frais de scolarité pour les CPGE-MENAPLN ?",
      answer: "Les frais de scolarité s'élèvent à 500 000 FCFA par an. Des bourses d'excellence sont disponibles pour les étudiants méritants et ceux issus de milieux défavorisés."
    },
    {
      question: "Est-ce que les étudiants internationaux peuvent postuler ?",
      answer: "Oui, les candidatures internationales sont acceptées. Les étudiants internationaux doivent fournir les mêmes documents, ainsi qu'une preuve de niveau en français pour les non-francophones."
    },
    {
      question: "Y a-t-il un internat disponible pour les étudiants ?",
      answer: "Oui, un internat est disponible avec un nombre limité de places. La priorité est donnée aux étudiants venant de l'extérieur de la capitale. Une demande spécifique doit être faite lors de l'inscription."
    },
    {
      question: "Quelle est la durée de la formation en CPGE ?",
      answer: "La formation en CPGE dure deux ans. La première année est consacrée à l'acquisition des fondamentaux, tandis que la deuxième année se concentre sur la préparation aux concours des grandes écoles."
    },
    {
      question: "Quels sont les débouchés après les CPGE ?",
      answer: "Après les CPGE, les étudiants peuvent intégrer des grandes écoles d'ingénieurs, des écoles de commerce, ou poursuivre leurs études à l'université en licence ou master."
    },
    {
      question: "Comment se déroule la sélection des candidats ?",
      answer: "La sélection se fait en deux étapes : une présélection sur dossier basée sur les résultats scolaires et les lettres de recommandation, suivie d'un entretien pour les candidats présélectionnés."
    }
  ], []);

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

      {/* Section Présentation des filières */}
      <section className="programs-section mb-5">
        <h2 className="text-center mb-4">Nos Filières</h2>
        <div className="row">
          <div className="col-12 mb-4">
            <ul className="nav nav-tabs justify-content-center" id="programsTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button 
                  className={`nav-link ${activeTab === 'mpsi' ? 'active' : ''}`} 
                  onClick={() => handleTabChange('mpsi')}
                  type="button"
                >
                  MPSI
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  className={`nav-link ${activeTab === 'bcpst' ? 'active' : ''}`} 
                  onClick={() => handleTabChange('bcpst')}
                  type="button"
                >
                  BCPST
                </button>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <div className="tab-content" id="programsTabContent">
              <div className={`tab-pane fade ${activeTab === 'mpsi' ? 'show active' : ''}`}>
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h3 className="card-title">Mathématiques, Physique et Sciences de l'Ingénieur (MPSI)</h3>
                        <p className="card-text">
                          La filière MPSI est destinée aux étudiants ayant un excellent niveau en mathématiques et physique, et souhaitant s'orienter vers les écoles d'ingénieurs généralistes ou spécialisées.
                        </p>
                        <h4>Conditions d'admission :</h4>
                        <ul>
                          <li>Baccalauréat scientifique avec mention Bien ou Très Bien</li>
                          <li>Excellentes notes en mathématiques et physique</li>
                          <li>Forte capacité de travail et motivation</li>
                        </ul>
                        <h4>Nombre de places disponibles :</h4>
                        <p>30 places</p>
                      </div>
                      <div className="col-md-6">
                        <img src="/images/mpsi.jpg" alt="Classe MPSI" className="img-fluid rounded shadow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`tab-pane fade ${activeTab === 'bcpst' ? 'show active' : ''}`}>
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h3 className="card-title">Biologie, Chimie, Physique et Sciences de la Terre (BCPST)</h3>
                        <p className="card-text">
                          La filière BCPST s'adresse aux étudiants intéressés par les sciences de la vie et de la terre, et souhaitant s'orienter vers les écoles d'ingénieurs en agronomie, vétérinaire, ou géologie.
                        </p>
                        <h4>Conditions d'admission :</h4>
                        <ul>
                          <li>Baccalauréat scientifique avec mention Bien ou Très Bien</li>
                          <li>Excellentes notes en sciences de la vie et de la terre, chimie et physique</li>
                          <li>Intérêt marqué pour les sciences expérimentales</li>
                        </ul>
                        <h4>Nombre de places disponibles :</h4>
                        <p>25 places</p>
                      </div>
                      <div className="col-md-6">
                        <img src="/images/bcpst.jpg" alt="Classe BCPST" className="img-fluid rounded shadow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default Admission;