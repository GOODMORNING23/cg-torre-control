import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { AuthLayout } from "./layouts/AuthLayout";
import RutaProtegida from "./layouts/RutaProtegida";
import { AuthProvider } from "./context/AuthProvider";
import { Home } from "./pages/Home/Home";
import { AtencionClientes } from "./pages/AtencionClientes/AtencionClientes";
import { AtencionClientesFISA } from "./pages/AtencionClientes/AtencionClientesFISA";
import { Cobranza } from "./pages/Cobranza/Cobranza";
import { CobranzaPage } from "./pages/Cobranza/CobranzaPage";
import { Comercial } from "./pages/Comercial/Comercial";
import { ComercialPage } from "./pages/Comercial/ComercialPage";
import { ApoyoRed } from "./pages/ApoyoRed/ApoyoRed";
import { RepositorioCG } from "./pages/RepositorioCG/RepositorioCG";
import { ApoyoRedPage } from "./pages/ApoyoRed/ApoyoRedPage";
import { OtorgamientoCredito } from "./pages/OtorgamientoCredito/OtorgamientoCredito";
import { OtorgamientoCreditoPage } from "./pages/OtorgamientoCredito/OtorgamientoCreditPage";
import { ApoyoAFI } from "./pages/ApoyoAFI/ApoyoAFI";
import { ApoyoAFIPage } from "./pages/ApoyoAFI/ApoyoAFIPage";
import { AsignacionDiaria } from "./pages/AsignacionDiaria/AsignacionDiaria";
import { CapacidadInstalada } from "./pages/CapacidadInstalada";
import { EficienciaMarcador } from "./pages/EficienciaMarcador/EficienciaMarcador";
import { PenetracionHora } from "./pages/PenetracionHora/PenetracionHora";
import { PenetracionesHome } from "./pages/PenetracionHora/PenetracionesHome";
import { PenetracionHoraComer } from "./pages/PenetracionHora/PenetracionHoraComer";
import { VerificaHome } from "./pages/VerificacionFraude/VerificaHome";
import { VerificacionFraude } from "./pages/VerificacionFraude/VerificacionFraude";
import { Push } from "./pages/Push/Push";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
            </Route>

            <Route path="/home" element={<RutaProtegida />}>
              <Route index element={<Home />} />
              <Route path="AtencionClientes" element={<AtencionClientes />} />
              <Route path="AtencionClientes/atencionClientesFISA" element={<AtencionClientesFISA />} />
              <Route path="Cobranza" element={<Cobranza />} />
              <Route path="Cobranza/cobranzapage" element={<CobranzaPage />} />
              <Route path="Comercial" element={<Comercial />} />
              <Route path="Comercial/comercialpage" element={<ComercialPage />}/>
              <Route path="ApoyoRed" element={< ApoyoRedPage/>} />
              <Route path="ApoyoRed/ApoyoRedPage" element={<ApoyoRed />} />
              <Route path="OtorgamientoCredito" element={<OtorgamientoCredito />} />
              <Route path="OtorgamientoCredito/otogamientocreditopage" element={<OtorgamientoCreditoPage />} />
              <Route path="ApoyoAfi" element={<ApoyoAFI />} />
              <Route path="ApoyoAfi/apoyoafipage" element={<ApoyoAFIPage />} />
              <Route path="repositoriocg" element={<RepositorioCG />} />
              <Route path="AsignacionDiaria" element={<AsignacionDiaria />} />
              <Route path="CapacidadInstalada" element={<CapacidadInstalada />} />
              <Route path="EficienciaMarcador" element={<EficienciaMarcador />} />
              <Route path="PenetracionHome" element={<PenetracionesHome />} />
              <Route path="PenetracionHome/PenetracionHoraCob" element={<PenetracionHora />} />
              <Route path="PenetracionHome/PenetracionHoraComer" element={<PenetracionHoraComer />} />
              <Route path="VerificaHome" element={<VerificaHome />} />
              <Route path="VerificacionFraude" element={<VerificacionFraude />} />
              <Route path="Push" element={<Push />} />
            </Route>
          </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
