import React from "react";
import Avatar from "../Images/Avatar";
import useAuth from "../../hooks/useAuth";
import { Listado } from "../Listas";
import { Link } from "react-router-dom";

export const Menu = () => {
  const { auth } = useAuth();

  function Visualizar() {
    var x = document.getElementById("vizualizar");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function Visualizar2() {
    var x = document.getElementById("vizualizar2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function Visualizar3() {
    var x = document.getElementById("vizualizar3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function Visualizar4() {
    var x = document.getElementById("vizualizar4");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function Visualizar5() {
    var x = document.getElementById("vizualizar5");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  console.log(auth);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <p className="brand-link">
        <Avatar logo={"COA.png"} />
        <span className="brand-text font-weight-light">Torre de Control</span>
      </p>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <Avatar logo={"Users1.png"} />
          </div>
          <div className="info">
            <p style={{ color: "white" }} className="d-block">
              {auth.usuario}
            </p>
          </div>
        </div>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item menu-open">
              <div
                style={{ background: "#3D85C6" }}
                onClick={Visualizar}
                className="nav-link"
              >
                <i className="nav-icon fas fa-book" />
                <p>
                  Resumen Ejecutivo
                  <i className="right fas fa-angle-left" />
                </p>
              </div>
              <ul
                style={{ display: "none" }}
                id="vizualizar"
                className="nav nav-treeview"
              >
                <Listado
                  nombreLista={"Asignacion Diaria"}
                  icon={"nav-icon fas fa-tint"}
                  url={"AsignacionDiaria"}
                />
                {/* <Listado
                  nombreLista={"Capacidad Instalada"}
                  icon={"nav-icon fas fa-battery-half"}
                  url={"CapacidadInstalada"}
                /> */}
                {/* <Listado
                  nombreLista={"Eficiencia del Marcador"}
                  icon={"nav-icon fas fa-battery-half"}
                  url={"EficienciaMarcador"}
                /> */}
              </ul>
            </li>
            <li className="nav-item menu-open">
              <div
                style={{ background: "#3D85C6" }}
                onClick={Visualizar2}
                className="nav-link"
              >
                <i className="nav-icon fas fa-book" />
                <p>
                  Resumen Diario
                  <i className="right fas fa-angle-left" />
                </p>
              </div>
              <ul
                style={{ display: "none" }}
                id="vizualizar2"
                className="nav nav-treeview"
              >
                {/* Carla Eugenia del Leon de Alba */}
                <Listado
                  nombreLista={"Atencion a Clientes"}
                  icon={"nav-icon fas fa-headset"}
                  url={"AtencionClientes"}
                />
                {/* Pedro Pablo Perez */}
                <Listado
                  nombreLista={"Cobranza"}
                  icon={"nav-icon fas fa-money-bill"}
                  url={"Cobranza"}
                />
                {/* Ivan y Manuel */}
                <Listado
                  nombreLista={"Comercial"}
                  icon={"nav-icon fas fa-chart-line"}
                  url={"Comercial"}
                />
                {/* Carla Eugenia del Leon de Alba */}
                <Listado
                  nombreLista={"Otorgamiento de Credito"}
                  icon={"nav-icon fas fa-briefcase"}
                  url={"OtorgamientoCredito"}
                />
                <Listado
                  nombreLista={"Apoyo a la Red"}
                  icon={"nav-icon fas fa-network-wired"}
                  url={"ApoyoRed"}
                />
                <Listado
                  nombreLista={"Apoyo AFI"}
                  icon={"nav-icon fas fa-at"}
                  url={"ApoyoAfi"}
                />
              </ul>
            </li>
            {auth.tipo === 0 ? (
              <>
                <li className="nav-item menu-open">
                  <div
                    style={{ background: "#3D85C6" }}
                    onClick={Visualizar4}
                    className="nav-link"
                  >
                    <i className="nav-icon fas fa-book" />
                    <p>
                      Resumen Operativo
                      <i className="right fas fa-angle-left" />
                    </p>
                  </div>
                  <ul
                    style={{ display: "none" }}
                    id="vizualizar4"
                    className="nav nav-treeview"
                  >
                    {/* Carla Eugenia del Leon de Alba */}
                    <Listado
                      style={{ display: "none" }}
                      nombreLista={"Atencion a Clientes"}
                      icon={"nav-icon fas fa-headset"}
                      url={"PageHomeATC"}
                    />
                    {/* Pedro Pablo Perez */}
                    <Listado
                      nombreLista={"Cobranza"}
                      icon={"nav-icon fas fa-money-bill"}
                      url={"PageHomeCobr"}
                    />
                    {/* Ivan y Manuel */}
                    <Listado
                      nombreLista={"Comercial"}
                      icon={"nav-icon fas fa-chart-line"}
                      url={"PageHomeComer"}
                    />
                    {/* Carla Eugenia del Leon de Alba */}
                    <Listado
                      nombreLista={"Otorgamiento de Credito"}
                      icon={"nav-icon fas fa-briefcase"}
                      url={"PageHomeOtorg"}
                    />
                    <Listado
                      nombreLista={"Apoyo a la Red"}
                      icon={"nav-icon fas fa-network-wired"}
                      url={"PageHomeRed"}
                    />
                    <Listado
                      nombreLista={"Apoyo AFI"}
                      icon={"nav-icon fas fa-at"}
                      url={"PageHomeAFI"}
                    />
                    <Listado
                      nombreLista={"Otros"}
                      icon={"nav-icon far fa-plus-square"}
                      url={"PageHomeOtro"}
                    />
                  </ul>
                </li>
                {/* <li className="nav-item menu-open">
              <div style={{background: "#3D85C6"}} onClick={Visualizar5} className="nav-link">
                <i className="nav-icon fas fa-book" />
                <p>
                  Mantenedor
                  <i className="right fas fa-angle-left" />
                </p>
              </div>
              <ul style={{display: "none"}} id="vizualizar5" className="nav nav-treeview">
                <Listado
                  nombreLista={"Mantenedor ATC"}
                  icon={"nav-icon fas fa-clipboard"}
                  url={"PenetracionHora"}
                />
                <Listado
                      nombreLista={"Penetracion hora"}
                      icon={"nav-icon fas fa-clipboard"}
                      url={"PenetracionHome"}
                    />
                    <Listado
                      nombreLista={"Verificacion Fraude (C)"}
                      icon={"nav-icon fas fa-clipboard"}
                      url={"VerificacionFraude"}
                    />
                    <Listado
                      nombreLista={"Push"}
                      icon={"nav-icon fas fa-clipboard"}
                      url={"Push"}
                    />
              </ul>
            </li> */}
              </>
            ) : (
              ""
            )}
            <li className="nav-item menu-open">
              <div
                style={{ background: "#3D85C6" }}
                onClick={Visualizar3}
                className="nav-link"
              >
                <i className="nav-icon fas fa-book" />
                <p>
                  Buscador Reportes
                  <i className="right fas fa-angle-left" />
                </p>
              </div>
              <ul
                style={{ display: "none" }}
                id="vizualizar3"
                className="nav nav-treeview"
              >
                <Listado
                  nombreLista={"Directorio Reportes"}
                  icon={"nav-icon fas fa-clipboard"}
                  url={"repositoriocg"}
                />
                <Listado
                  nombreLista={"Pruebas Tablas"}
                  icon={"nav-icon fas fa-clipboard"}
                  url={"pruebas"}
                />
              </ul>
            </li>
            {/* <li className="nav-item menu-open">
              <div style={{background: "#3D85C6"}} onClick={Visualizar5} className="nav-link">
                <i className="nav-icon fas fa-book" />
                <p>
                  Mantenedor
                  <i className="right fas fa-angle-left" />
                </p>
              </div>
              <ul style={{display: "none"}} id="vizualizar5" className="nav nav-treeview">
                <Listado
                  nombreLista={"Mantenedor ATC"}
                  icon={"nav-icon fas fa-clipboard"}
                  url={"PenetracionHora"}
                />
              </ul>
            </li> */}
            {/* <div>
              <li className="nav-header">Directorios CG</li>
              <li className="nav-item">
                <Link to="repositoriocg" className="nav-link">
                  <i className="nav-icon far fa-circle text-danger" />
                  <p className="text"> Directorio Reportes</p>
                </Link>
              </li>
            </div> */}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
