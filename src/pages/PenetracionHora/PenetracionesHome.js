import React from "react";
import { MenuCumplimiento } from "../../components";
import { Items } from "../../components/MenuCumplimiento/Items";

export const PenetracionesHome = () => {
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row">
              <MenuCumplimiento
                large={"col-md-4"}
                name={"Penetracion por hora Cobranza"}
              >
                <Items
                  url={"PenetracionHoraCob"}
                  activate={"nav-link false"}
                  id={"vert-tabs-home-tab"}
                  selected={"true"}
                  name={"Entrar"}
                />
              </MenuCumplimiento>
              {/* <MenuCumplimiento
                large={"col-md-4"}
                name={"Penetracion por hora Comercial"}
              >
                <Items
                  url={"PenetracionHoraComer"}
                  activate={"nav-link false"}
                  id={"vert-tabs-home-tab"}
                  selected={"true"}
                  name={"Entrar"}
                />
              </MenuCumplimiento> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
