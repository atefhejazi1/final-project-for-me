import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./App.less";
import "./App.scss";
import Footer from "./components/Footer";
import LoadingSuspense from "./components/LoadingSuspense";
import HeaderWebsite from "./components/Header";

const NotFound = lazy(() => import("./pages/NotFound/index.js"));
const HomePage = lazy(() => import("./pages/Home/index.js"));

function App() {
  return (
    <Router>
      <HeaderWebsite />
      <Suspense fallback={<LoadingSuspense />}>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
