import React, { useState } from 'react';
import { FaCalendarAlt, FaSearch, FaTags, FaChevronRight } from 'react-icons/fa';
import '../styles/Actualite.css';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

const Actualite: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Ouverture des inscriptions pour l'année académique 2025-2026",
      date: "15 Mars 2025",
      category: "Admissions",
      excerpt: "Les inscriptions pour la nouvelle année académique sont désormais ouvertes. Les candidats intéressés sont invités à soumettre leur dossier avant le 30 avril 2025.",
      image: "/images/inscription.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Conférence sur les métiers de l'ingénierie",
      date: "10 Mars 2025",
      category: "Événements",
      excerpt: "Une conférence sur les métiers de l'ingénierie sera organisée le 20 mars 2025. Des professionnels de renom partageront leur expérience avec nos étudiants.",
      image: "/images/conference.jpg"
    },
    {
      id: 3,
      title: "Résultats exceptionnels aux concours 2024",
      date: "28 Février 2025",
      category: "Réussites",
      excerpt: "Nos étudiants ont obtenu d'excellents résultats aux concours des grandes écoles cette année, avec un taux de réussite de 85%.",
      image: "/images/success.jpg",
      featured: true
    },
    {
      id: 4,
      title: "Visite du Ministre de l'Éducation",
      date: "15 Février 2025",
      category: "Événements",
      excerpt: "Le Ministre de l'Éducation a visité nos installations et a félicité l'équipe pédagogique pour la qualité de l'enseignement dispensé.",
      image: "/images/minister.jpg"
    },
    {
      id: 5,
      title: "Nouveau partenariat avec l'École Polytechnique de Paris",
      date: "5 Février 2025",
      category: "Partenariats",
      excerpt: "Un accord de partenariat a été signé avec l'École Polytechnique de Paris pour faciliter la mobilité des étudiants et des enseignants.",
      image: "/images/partnership.jpg"
    },
    {
      id: 6,
      title: "Lancement du club de robotique",
      date: "20 Janvier 2025",
      category: "Vie étudiante",
      excerpt: "Un nouveau club de robotique a été créé pour permettre aux étudiants de développer leurs compétences en ingénierie et en programmation.",
      image: "/images/robotics.jpg"
    }
  ];

  const categories = ['all', ...new Set(newsItems.map(item => item.category))];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = newsItems.filter(item => item.featured);

  return (
    <div className="container py-5">
      {/* Section Héro */}
      <section className="hero-section text-white text-center mb-5">
        <div className="hero-content">
          <h1 className="display-4 mb-4">Actualités de la CPGE-MENAPLN</h1>
          <p className="lead mb-4">
            Restez informé des dernières nouvelles et événements de notre institution
          </p>
        </div>
      </section>

      {/* Section À la une */}
      {featuredNews.length > 0 && (
        <section className="featured-news mb-5">
          <h2 className="text-center mb-4">À la une</h2>
          <div className="row">
            {featuredNews.map(item => (
              <div key={item.id} className="col-md-6 mb-4">
                <div className="card featured-card h-100 border-0 shadow">
                  <div className="row g-0">
                    <div className="col-md-6">
                      <img src={item.image} className="img-fluid rounded-start h-100" alt={item.title} style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body d-flex flex-column h-100">
                        <div className="mb-auto">
                          <span className="badge bg-primary mb-2">{item.category}</span>
                          <h3 className="card-title">{item.title}</h3>
                          <p className="card-text text-muted small">
                            <FaCalendarAlt className="me-1" /> {item.date}
                          </p>
                          <p className="card-text">{item.excerpt}</p>
                        </div>
                        <a href="#" className="btn btn-outline-primary mt-3">
                          Lire la suite <FaChevronRight size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section Recherche et Filtres */}
      <section className="search-section bg-light p-4 rounded mb-5">
        <div className="row">
          <div className="col-md-8">
            <div className="input-group mb-3 mb-md-0">
              <span className="input-group-text"><FaSearch /></span>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Rechercher une actualité..." 
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center">
              <FaTags className="me-2 text-muted" />
              <div className="dropdown w-100">
                <button className="btn btn-outline-secondary dropdown-toggle w-100" type="button" id="categoryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  {selectedCategory === 'all' ? 'Toutes les catégories' : selectedCategory}
                </button>
                <ul className="dropdown-menu w-100" aria-labelledby="categoryDropdown">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button 
                        className="dropdown-item" 
                        onClick={() => handleCategoryChange(category)}
                      >
                        {category === 'all' ? 'Toutes les catégories' : category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Liste des actualités */}
      <section className="news-list mb-5">
        <h2 className="text-center mb-4">Toutes les actualités</h2>
        <div className="row">
          {filteredNews.length > 0 ? (
            filteredNews.map(item => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <img src={item.image} className="card-img-top" alt={item.title} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <span className="badge bg-primary mb-2">{item.category}</span>
                    <h3 className="card-title h5">{item.title}</h3>
                    <p className="card-text text-muted small">
                      <FaCalendarAlt className="me-1" /> {item.date}
                    </p>
                    <p className="card-text flex-grow-1">{item.excerpt}</p>
                    <a href="#" className="btn btn-outline-primary mt-3">
                      Lire la suite <FaChevronRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <div className="alert alert-info">
                Aucune actualité ne correspond à votre recherche.
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section Abonnement */}
      <section className="subscribe-section bg-primary text-white p-4 rounded mb-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h3>Restez informé</h3>
            <p>Abonnez-vous à notre newsletter pour recevoir les dernières actualités directement dans votre boîte mail.</p>
          </div>
          <div className="col-md-5">
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Votre adresse email" />
              <button className="btn btn-light" type="button">S'abonner</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Actualite;