import React from "react"
import '../styles/Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer py-5 mt-5">
      <div className="container">
        <div className="row text-white">

          {/* Logo + slogan */}
          <div className="col-md-4 mb-4">
            <img src="/images/logo-cpge.jpg" alt="Logo" style={{ width: "120px",height: "70px" }} className="mb-3" />
            <p className="fst-italic">Former l’élite de demain, dès aujourd’hui.</p>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5>Contact</h5>
            <div className="underline"></div>
            <p>2iE Kamboinsin<br />Ouagadougou, Burkina Faso</p>
            <p>Tél: +226 70 00 00 00</p>
            <p>Email: cpgemenapln@test.com</p>
          </div>

          {/* À la une */}
          <div className="col-md-4 mb-4">
            <h5>À la une</h5>
            <div className="underline"></div>

            <a href="/actualite1" className="text-decoration-none text-white">
              <div className="d-flex mb-3 align-items-center hover-actu">
                <img src="/images/imageaccroche2.jpg" alt="actu1" style={{ width: "70px", height: "70px", objectFit: "cover" }} />
                <p className="ms-3 mb-0">Visite du ministre sur le campus</p>
              </div>
            </a>

            <a href="/actualite2" className="text-decoration-none text-white">
              <div className="d-flex align-items-center hover-actu">
                <img src="/images/imageacroche1.jpeg" alt="actu2" style={{ width: "70px", height: "70px", objectFit: "cover" }} />
                <p className="ms-3 mb-0">Cérémonie d’ouverture de l’année</p>
              </div>
            </a>
          </div>

        </div>

        <hr className="border-light" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 px-2 px-md-3">
          <p className=" fs-3 mb-2 mb-md-0" style={{ color: "#d5d1cf" }}>
            &copy; {new Date().getFullYear()} C'est notre projet. Tous droits réservés.
          </p>

          <div className="d-flex gap-4 me-md-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white fs-2">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white fs-2">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:cpgemenapln@test.com" className="text-white fs-2">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
