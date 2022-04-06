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
          <th>Môn Học</th>
          <th>Điểm Miệng</th>
          <th>Điểm 15 Phút</th>
          <th>Điểm Hệ Số 2</th>
          <th>Điểm Hệ Số 3</th>
          <th>Điểm TB</th>
        </tr>
      </thead>
      <tbody>
        {renderScores()}
        {i > 1 ? (
          <tr style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}>
            <td colSpan={5}>Xếp Loại: {(S/i) >= 8 ? "Giỏi" : (S/i) >= 6.5 ? "Khá" : (S/i) >= 5 ? "Trung Bình" : "Yếu"} </td>
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
