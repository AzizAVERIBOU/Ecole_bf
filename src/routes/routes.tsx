import { lazy, ReactNode } from "react";
import ROUTES from "./path";
import TITLES from "./title";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Formation = lazy(() => import("../pages/Formation"));
const Admission = lazy(() => import("../pages/Admission"));
const Actualite = lazy(() => import("../pages/Actualite"));
const Alumni = lazy(() => import("../pages/Alumni"));
const Contact = lazy(() => import("../pages/Contact"));
const Mediatheque = lazy(() => import("../pages/Mediatheque"));
const NotFound = lazy(() => import("../pages/_404"));

// Définition du type pour chaque route
interface RouteType {
  path: string;
  element: ReactNode;
  title: string;
}

const routes: RouteType[] = [
  { 
    path: ROUTES.HOME, 
    element: <Home />, 
    title: TITLES.HOME 
  },
  { 
    path: ROUTES.ABOUT, 
    element: <About />, 
    title: TITLES.ABOUT 
  },
  { 
    path: ROUTES.FORMATION, 
    element: <Formation />, 
    title: TITLES.FORMATION 
  },
  { 
    path: ROUTES.ADMISSION, 
    element: <Admission />, 
    title: TITLES.ADMISSION 
  },  
  { 
    path: ROUTES.ACTUALITE, 
    element: <Actualite />, 
    title: TITLES.ACTUALITE 
  },
  { 
    path: ROUTES.ALUMNI, 
    element: <Alumni />, 
    title: TITLES.ALUMNI 
  },
  { 
    path: ROUTES.CONTACT, 
    element: <Contact />, 
    title: TITLES.CONTACT 
  },
  { 
    path: ROUTES.MEDIATHEQUE, 
    element: <Mediatheque />, 
    title: TITLES.MEDIATHEQUE 
  },
  { 
    path: ROUTES.NOT_FOUND, 
    element: <NotFound />, 
    title: TITLES.NOT_FOUND 
  },
];

export default routes;