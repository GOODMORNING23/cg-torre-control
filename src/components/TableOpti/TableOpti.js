import { RowOpti } from "../RowOpti/RowOpti";

export const TableOpti = ({ datos, expand, heders = [], sections = [], onClickRow = () => {}, flag = false }) => {
  const meses = {
    color: "white",
    backgroundColor: "#0B5394",
    textAlign: "center",
    fontFamily: "Arial",
  };


  const RenderHeader = (header) => {
    if ((header?.text || header?.text === "") && header?.background) {
      return (
        <th style={{ ...meses, backgroundColor: header.background }}>
          {header.text}
        </th>
      );
    } else {
      return <th style={meses}>{header}</th>;
    }
  };


  return (
    <div className={expand}>
      <div className="card">
        <div className="card-header">
          <div className="card-body">
            <table className="table table-bordered table-sm">
              <thead>
                <tr>
                  {sections.map((index) => (
                    <th
                      style={{ ...meses, backgroundColor: index.background }}
                      colspan={index.colspan}
                    >
                      {index.text}
                    </th>
                  ))}
                </tr>
                <tr>{heders.map((index) => RenderHeader(index))}</tr>
              </thead>
              <tbody>
                {datos?.length &&
                  datos.map((item) => <RowOpti onClick={onClickRow} key={item.id} item={item} heders={flag ? heders : []} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
