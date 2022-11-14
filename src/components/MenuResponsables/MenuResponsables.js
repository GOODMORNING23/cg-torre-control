import React from "react";
import { ItemsMenuResp } from "./ItemsMenuResp";

export const MenuResponsables = ({ nombreCamp }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-header">
          <h2>
            <b>{nombreCamp}</b>
          </h2>
        </div>
        <div className="card-body ">
          <div className="card-body">
            <div className="row">
              <div className="col-1 col-sm-7">
                <div
                  className="nav flex-column nav-tabs h-100"
                  id="vert-tabs-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <ItemsMenuResp
                    nombreCampania={"Campaña FISA"}
                    activo={"true"}
                    url={"/fisa"}
                  />
                  <ItemsMenuResp
                    nombreCampania={"Campaña AEF"}
                    activo={"false"}
                    url={"/aef"}
                  />
                  <ItemsMenuResp
                    nombreCampania={"Campaña AFI"}
                    activo={"false"}
                    url={"/afi"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
