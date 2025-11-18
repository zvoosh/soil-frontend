// App.tsx
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
import { Header } from "@components/Header";
import { PageLayout } from "@components/PageLayout";
import ProtectedRoute from "@components/ProtectedRoute";
const LoginPage = lazy(() => import("@pages/auth/Login"));
const RegisterPage = lazy(() => import("@pages/auth/Register"));
const HomePage = lazy(() => import("@pages/Home"));
const SoilInfoPage = lazy(() => import("@pages/SoilInfo"));
const SoilDetailsPage = lazy(() => import("@pages/SoilDetails"));
const DistributerDetailsPage = lazy(() => import("@pages/DistributerDetails"));
const AdminPage = lazy(() => import("@pages/Admin"));

function App() {
  const location = useLocation();

  const rawUser = sessionStorage.getItem("user");
  const user = rawUser ? JSON.parse(rawUser) : null;
  const role = user?.role ?? "";

  return (
    <div className="w-screen h-screen flex justify-center overflow-x-hidden">
      <div className="w-full md:w-3/5 flex flex-col items-center">
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && <Header />}
        <Routes>
          <Route
            path="/"
            element={
              role === "admin" ? (
                <Navigate to="/admin/home" replace />
              ) : (
                <Navigate to="/user/home" replace />
              )
            }
          />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/user"
            element={
              <ProtectedRoute allowedRoles={["user"]} userRole={role}>
                <PageLayout />
              </ProtectedRoute>
            }
          >
            <Route path="home" element={<HomePage />} />
            <Route path="info" element={<SoilInfoPage />} />
            <Route path="soil" element={<SoilDetailsPage />} />
            <Route path="distributer" element={<DistributerDetailsPage />} />
          </Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]} userRole={role}>
                <PageLayout />
              </ProtectedRoute>
            }
          >
            <Route path="home" element={<AdminPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
