// App.tsx
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
import { Header } from "@components/Header";
const LoginPage = lazy(() => import("@pages/Login"));
const HomePage = lazy(() => import("@pages/Home"));
const SoilInfoPage = lazy(() => import("@pages/SoilInfo"));
const SoilDetailsPage = lazy(() => import("@pages/SoilDetails"));
const DistributerDetailsPage = lazy(() => import("@pages/DistributerDetails"));

function App() {
  return (
    <div className="w-screen h-screen flex justify-center overflow-x-hidden">
      <div className="w-3/5 flex flex-col items-center">
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/info" element={<SoilInfoPage />} />
          <Route path="/soil" element={<SoilDetailsPage />} />
          <Route path="/distributer" element={<DistributerDetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
