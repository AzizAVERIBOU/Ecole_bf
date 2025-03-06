import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="container py-5">
      {/* Section Héro */}
      <section className="hero-section text-white text-center mb-5">
        <div className="hero-content">
          <h1 className="display-4 mb-4">Bienvenue aux CPGE-MENAPLN</h1>
          <p className="lead mb-4">
            Une formation d'excellence en preparation aux concours d'entrée aux grandes ecoles
          </p>
           
        </div>
      </section>

      {/* Section À propos */}
      <section className="about-section mb-5">
        <h2 className="text-center mb-4">CPGE-MENAPLN</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="lead">
              Les Classes Préparatoires d'entrée dans les Grandes Ecoles du MENAPLN étaient sensé etre une institution d'excellence qui forme les futurs etudiantes et etudiantes
              qui aspirent a etre admis dans les grandes ecoles de leur choix.
            </p>
            <p className="lead">
            les Classes Préparatoires aux Grandes Écoles - CPGE - sont des programmes 
            intensifs de deux ans destinés aux titulaires du baccalauréat. Elles préparent les étudiants aux 
            concours d'entrée des grandes écoles d'ingénieurs pour finalemenent aller a l'uo, et d'autres grandes ecoles 
            Ces classes renforcent les compétences en mathématiques, physique, chimie et autres disciplines scientifiques.
            </p>
          </div>
          <div className="col-md-6">
            <img 
              src="/public/images/class.jpg" 
              alt="Campus CPGE-MENAPLN" 
              className="img-fluid rounded shadow"
            />
            <h3 className="text-center mt-3">Les cowbows de la premiere promotion</h3>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Home;