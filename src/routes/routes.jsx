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
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/formation", element: <Formation /> },
  { path: "/admission", element: <Admission /> },
  { path: "/actualite", element: <Actualite /> },
  { path: "/alumni", element: <Alumni /> },
  { path: "/contact", element: <Contact /> },
  { path: "/mediatheque", element: <Mediatheque /> },
  { path: "*", element: <_404 /> },
];

export default routes;