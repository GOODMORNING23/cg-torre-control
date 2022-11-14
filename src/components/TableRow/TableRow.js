import { Row } from "./Row";


export const TableRow = ({ datos, expand, heders = [] }) => {
  
  const meses = {
    color: "#EBF5F9",
    backgroundColor: "#0B5394",
    textAlign: "center",
    fontFamily: "Arial",
  };

  

  const RenderHeader = ( header ) => {
    if (header?.text &&  header?.background ) {
      return (
        <th style={{...meses, backgroundColor: header.background}}>{header.text}</th>
     )
    }else {
      return (
        <th style={meses}>{header}</th>
      )
    }
  }

  
  return (
      <div className={expand}>
        <div className="card">
          <div className="card-header">
          <div className="card-body">
            <table className="table table-bordered table-sm">
              <thead>
                <tr>
                  {heders.map(index => (
                    RenderHeader(index)
                  ))}
                </tr>
              </thead>
              <tbody>
                {!!datos?.length && datos.map((item) => (
                  <Row
                    key={item.id}
                    item={item}
                  />
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
  );
};
