import React from "react";
import { Responsable } from "../../components/Responsable/Responsable";
import { MenuCumplimiento } from "../../components";
import { Items } from "../../components/MenuCumplimiento/Items";

export const ApoyoAFI = () => {
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row">
              <MenuCumplimiento large={"col-md-4"} name={"Apoyo AFI"}>
                <Items
                  url={"apoyoafipage"}
                  activate={"nav-link false"}
                  id={"vert-tabs-home-tab"}
                  selected={"true"}
                  name={"Entrar"}
                />
              </MenuCumplimiento>
              <Responsable
                large={"col-12 col-sm-7 col-md-8"}
                name={"Carla Eugenia de Leon de Alba"}
                titulo={"Responsable: "}
                correo={"cdeleond@findep.com.mx"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
