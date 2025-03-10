import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "./components/Layout";
import routes from "./routes/routes";
import TitleUpdater from "./routes/TitleUpdater";

function App() {
  return (
    <Router>
      <ErrorBoundary fallback={<div className="text-center fw-bold">Une erreur s'est produite.</div>}>
        <Layout>
          <Suspense fallback={<div className="text-center fw-bold">Chargement...</div>}>
            <TitleUpdater />
            <Routes>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;