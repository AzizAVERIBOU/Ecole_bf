const Footer: React.FC = () => {

  return (
    <footer className="py-3 mt-5">
      <hr />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            {/* Liens sociaux */}
            <div className="mb-4">
              <a href="/" 
                 target="_blank" 
                 className={`btn btn-outline-dark mx-2`}
                 rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="/" 
                 target="_blank" 
                 className="btn btn-outline-primary mx-2"
                 rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/" 
                 className="btn btn-outline-danger mx-2">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            {/* Contact */}
            <div className="mb-3 d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
              <p className="mb-1">
                <i className="fas fa-envelope me-2"></i>cpgemenapln@test.com 
              </p>
              <p className="mb-0">
                <i className="fas fa-map-marker-alt me-2"></i>Ouagadougou, Burkina Faso
              </p>
            </div>
            {/* Copyright */}
            <hr className="my-4" />
            <p className="text-muted mb-0">
              &copy; {new Date().getFullYear()} C'est notre projet. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 