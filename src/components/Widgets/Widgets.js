import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const Widgets = () => {
  const { auth } = useAuth();

  const Mostrar = () => {
    var x = document.getElementById("mostrar");
    var y = document.getElementById("mostrar1");
    var z = document.getElementById("mostrar2");
    var a = document.getElementById("mostrar3");
    if (x.style.display === "none") {
      x.style.display = "block";
      z.style.display = "none";
      y.style.display = "none";
      a.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
      a.style.display = "none";
    }
  };

  const Mostrar1 = () => {
    var x = document.getElementById("mostrar");
    var y = document.getElementById("mostrar1");
    var z = document.getElementById("mostrar2");
    var a = document.getElementById("mostrar3");
    if (y.style.display === "none") {
      y.style.display = "block";
      x.style.display = "none";
      z.style.display = "none";
      a.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
      a.style.display = "none";
    }
  };

  const Mostrar2 = () => {
    var x = document.getElementById("mostrar");
    var y = document.getElementById("mostrar1");
    var z = document.getElementById("mostrar2");
    var a = document.getElementById("mostrar3");
    if (z.style.display === "none") {
      z.style.display = "block";
      x.style.display = "none";
      y.style.display = "none";
      a.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
      a.style.display = "none";
    }
  };

  const Mostrar3 = () => {
    var x = document.getElementById("mostrar");
    var y = document.getElementById("mostrar1");
    var z = document.getElementById("mostrar2");
    var a = document.getElementById("mostrar3");
    if (a.style.display === "none") {
      a.style.display = "block";
      z.style.display = "none";
      x.style.display = "none";
      y.style.display = "none";
    } else {
      a.style.display = "none";
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
    }
  };
  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div onClick={Mostrar1} className="col-lg-4 col-5">
              <div className="small-box bg-green">
                <div className="inner">
                  <h3>Resumen Ejecutivo</h3>
                </div>
                <div className="icon">
                  <i className="fas fa-user-tie" />
                </div>
                <div className="nav-item dropdown">
                  <p
                    style={{ color: "green" }}
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    href="#"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></p>
                </div>
              </div>
            </div>
            <div onClick={Mostrar} className="col-lg-4 col-4">
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>Resumen Diario</h3>
                </div>
                <div className="icon">
                  <i className="fas fa-calendar-day" />
                </div>
                <div className="nav-item dropdown">
                  <p
                    style={{ color: "red" }}
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    href="roro"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></p>
                </div>
              </div>
            </div>
            {auth.tipo === 0 ? (
              <div onClick={Mostrar3} className="col-lg-4 col-4">
              <div className="small-box bg-primary">
                <div className="inner">
                  <h3>Resumen Operativo </h3>
                </div>
                <div className="icon">
                  <i className="fas fa-user" />
                </div>
                <div className="nav-item dropdown">
                  <p
                    style={{ color: "green" }}
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    href="#"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></p>
                </div>
              </div>
            </div>
            ) : ""}
            
            <div onClick={Mostrar2} className="col-lg-4 col-4">
              <div className="small-box bg-purple">
                <div className="inner">
                  <h3>Directorios CG</h3>
                </div>
                <div className="icon">
                  <i className="fas fa-book" />
                </div>
                <div className="nav-item dropdown">
                  <p
                    style={{ color: "green" }}
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    href="#"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></p>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <hr />
          <div style={{ display: "none" }} id="mostrar2">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-primary elevation-1">
                    <i className="fas fa-clipboard" />
                  </span>
                  <div className="info-box-content">
                    <Link to="repositoriocg" className="info-box-text">
                      <b style={{ color: "black" }}>Directorio Reportes</b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "none" }} id="mostrar1">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-primary elevation-1">
                    <i className="fas fa-tint" />
                  </span>
                  <div className="info-box-content">
                    <Link to="AsignacionDiaria" className="info-box-text">
                      <b style={{ color: "black" }}>Asignacion Diaria</b>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-primary elevation-1">
                    <i className="fas fa-battery-half" />
                  </span>
                  <div className="info-box-content">
                    <Link to="CapacidadInstalada" className="info-box-text">
                      <b style={{ color: "black" }}>Capacidad Instalada</b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "none" }} id="mostrar">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-primary elevation-1">
                    <i className="fas fa-headset" />
                  </span>
                  <div className="info-box-content">
                    <Link to="AtencionClientes" className="info-box-text">
                      <b style={{ color: "black" }}>Atencion a Clientes</b>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-primary elevation-1">
                    <i className="fas fa-money-bill" />
                  </span>
                  <div className="info-box-content">
                    <Link to="Cobranza" className="info-box-text">
                      <b style={{ color: "black" }}>Cobranza</b>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-primary elevation-1">
                    <i className="fas fa-chart-line" />
                  </span>
                  <div className="info-box-content">
                    <Link to="Comercial" className="info-box-text">
                      <b style={{ color: "black" }}>Comercial</b>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-primary elevation-1">
                    <i className="fas fa-briefcase" />
                  </span>
                  <div className="info-box-content">
                    <Link to="OtorgamientoCredito" className="info-box-text">
                      <b style={{ color: "black" }}>Otorgamiento de Credito</b>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-primary elevation-1">
                    <i className="fas fa-network-wired" />
                  </span>
                  <div className="info-box-content">
                    <Link to="ApoyoRed" className="info-box-text">
                      <b style={{ color: "black" }}>Apoyo a la Red</b>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-primary elevation-1">
                    <i className="fas fa-at" />
                  </span>
                  <div className="info-box-content">
                    <Link to="ApoyoAfi" className="info-box-text">
                      <b style={{ color: "black" }}>Apoyo AFI</b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "none" }} id="mostrar3">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-primary elevation-1">
                    <i className="fas fa-headset" />
                  </span>
                  <div className="info-box-content">
                    <Link to="PageHomeATC" className="info-box-text">
                      <b style={{ color: "black" }}>Atencion a Clientes</b>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-primary elevation-1">
                    <i className="fas fa-money-bill" />
                  </span>
                  <div className="info-box-content">
                    <Link to="PageHomeCobr" className="info-box-text">
                      <b style={{ color: "black" }}>Cobranza</b>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-primary elevation-1">
                    <i className="fas fa-chart-line" />
                  </span>
                  <div className="info-box-content">
                    <Link to="PageHomeComer" className="info-box-text">
                      <b style={{ color: "black" }}>Comercial</b>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-primary elevation-1">
                    <i className="fas fa-briefcase" />
                  </span>
                  <div className="info-box-content">
                    <Link to="PageHomeOtorg" className="info-box-text">
                      <b style={{ color: "black" }}>Otorgamiento de Credito</b>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-primary elevation-1">
                    <i className="fas fa-network-wired" />
                  </span>
                  <div className="info-box-content">
                    <Link to="PageHomeRed" className="info-box-text">
                      <b style={{ color: "black" }}>Apoyo a la Red</b>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-primary elevation-1">
                    <i className="fas fa-at" />
                  </span>
                  <div className="info-box-content">
                    <Link to="PageHomeAFI" className="info-box-text">
                      <b style={{ color: "black" }}>Apoyo AFI</b>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box">
                  <span className="info-box-icon bg-primary elevation-1">
                    <i className="far fa-plus-square" />
                  </span>
                  <div className="info-box-content">
                    <Link to="PageHomeOtro" className="info-box-text">
                      <b style={{ color: "black" }}>Otros</b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
