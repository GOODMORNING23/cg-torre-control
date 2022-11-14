import React from "react";
import { Responsable } from "../../components/Responsable/Responsable";
import { MenuCumplimiento } from "../../components";
import { Items } from "../../components/MenuCumplimiento/Items";

export const Cobranza = () => {
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row">
              <MenuCumplimiento large={"col-md-3"} name={"Cobranza"}>
                <Items
                  url={"cobranzapage"}
                  activate={"nav-link false"}
                  id={"vert-tabs-home-tab"}
                  selected={"true"}
                  name={"Entrar"}
                />
              </MenuCumplimiento>
              <Responsable
                large={"col-12 col-sm-7 col-md-9"}
                name={"Pedro Pablo Pérez Esparza"}
                titulo={"Responsable: "}
                correo={"pperezes@findep.com.mx"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
