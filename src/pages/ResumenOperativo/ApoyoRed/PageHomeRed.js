import React from "react";
import { SmallCard } from "../../../components/SmallCard/SmallCard";

export const PageHomeRed = () => {
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
              Apoyo a la Red
            </h1>
            <br />
            <div className="row">
              <SmallCard
                large={"col-lg-3 col-6"}
                nameProject={"Control Llamadas"}
                icon={"fas fa-chart-bar"}
                url={"ControlLlamadasAFI"}
                sizeColor={"small-box bg-red"}
              />
              <SmallCard
                large={"col-lg-3 col-6"}
                nameProject={"Socio Imparable"}
                icon={"fas fa-universal-access"}
                url={"SocioImparable"}
                sizeColor={"small-box bg-primary"}
              />
              <SmallCard
                large={"col-lg-3 col-6"}
                nameProject={"Control Personal"}
                icon={"fas fa-users"}
                url={"ControlPersonal"}
                sizeColor={"small-box bg-yellow"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
