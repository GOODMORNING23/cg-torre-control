import React from "react";
import { Responsable } from "../../components/Responsable/Responsable";
import { MenuCumplimiento } from "../../components";
import { Items } from "../../components/MenuCumplimiento/Items";

export const Comercial = () => {
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row">
              <MenuCumplimiento large={"col-md-3"} name={"Comercial"}>
                <Items
                  url={"comercialpage"}
                  activate={"nav-link false"}
                  id={"vert-tabs-home-tab"}
                  selected={"true"}
                  name={"Entrar"}
                />
              </MenuCumplimiento>
              <Responsable
                large={"col-12 col-sm-7 col-md-9"}
                name={"Iván Galaviz Elias / Manuel Prieto Gonzales"}
                titulo={"Responsable: "}
                correo={"igalavize@findep.com.mx / mprietog@findep.com.mx"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
