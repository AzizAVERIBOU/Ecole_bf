import React from 'react';
import '../styles/Alumni.css';

interface AlumniMember {
  name: string;
  year: string;
  profession: string;
  linkedin: string;
  image: string;
}

const Alumni: React.FC = () => {
  const alumniList: AlumniMember[] = [
    { 
      name: 'Arnold CONVOLBO', 
      year: '2021', 
      profession: 'Software Security', 
      linkedin: '#', 
      image: "/public/images/arnold.jpg" 
    },
    { 
      name: 'Aziz AVERIBOU', 
      year: '2021', 
      profession: 'Software Engineer', 
      linkedin: '#', 
      image: "/public/images/aziz.jpg" 
    },
    { 
      name: 'MLK', 
      year: '2021', 
      profession: 'Data Scientist', 
      linkedin: '#', 
      image: "/public/images/mlk.jpg" 
    },
  ];

  return (
    <div className="container mt-5">
      <div className="fade-in text-center mb-5">
        <h1 className="display-4 text-primary">Nos Anciens Étudiants</h1>
        <p className="lead">Découvrez où nos anciens élèves sont aujourd'hui et leur impact dans leurs domaines professionnels.</p>
      </div>

      <div className="row">
        {alumniList.map((alumni, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-lg border-light rounded">
              <img src={alumni.image} className="card-img-top rounded-circle mx-auto mt-4" alt={alumni.name} style={{ width: '150px', height: '150px' }} />
              <div className="card-body">
                <h5 className="card-title">{alumni.name}</h5>
                <p className="text-muted">{alumni.profession} - Promotion {alumni.year}</p>
                <p className="card-text">
                  "L'expérience et l'enseignement que j'ai reçus à l'université m'ont permis de me développer dans ma carrière. C'est un honneur d'être un ancien étudiant de cet établissement."
                </p>
                <a href={alumni.linkedin} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i> Voir LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <h2 className="mb-4">Témoignages</h2>
        <div className="testimonial-container">
          <div className="testimonial-card fade-in">
            <p className="testimonial-quote">"Cette école a été un véritable tremplin pour ma carrière, avec un excellent enseignement et des opportunités qui m'ont propulsé dans l'industrie."</p>
            <div className="testimonial-author">
              <img src="/public/images/azania.jpg" alt="Azania YANOGO" className="testimonial-avatar" />
              <span className="testimonial-name">Azania YANAGO</span>
            </div>
          </div>
          <div className="testimonial-card fade-in">
            <p className="testimonial-quote">"Je suis extrêmement reconnaissante envers les professeurs et l'établissement qui ont façonné mes compétences professionnelles."</p>
            <div className="testimonial-author">
              <img src="/public/images/alioune.jpg" alt="Alioune TIENDREBEOGO" className="testimonial-avatar" />
              <span className="testimonial-name">Alioune TIENDREBEOGO</span>
            </div>
          </div>
        </div>
        <button className="btn btn-outline-primary mt-4">Voir plus de témoignages</button>
      </div>
    </div>
  );
};

export default Alumni;
