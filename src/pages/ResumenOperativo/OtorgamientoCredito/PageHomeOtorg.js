import React from "react";
import { SmallCard } from "../../../components/SmallCard/SmallCard";

export const PageHomeOtorg = () => {
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
              Otorgamiento de Credito
            </h1>
            <br />
            <div className="row">
              <SmallCard
                large={"col-lg-3 col-6"}
                nameProject={"Push (C)"}
                icon={"fas fa-file"}
                url={"Push"}
                sizeColor={"small-box bg-primary"}
              />
              <SmallCard
                large={"col-lg-3 col-6"}
                nameProject={"Metricas Operativas"}
                icon={"fas fa-sort-numeric-up"}
                url={"MetricasOperativas"}
                sizeColor={"small-box bg-red"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
