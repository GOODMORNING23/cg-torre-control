import React from "react";
import { SmallCard } from "../../../components/SmallCard/SmallCard";

export const PageHomeOtro = () => {
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
              Otros
            </h1>
            <br />
            <div className="row">
              <SmallCard
                large={"col-lg-4 col-6"}
                nameProject={"Verificacion Fraude"}
                icon={"fas fa-user-clock"}
                url={"VerificacionFraude"}
                sizeColor={"small-box bg-primary"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
