import React, { useMemo, memo } from 'react';
import '../styles/Alumni.css';

interface AlumniMember {
  name: string;
  year: string;
  profession: string;
  linkedin: string;
  image: string;
}

interface TestimonialProps {
  quote: string;
  image: string;
  name: string;
}

// Composant mémorisé pour la carte d'un ancien étudiant
const AlumniCard = memo(({ alumni }: { alumni: AlumniMember }) => (
  <div className="col-md-4 mb-4">
    <div className="card shadow-lg border-light rounded h-100">
      <img 
        src={alumni.image.replace('/public', '')} 
        className="card-img-top rounded-circle mx-auto mt-4" 
        alt={alumni.name} 
        style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{alumni.name}</h5>
        <p className="text-muted">{alumni.profession} - Promotion {alumni.year}</p>
        <p className="card-text flex-grow-1">
          "L'expérience et l'enseignement que j'ai reçus à l'université m'ont permis de me développer dans ma carrière. C'est un honneur d'être un ancien étudiant de cet établissement."
        </p>
        <a href={alumni.linkedin} className="btn btn-outline-primary mt-auto" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> Voir LinkedIn
        </a>
      </div>
    </div>
  </div>
));

// Composant mémorisé pour un témoignage
const TestimonialCard = memo(({ quote, image, name }: TestimonialProps) => (
  <div className="testimonial-card fade-in">
    <p className="testimonial-quote">{quote}</p>
    <div className="testimonial-author">
      <img src={image.replace('/public', '')} alt={name} className="testimonial-avatar" />
      <span className="testimonial-name">{name}</span>
    </div>
  </div>
));

const Alumni: React.FC = () => {
  // Mémorisation de la liste des anciens étudiants pour éviter les recalculs inutiles
  const alumniList = useMemo<AlumniMember[]>(() => [
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
  ], []);

  // Mémorisation des témoignages pour éviter les recalculs inutiles
  const testimonials = useMemo(() => [
    {
      quote: "Cette école a été un véritable tremplin pour ma carrière, avec un excellent enseignement et des opportunités qui m'ont propulsé dans l'industrie.",
      image: "/images/azania.jpg",
      name: "Azania YANAGO"
    },
    {
      quote: "Je suis extrêmement reconnaissante envers les professeurs et l'établissement qui ont façonné mes compétences professionnelles.",
      image: "/images/alioune.jpg",
      name: "Alioune TIENDREBEOGO"
    }
  ], []);

  return (
    <div className="container mt-5">
      <div className="fade-in text-center mb-5">
        <h1 className="display-4 text-primary">Nos Anciens Étudiants</h1>
        <p className="lead">Découvrez où nos anciens élèves sont aujourd'hui et leur impact dans leurs domaines professionnels.</p>
      </div>

      <div className="row">
        {alumniList.map((alumni, index) => (
          <AlumniCard key={index} alumni={alumni} />
        ))}
      </div>

      <div className="text-center mt-5">
        <h2 className="mb-4">Témoignages</h2>
        <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index} 
            quote={testimonial.quote} 
            image={testimonial.image} 
            name={testimonial.name} 
          />
        ))}
        </div>
        <button className="btn btn-outline-primary mt-4">Voir plus de témoignages</button>
      </div>
    </div>
  );
};

export default Alumni;
