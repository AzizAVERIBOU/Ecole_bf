import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../styles/Contact.css';

interface ContactFormData {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    show: boolean;
    isError: boolean;
    message: string;
  }>({ show: false, isError: false, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      setFormData({
        nom: '',
        email: '',
        sujet: '',
        message: ''
      });
      
      // Masquer le message après 5 secondes
      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, show: false }));
      }, 5000);
    }, 1500);
  };

  return (
    <div className="container py-5">
      {/* Section Héro */}
      <section className="hero-section text-white text-center mb-5">
        <div className="hero-content">
          <h1 className="display-4 mb-4">Contactez-nous</h1>
          <p className="lead mb-4">
            Nous sommes à votre écoute pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Section Informations de contact */}
      <section className="contact-info-section mb-5">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h2 className="card-title mb-4">Nos coordonnées</h2>
                
                <div className="d-flex mb-4">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="ms-3">
                    <h3 className="h5">Adresse</h3>
                    <p className="mb-0">Avenue de la Liberté, Ouagadougou, Burkina Faso</p>
                  </div>
                </div>
                
                <div className="d-flex mb-4">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="ms-3">
                    <h3 className="h5">Téléphone</h3>
                    <p className="mb-0">+226 25 30 XX XX</p>
                    <p className="mb-0">+226 70 XX XX XX</p>
                  </div>
                </div>
                
                <div className="d-flex mb-4">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="ms-3">
                    <h3 className="h5">Email</h3>
                    <p className="mb-0">info@cpge-menapln.bf</p>
                    <p className="mb-0">admission@cpge-menapln.bf</p>
                  </div>
                </div>
                
                <div className="d-flex">
                  <div className="contact-icon">
                    <FaClock />
                  </div>
                  <div className="ms-3">
                    <h3 className="h5">Horaires d'ouverture</h3>
                    <p className="mb-0">Lundi - Vendredi: 8h00 - 17h00</p>
                    <p className="mb-0">Samedi: 9h00 - 12h00</p>
                    <p className="mb-0">Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h2 className="card-title mb-4">Suivez-nous</h2>
                
                <div className="social-media mb-4">
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <FaFacebook />
                  </a>
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                </div>
                
                <div className="mb-4">
                  <h3 className="h5">Direction des CPGE-MENAPLN</h3>
                  <p>
                    Pour toute question concernant l'administration ou la direction, veuillez contacter le secrétariat de la direction à l'adresse : direction@cpge-menapln.bf
                  </p>
                </div>
                
                <div>
                  <h3 className="h5">Service des admissions</h3>
                  <p>
                    Pour toute question concernant les admissions ou les inscriptions, veuillez contacter notre service dédié à l'adresse : admission@cpge-menapln.bf
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Formulaire de contact */}
      <section className="contact-form-section bg-light p-4 rounded mb-5">
        <h2 className="text-center mb-4">Envoyez-nous un message</h2>
        
        {submitStatus.show && (
          <div className={`alert ${submitStatus.isError ? 'alert-danger' : 'alert-success'} mb-4`}>
            {submitStatus.message}
          </div>
        )}
        
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                  
                  <div className="mb-3">
                    <label htmlFor="sujet" className="form-label">Sujet</label>
                    <select 
                      className="form-select" 
                      id="sujet" 
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Choisissez un sujet</option>
                      <option value="admission">Admission</option>
                      <option value="information">Demande d'information</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      name="message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button 
                      type="submit" 
                      className="btn btn-primary px-4 py-2"
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Carte */}
      <section className="map-section mb-5">
        <h2 className="text-center mb-4">Notre emplacement</h2>
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <div className="map-container">
              {/* Ici, vous pouvez intégrer une carte Google Maps ou OpenStreetMap */}
              <div className="map-placeholder d-flex align-items-center justify-content-center">
                <p className="text-muted">Carte interactive à intégrer ici</p>
              </div>
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