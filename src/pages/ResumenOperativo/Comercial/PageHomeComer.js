import React from "react";
import { SmallCard } from "../../../components/SmallCard/SmallCard";

export const PageHomeComer = () => {
  const EstilosLetraH3 = {
    color: "navy",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "2.5rem",
    textShadow: "-1px -1px 1px #aaa",
  };

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid ">
            <h1 style={EstilosLetraH3} className="m-0">
              Comercial
            </h1>
            <br />
            <div className="row">
              <SmallCard
                large={"col-lg-3 col-6"}
                nameProject={"Penetracion por Hora"}
                icon={"fas fa-user-clock"}
                url={"PenetracionHoraComer"}
                sizeColor={"small-box bg-primary"}
              />
              <SmallCard
                large={"col-lg-3 col-6"}
                nameProject={"Seguimiento Marcacion"}
                icon={"fas fa-tint"}
                url={"SeguimientoMarcacion"}
                sizeColor={"small-box bg-green"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
