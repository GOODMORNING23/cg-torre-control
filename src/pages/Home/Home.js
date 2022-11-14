import { Widgets } from "../../components/Widgets/Widgets";

export const Home = () => {

  const EstilosLetraH3 = {
    color: "black",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "2.5rem",
    textShadow: "-1px -1px 1px #aaa",
  };

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 style={EstilosLetraH3} className="m-0">Buenos dias COA !!</h1>
              </div>
            </div>
          </div>
        </div>
        <Widgets/>
      </div>
    </div>
  );
};
