import { lazy } from "react";

const Home = lazy(() => import("./../pages/Home"));
const About = lazy(() => import("./../pages/About"));
const Formation = lazy(() => import("./../pages/Formation"));
const Admission = lazy(() => import("./../pages/Admission"));
const Actualite = lazy(() => import("./../pages/Actualite"));
const Alumni = lazy(() => import("./../pages/Alumni"));
const Contact = lazy(() => import("./../pages/Contact"));
const Mediatheque = lazy(() => import("./../pages/Mediatheque"));
const _404 = lazy(() => import("./../pages/_404"));

const routes = [
  { 
    path: "/", 
    element: <Home />,
    title: 'Accueil'
  },
  { 
    path: "/about", 
    element: <About />,
    title: 'A Propos'
  },
  { 
    path: "/formation", 
    element: <Formation />,
    title: 'Formation'
  },
  { 
    path: "/admission", 
    element: <Admission />,
    title: 'Admission'
  },
  { 
    path: "/actualite", 
    element: <Actualite />,
    title: 'Actualité'
  },
  { 
    path: "/alumni", 
    element: <Alumni />,
    title: 'Alumni'
  },
  { 
    path: "/contact", 
    element: <Contact />,
    title: 'Contact'
  },
  { 
    path: "/mediatheque", 
    element: <Mediatheque />,
    title: 'Médiathèque'
  },
  { 
    path: "*", 
    element: <_404 />,
    title: '404 | NOT FOUND'
  },
];

export default routes;