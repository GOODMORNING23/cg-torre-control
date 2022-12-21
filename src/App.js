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
import { PageHomeATC } from "./pages/ResumenOperativo/Atencionclientes/PageHomeATC";
import { PageHomeCobr } from "./pages/ResumenOperativo/Cobranza/PageHomeCobr";
import { PageHomeComer } from "./pages/ResumenOperativo/Comercial/PageHomeComer";
import { PageHomeOtorg } from "./pages/ResumenOperativo/OtorgamientoCredito/PageHomeOtorg";
import { PageHomeRed } from "./pages/ResumenOperativo/ApoyoRed/PageHomeRed";
import { PageHomeAFI } from "./pages/ResumenOperativo/ApoyoAFI/PageHomeAFI";
import { PageHomeOtro } from "./pages/ResumenOperativo/PageHome/PageHomeOtro";
import { FrameDataATC } from "./pages/DataStudios/DataATC/ControlGuschat";
import { Ranking } from "./pages/DataStudios/DataCobr/Ranking";
import { ControlVT } from "./pages/DataStudios/DataApoyoAFI/ControlVT";
import { ControlLlamadasAheeva } from "./pages/DataStudios/DataCobr/ControlLlamadasAheeva";
import { SeguimientoMarcacion } from "./pages/DataStudios/DataComer/SeguimientoMarcacion";
import { ControlLlamadasAFI } from "./pages/DataStudios/DataRed/ControlLlamadasAFI";
import { SocioImparable } from "./pages/DataStudios/DataRed/SocioImparable";
import { Facturacion } from "./pages/DataStudios/DataOtros/Facturacion";
import { MetricasOperativas } from "./pages/DataStudios/DataOtorg/MetricasOperativas";
import { IndicadoresCalidad } from "./pages/DataStudios/DataOtros/IndicadoresCalidad";
import { ControlPersonal } from "./pages/DataStudios/DataRed/ControlPersonal";
import { Pruebas } from "./pages/Pruebas";
import { TableroProd } from "./pages/DataStudios/DataOtorg/TableroProd";

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
              {/** Resumen Diario */}
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

              {/** Directorio Reportes  */}
              <Route path="repositoriocg" element={<RepositorioCG />} />

              {/** Resumen Ejecutivo */}
              <Route path="AsignacionDiaria" element={<AsignacionDiaria />} />
              <Route path="CapacidadInstalada" element={<CapacidadInstalada />} />
              <Route path="EficienciaMarcador" element={<EficienciaMarcador />} />

              {/** Resumen Operativo */}
              {/** Atencion a Clientes */}
              <Route path="PageHomeATC" element={<PageHomeATC />} />
              <Route path="PageHomeATC/DataATC" element={<FrameDataATC />} />
              <Route path="PenetracionHome" element={<PenetracionesHome />} />
              {/** Cobranza */}
              <Route path="PageHomeCobr" element={<PageHomeCobr />} />
              <Route path="PageHomeCobr/PenetracionHoraCob" element={<PenetracionHora />} />
              <Route path="PageHomeCobr/Ranking" element={<Ranking />} />
              <Route path="PageHomeCobr/ControlLlamadas" element={<ControlLlamadasAheeva />} />
              

              {/** Comercial */}
              <Route path="PageHomeComer" element={<PageHomeComer />} />
              <Route path="PageHomeComer/PenetracionHoraComer" element={<PenetracionHoraComer />} />
              <Route path="PageHomeComer/SeguimientoMarcacion" element={<SeguimientoMarcacion />} />
              
              {/** Otorgamiento de Credito */}
              <Route path="PageHomeOtorg" element={<PageHomeOtorg />} />
              <Route path="PageHomeOtorg/Push" element={<Push />} />
              <Route path="PageHomeOtorg/MetricasOperativas" element={<MetricasOperativas />} />
              <Route path="PageHomeOtorg/TableroProd" element={<TableroProd />} />

              {/** Apoyo a la Red */}
              <Route path="PageHomeRed" element={<PageHomeRed />} />
              <Route path="PageHomeRed/ControlLlamadasAFI" element={<ControlLlamadasAFI />} />
              <Route path="PageHomeRed/SocioImparable" element={<SocioImparable />} />
              <Route path="PageHomeRed/ControlPersonal" element={<ControlPersonal />} />

              {/** Apoyo AFI */}
              <Route path="PageHomeAFI" element={<PageHomeAFI />} />
              <Route path="PageHomeAFI/ControlVT" element={<ControlVT />} />

              {/** Otros */}
              <Route path="PageHomeOtro" element={<PageHomeOtro />} />
              <Route path="PageHomeOtro/VerificacionFraude" element={<VerificacionFraude />} />
              <Route path="PageHomeOtro/Facturacion" element={<Facturacion />} />
              <Route path="PageHomeOtro/Calidad" element={<IndicadoresCalidad />} />
              <Route path="VerificaHome" element={<VerificaHome />} />

              <Route path="pruebas" element={<Pruebas />} />
            </Route>
          </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
