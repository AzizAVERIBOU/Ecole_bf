import React from 'react';
import { FaGraduationCap, FaBook, FaFileAlt, FaTrophy } from 'react-icons/fa';
import '../styles/Mediatheque.css';

const Mediatheque = () => {
  return (
    <div className="container py-5">
      {/* Section Héro */}
      <h1 className="mt-4">Médiathèque</h1>

      {/* Section Liste des Admis */}
      <section className="about-section mb-5">
        <h2 className="text-center mb-4">
          <FaGraduationCap className="me-2" />
          Liste des Admis
        </h2>
        <div className="row">
          {/* 2023 */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Promotion 2023</h3>
                <p className="card-text">
                  Liste des étudiants admis en 2023
                </p>
                <button className="btn btn-primary">Voir la liste</button>
              </div>
            </div>
          </div>
          {/* 2022 */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Promotion 2022</h3>
                <p className="card-text">
                  Liste des étudiants admis en 2022
                </p>
                <button className="btn btn-primary">Voir la liste</button>
              </div>
            </div>
          </div>
          {/* 2021 */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Promotion 2021</h3>
                <p className="card-text">
                  Liste des étudiants admis en 2021
                </p>
                <button className="btn btn-primary">Voir la liste</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Anciens Devoirs CPGE-MENAPLN */}
      <section className="formations-section bg-light p-4 rounded mb-5">
        <h2 className="text-center mb-4">
          <FaBook className="me-2" />
          Anciens Devoirs CPGE-MENAPLN
        </h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Mathématiques</h3>
                <p className="card-text">
                  Devoirs et exercices de mathématiques
                </p>
                <button className="btn btn-primary">Accéder</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Physique</h3>
                <p className="card-text">
                  Devoirs et exercices de physique
                </p>
                <button className="btn btn-primary">Accéder</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Chimie</h3>
                <p className="card-text">
                  Devoirs et exercices de chimie
                </p>
                <button className="btn btn-primary">Accéder</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Anciens Devoirs CPGE */}
      <section className="about-section mb-5">
        <h2 className="text-center mb-4">
          <FaFileAlt className="me-2" />
          Anciens Devoirs CPGE
        </h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Mathématiques</h3>
                <p className="card-text">
                  Devoirs et exercices de mathématiques
                </p>
                <button className="btn btn-primary">Accéder</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Physique</h3>
                <p className="card-text">
                  Devoirs et exercices de physique
                </p>
                <button className="btn btn-primary">Accéder</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Chimie</h3>
                <p className="card-text">
                  Devoirs et exercices de chimie
                </p>
                <button className="btn btn-primary">Accéder</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Anciens Concours */}
      <section className="formations-section bg-light p-4 rounded">
        <h2 className="text-center mb-4">
          <FaTrophy className="me-2" />
          Anciens Concours
        </h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Concours 2023</h3>
                <p className="card-text">
                  Sujets et corrigés des concours 2023
                </p>
                <button className="btn btn-primary">Accéder</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Concours 2022</h3>
                <p className="card-text">
                  Sujets et corrigés des concours 2022
                </p>
                <button className="btn btn-primary">Accéder</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Concours 2021</h3>
                <p className="card-text">
                  Sujets et corrigés des concours 2021
                </p>
                <button className="btn btn-primary">Accéder</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mediatheque; 