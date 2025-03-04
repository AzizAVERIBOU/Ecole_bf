import React from 'react';

const _404 = () => {
  return (
    <div className="d-flex p-6 min-vw-100 justify-content-center align-items-center text-center">
      <div>
        <h1 className="display-1 fw-bold text-dark">404</h1>
        <p className="fs-3 fw-semibold text-secondary mt-3">Page non trouvée</p>
        <p className="text-muted">Désolé, la page que vous recherchez n'existe pas.</p>
        <a
          href="/"
          className="btn btn-outline-primary mt-4 px-4 py-2 fs-5 fw-semibold"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
}

export default _404;
