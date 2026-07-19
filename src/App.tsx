import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Logger } from "./logging/Logger";
import { AboutPage } from "./pages/AboutPage";
import { CareersPage } from "./pages/CareersPage";
import { CompaniesPage } from "./pages/CompaniesPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { HowWeWorkPage } from "./pages/HowWeWorkPage";

export class AppBootstrap {
  public static initialize(): void {
    Logger.info("initialize", "Specitas Group multi-page website mounted");
  }
}

function App() {
  useEffect(() => {
    AppBootstrap.initialize();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/how-we-work" element={<HowWeWorkPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/career" element={<Navigate to="/careers" replace />} />
        <Route path="/presence" element={<Navigate to="/about" replace />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/share" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
