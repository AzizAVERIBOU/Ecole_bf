import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "./components/Layout";
import routes from "./routes/routes";

function App() {
  return (
    <Router>
      <ErrorBoundary fallback={<div>Une erreur s'est produite.</div>}>
        <Layout>
          <Suspense fallback={<div>Chargement...</div>}>
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