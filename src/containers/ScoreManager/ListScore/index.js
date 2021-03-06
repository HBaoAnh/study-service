import React from "react";

const ListScore = ({ scores, onHandleOpenForm }) => {
  let S = 0;
  let i = 1;

  const renderScores = () => {
    let xhtml = null;
    if (scores) {
      xhtml = scores.map((o, index) => {
        S += o.average;
        i = index + 1;
        return (
          <tr key={o.id} onDoubleClick={() => onHandleOpenForm(o)}>
            <td style={{ color: "blue", fontWeight: "bold" }}>
              {o.nameSubject}
            </td>
            <td
              style={
                o.scoreX1 < 5
                  ? { color: "red", fontWeight: "bold" }
                  : o.scoreX1 === 10
                  ? { color: "green", fontWeight: "bold" }
                  : null
              }
            >
              {o.scoreX1}
            </td>
            <td
              style={
                o.score15Min < 5
                  ? { color: "red", fontWeight: "bold" }
                  : o.score15Min === 10
                  ? { color: "green", fontWeight: "bold" }
                  : null
              }
            >
              {o.score15Min}
            </td>
            <td
              style={
                o.scoreX2 < 5
                  ? { color: "red", fontWeight: "bold" }
                  : o.scoreX2 === 10
                  ? { color: "green", fontWeight: "bold" }
                  : null
              }
            >
              {o.scoreX2}
            </td>
            <td
              style={
                o.scoreX3 < 5
                  ? { color: "red", fontWeight: "bold" }
                  : o.scoreX3 === 10
                  ? { color: "green", fontWeight: "bold" }
                  : null
              }
            >
              {o.scoreX3}
            </td>
            <td
              style={
                o.average < 5
                  ? { color: "red", fontWeight: "bold" }
                  : o.average === 10
                  ? { color: "green", fontWeight: "bold" }
                  : null
              }
            >
              {o.average}
            </td>
          </tr>
        );
      });
    }
    return xhtml;
  };
  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th>M??n H???c</th>
          <th>??i???m Mi???ng</th>
          <th>??i???m 15 Ph??t</th>
          <th>??i???m H??? S??? 2</th>
          <th>??i???m H??? S??? 3</th>
          <th>??i???m TB</th>
        </tr>
      </thead>
      <tbody>
        {renderScores()}
        {i > 1 ? (
          <tr style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}>
            <td colSpan={5}>X???p Lo???i: {(S/i) >= 8 ? "Gi???i" : (S/i) >= 6.5 ? "Kh??" : (S/i) >= 5 ? "Trung B??nh" : "Y???u"} </td>
            <td >
              {(S / i).toFixed(2)}
            </td>
          </tr>
        ) : null}
      </tbody>
    </table>
  );
};

export default ListScore;
