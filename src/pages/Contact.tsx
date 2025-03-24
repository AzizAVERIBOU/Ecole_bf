import React, { useState, useCallback } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaInfoCircle } from 'react-icons/fa';
import '../styles/Contact.css';

interface ContactFormData {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}

interface SubmitStatusType {
  show: boolean;
  isError: boolean;
  message: string;
}

const INITIAL_FORM_STATE: ContactFormData = {
  nom: '',
  email: '',
  sujet: '',
  message: ''
};

const INITIAL_STATUS_STATE: SubmitStatusType = { 
  show: false, 
  isError: false, 
  message: '' 
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatusType>(INITIAL_STATUS_STATE);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        show: true,
        isError: false,
        message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.'
      });
      
      // Réinitialiser le formulaire
      setFormData(INITIAL_FORM_STATE);
      
      // Masquer le message après 5 secondes
      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, show: false }));
      }, 5000);
    }, 1500);
  }, []);

  return (
    <div className="container-fluid p-0">
      {/* Section Héro */}
      <section className="hero-section text-white text-center mb-5">
        <div className="hero-content">
          <h1 className="display-4 mb-4">Contactez-nous</h1>
          <p className="lead mb-4">
            N'hésitez pas à nous contacter pour toute information complémentaire
          </p>
        </div>
      </section>

      {/* Section Contact Info et Formulaire */}
      <section className="contact-section mb-5">
        <div className="container">
          <div className="row g-4">
            {/* Informations de contact */}
            <div className="col-md-6">
              <div className="contact-info-card h-100">
                <div>
                  <h2 className="contact-info-title">
                    Informations de Contact
                    <span className="tooltip-icon" data-tooltip="Nos coordonnées pour vous joindre">
                      <FaInfoCircle />
                    </span>
                  </h2>
                  <div className="contact-info-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <div>
                      <h3>Adresse</h3>
                      <p>2IE Kamboinsin<br />Ouagadougou, Burkina Faso</p>
                      <span className="tooltip-text">Notre établissement est situé dans le quartier Kamboinsin</span>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <FaPhone className="contact-icon" />
                    <div>
                      <h3>Téléphone</h3>
                      <p>+226 XX XX XX XX</p>
                      <span className="tooltip-text">Appelez-nous pour une réponse immédiate</span>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <FaEnvelope className="contact-icon" />
                    <div>
                      <h3>Email</h3>
                      <p>contact@cpge.bf</p>
                      <span className="tooltip-text">Envoyez-nous un email pour toute question</span>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <FaClock className="contact-icon" />
                    <div>
                      <h3>Horaires</h3>
                      <p>Lundi - Vendredi: 8h00 - 18h00</p>
                      <span className="tooltip-text">Nous sommes disponibles pendant ces horaires</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="col-md-6">
              <div className="contact-form-card h-100">
                <div>
                  <h2 className="contact-form-title">
                    Envoyez-nous un message
                    <span className="tooltip-icon" data-tooltip="Remplissez ce formulaire pour nous contacter">
                      <FaInfoCircle />
                    </span>
                  </h2>
                  {submitStatus.show && (
                    <div className={`alert ${submitStatus.isError ? 'alert-danger' : 'alert-success'} mb-4`}>
                      {submitStatus.message}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Votre nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleInputChange}
                            required
                          />
                          <span className="tooltip-text">Entrez votre nom complet</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Votre email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                          <span className="tooltip-text">Entrez une adresse email valide</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Sujet"
                            name="sujet"
                            value={formData.sujet}
                            onChange={handleInputChange}
                            required
                          />
                          <span className="tooltip-text">Indiquez le sujet de votre message</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Votre message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={5}
                            required
                          />
                          <span className="tooltip-text">Décrivez votre demande en détail</span>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button 
                          type="submit" 
                          className="btn btn-primary btn-lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Envoi en cours...
                            </>
                          ) : 'Envoyer le message'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Carte */}
      <section className="map-section mb-5">
        <div className="container">
          <div className="map-card">
            <h2 className="map-title text-center mb-4">Notre Emplacement</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15564.475123456789!2d-1.5123456!3d12.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe32a9ad62337c7d%3A0x4c909e96df251e48!2s2IE%20Kamboinsin!5e0!3m2!1sfr!2sbf!4v1709654321234!5m2!1sfr!2sbf"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Emplacement des CPGE au 2IE Kamboinsin"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="faq-section mb-5">
        <h2 className="text-center mb-4">Questions fréquentes</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h3 className="h5 card-title">Comment puis-je visiter les CPGE-MENAPLN ?</h3>
                <p className="card-text">
                  Vous pouvez visiter notre établissement du lundi au vendredi de 9h à 16h. Il est recommandé de prendre rendez-vous au préalable en contactant notre secrétariat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h3 className="h5 card-title">Comment puis-je obtenir plus d'informations sur les admissions ?</h3>
                <p className="card-text">
                  Pour toute information concernant les admissions, veuillez consulter notre page dédiée aux admissions ou contacter directement notre service d'admission par email ou téléphone.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h3 className="h5 card-title">Proposez-vous des visites guidées pour les futurs étudiants ?</h3>
                <p className="card-text">
                  Oui, nous organisons régulièrement des journées portes ouvertes et des visites guidées pour les futurs étudiants et leurs parents. Consultez notre calendrier d'événements ou contactez-nous pour plus d'informations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h3 className="h5 card-title">Comment puis-je postuler pour un poste d'enseignant ?</h3>
                <p className="card-text">
                  Pour postuler à un poste d'enseignant, veuillez envoyer votre CV et lettre de motivation à l'adresse recrutement@cpge-menapln.bf. Les offres d'emploi sont également publiées sur notre site dans la rubrique "Carrières".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;