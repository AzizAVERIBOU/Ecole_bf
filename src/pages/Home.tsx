import React from 'react';
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUsers, FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="container-fluid  px-0" style={{ paddingTop: '00px' ,}}>
      {/* Hero Section avec Carousel */}
      <section className="hero-section text-white text-center mb-5">
        <div className="hero-content " style={{height:"350px"}}>
          <h1 className="display-4 mb-4">Bienvenue aux CPGE-MENAPLN</h1>
          <p className="lead  text-white mb-4">
            Une formation d'excellence en préparation aux concours d'entrée aux grandes écoles
          </p>
        </div>
      </section>

     

      <section className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Colonne gauche */}
          <div className="col-md-5 mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              <div style={{ width: '6px', height: '60px', backgroundColor: '#007bff', marginRight: '15px' }}></div>
              <h3 className="m-0 fw-bold">Nos actualités</h3>
            </div>
            <h1 className="fw-bold fs-2 mb-4">Actualités et Agenda</h1>
           
            <button className="btn btn-primary fs-5 fw-bold btn-lg" style={{ backgroundColor: '#003366', border: 'none', width:'100%', maxWidth: '350px', height:'80px' }}>
              Voir toutes les actualités
            </button>
          </div>

          {/* Colonne droite - Carousel avec légende en dessous */}
          <div className="col-md-7">
            <div id="carouselActus" className="carousel slide carousel-fade shadow rounded overflow-hidden" data-bs-ride="carousel" data-bs-interval="1000">
              <div className="carousel-inner" style={{ height: '500px' }}>
                <div className="carousel-item active">
                  <div style={{ height: '400px', overflow: 'hidden' }}>
                    <img src="/images/class.jpg" className="d-block w-100 h-100 object-fit-cover" alt="Actu 1" />
                  </div>
                  <div className="bg-white p-3 border-top">
                    <p className="m-0 fs-5">Les cobayes de la premiere promo</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div style={{ height: '400px', overflow: 'hidden' }}>
                    <img src="/images/imageaccroche6.png" className="d-block w-100 h-100 object-fit-cover" alt="Actu 2" />
                  </div>
                  <div className="bg-white p-3 border-top">
                    <p className="m-0 fs-5">Cérémonie d’ouverture de l’année scolaire.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div style={{ height: '400px', overflow: 'hidden' }}>
                    <img src="/images/imageaccroche5.png" className="d-block w-100 h-100 object-fit-cover" alt="Actu 3" />
                  </div>
                  <div className="bg-white p-3 border-top">
                    <p className="m-0 fs-5">Visite du ministre sur le campus.</p>
                  </div>
                </div>
              </div>

              {/* Contrôles optionnels */}
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselActus" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselActus" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>


      <section className="chiffres-section position-relative">
      {/* Rangée du haut avec image */}
      <div className="top-row d-flex justify-content-center align-items-center text-white text-center">
        <h2 className="fs-1 fw-bold" style={{width:"600px"}}>Un vivier pour le développement économique et social durable du Burkina Faso</h2>
      </div>

      {/* Rangée du bas */}
      <div className="bottom-row"></div>

      {/* Bandeau central flottant */}
      <div className="floating-panel container shadow">
        <div className="row">
          {/* Colonne gauche */}
          <div className="col-md-4 text-center text-md-start mb-4 mb-md-0 " >
            <hr className="thick-blue-line mb-2" />
            <h3 className="fw-bold mt-5 fs-1" style={{marginLeft:"50px"}}>Chiffres Clés</h3>
          </div>

          {/* Colonne droite */}
          <div className="col-md-8 d-flex flex-column gap-4 fs-3 fw-bold">
            <div className="d-flex align-items-center">
              <FaUsers size={100} className="icon me-3" />
              <span>+ 100 Alumni</span>
            </div>
            <div className="d-flex align-items-center">
              <FaGraduationCap size={100} className="icon me-3" />
              <span>+ 75% de taux de réussite</span>
            </div>
            <div className="d-flex align-items-center">
              <FaChalkboardTeacher size={100} className="icon me-3" />
              <span>+ 20 Ecoles d'ingenieurs intégrées</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
