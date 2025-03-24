import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaUsers, FaUserCircle, FaGlobe, FaInfoCircle } from 'react-icons/fa';
import { GiFlax } from 'react-icons/gi';
import '../styles/Alumni.css';

interface AlumniMember {
  id: number;
  name: string;
  role: string;
  description: string;
  social: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

const alumniMembers: AlumniMember[] = [
  {
    id: 1,
    name: "Arnold CONVOLBO",
    role: "Software Security Engineer",
    description: "Spécialisé dans la sécurité des applications et la protection des systèmes informatiques.",
    social: {
      linkedin: "https://linkedin.com/in/arnold-convolbo",
      github: "https://github.com/arnold-convolbo",
      email: "arnold.convolbo@example.com"
    }
  },
  {
    id: 2,
    name: "Aziz AVERIBOU",
    role: "Software Engineer",
    description: "Développeur full-stack passionné par la création d'applications web modernes et performantes.",
    social: {
      linkedin: "https://linkedin.com/in/aziz-averibou",
      github: "https://github.com/aziz-averibou",
      email: "aziz.averibou@example.com"
    }
  },
  {
    id: 3,
    name: "Kiswendsida ILBOUDO",
    role: "Software Developer",
    description: "Expert en développement d'applications et solutions technologiques innovantes.",
    social: {
      linkedin: "https://linkedin.com/in/kiswendsida-ilboudo",
      github: "https://github.com/kiswendsida-ilboudo",
      email: "kiswendsida.ilboudo@example.com"
    }
  },
  {
    id: 4,
    name: "Alioune TIENDREBEOGO",
    role: "Software Engineer",
    description: "Spécialiste en développement d'applications et solutions technologiques innovantes.",
    social: {
      linkedin: "https://linkedin.com/in/alioune-tiendrebeogo",
      github: "https://github.com/alioune-tiendrebeogo",
      email: "alioune.tiendrebeogo@example.com"
    }
  },
  {
    id: 5,
    name: "Yanogo AZANIA",
    role: "Full Stack Developer",
    description: "Développeur passionné par la création d'applications web et mobiles performantes.",
    social: {
      linkedin: "https://linkedin.com/in/yanogo-azania",
      github: "https://github.com/yanogo-azania",
      email: "yanogo.azania@example.com"
    }
  },
  {
    id: 6,
    name: "Wendin Naande Alain KISSOU",
    role: "Software Developer",
    description: "Expert en développement de solutions technologiques et applications innovantes.",
    social: {
      linkedin: "https://linkedin.com/in/wendin-kissou",
      github: "https://github.com/wendin-kissou",
      email: "wendin.kissou@example.com"
    }
  },
  {
    id: 7,
    name: "Arron KABORE",
    role: "Software Engineer",
    description: "Spécialiste en développement d'applications et solutions technologiques.",
    social: {
      linkedin: "https://linkedin.com/in/arron-kabore",
      github: "https://github.com/arron-kabore",
      email: "arron.kabore@example.com"
    }
  },
  {
    id: 8,
    name: "Hamadou OUATTARA",
    role: "Full Stack Developer",
    description: "Développeur passionné par la création d'applications web modernes et performantes.",
    social: {
      linkedin: "https://linkedin.com/in/hamadou-ouattara",
      github: "https://github.com/hamadou-ouattara",
      email: "hamadou.ouattara@example.com"
    }
  }
];

const alumniStats = {
  total: 150,
  countries: [
    { name: 'Burkina Faso', count: 45 },
    { name: 'France', count: 35 },
    { name: 'Canada', count: 25 },
    { name: 'États-Unis', count: 20 },
    { name: 'Allemagne', count: 15 },
    { name: 'Autres', count: 10 }
  ]
};

const countries = [
  { name: 'Burkina Faso', flag: '🇧🇫' },
  { name: 'Cote d\'Ivoire', flag: '🇨🇮' },
  { name: 'Niger', flag: '🇳🇪' },
  { name: 'Senegal', flag: '🇸🇳' },
  { name: 'Maroc', flag: '🇲🇦' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'États-Unis', flag: '🇺🇸' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'Russie', flag: '🇷🇺' }
];

const Alumni: React.FC = () => {
  const totalAlumni = alumniMembers.length;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire
    console.log('Form submitted:', formData);
    // Réinitialiser le formulaire
    setFormData({ name: '', email: '', role: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container-fluid p-0">
      {/* Section Héro */}
      <section className="hero-section text-white text-center mb-5">
        <div className="hero-content">
          <h1 className="display-4 mb-4">Notre Réseau Alumni</h1>
          <p className="lead mb-4">
            Découvrez les parcours exceptionnels de nos anciens étudiants
          </p>
        </div>
      </section>

      {/* Message d'invitation */}
      <section className="invitation-section mb-5">
        <div className="container">
          <div className="invitation-card text-center">
            <h2 className="invitation-title">Rejoignez Notre Réseau Alumni</h2>
            <p className="invitation-text">
              Vous êtes un ancien étudiant et vous n'êtes pas encore dans notre réseau ? 
              Envoyez-nous vos informations via le formulaire ci-dessous pour rejoindre notre communauté d'alumni.
            </p>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="stats-section mb-5">
        <div className="container">
          <div className="stats-card">
            <h2 className="stats-title text-center mb-4">
              Notre Réseau Alumni dans le Monde
              <span className="tooltip-icon" data-tooltip="Pays où se trouvent nos alumni">
                <FaInfoCircle />
              </span>
            </h2>
            <div className="total-alumni text-center mb-4">
              <div className="stat-icon">
                <FaUsers />
              </div>
              <div className="stat-number">{totalAlumni}</div>
              <div className="stat-label">Alumni Actifs</div>
            </div>
            <div className="countries-grid">
              {countries.map((country, index) => (
                <div key={index} className="country-flag-item">
                  <div className="country-flag">{country.flag}</div>
                  <div className="country-name">{country.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Alumni Grid */}
      <section className="alumni-section mb-5">
        <div className="row g-4">
          {alumniMembers.map((member) => (
            <div key={member.id} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="profile-icon">
                    <FaUserCircle />
                  </div>
                  <h2 className="card-title alumni-name">{member.name}</h2>
                  <div className="alumni-role">{member.role}</div>
                  <p className="card-text alumni-description">{member.description}</p>
                  <div className="alumni-social">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaLinkedin />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaGithub />
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} className="social-link">
                        <FaEnvelope />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulaire d'inscription */}
      <section className="registration-section mb-5">
        <div className="container">
          <div className="registration-card">
            <h2 className="text-center mb-4">Inscrivez-vous dans Notre Réseau Alumni</h2>
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Votre nom complet"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Votre email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Votre rôle actuel"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Votre message (optionnel)"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
