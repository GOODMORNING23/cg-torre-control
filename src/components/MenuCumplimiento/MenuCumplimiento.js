export const MenuCumplimiento = ({children, name, large}) => {

  const Correo = {
    color: "#A40101",
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    textAlign: "center", 
    textShadow: "-1px -1px 1px #aaa",
  };

  return (
    <>
      <div className={large}>
        <div className="card">
          <div className="card-header">
            <h2 style={{ color: "black" }}>
              <b style={Correo}>{name}</b>
            </h2>
          </div>
          <div className="card-body ">
            <div className="card-body">
              <div className="row">
                <div className="col-1 col-sm-6">
                  <div
                    className="nav flex-column nav-tabs h-100"
                    id="vert-tabs-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
