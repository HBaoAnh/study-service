import React from "react";

const ListScore = ({ scores, onHandleOpenForm }) => {
  const renderScores = () => {
    let xhtml = null;
    if (scores) {
      xhtml = scores.map((o) => {
        return (
          <tr key={o.id} onClick={() => onHandleOpenForm(o)}>
            <td style={{ color: "blue", fontWeight: "bold" }}>
              {o.nameSubject}
            </td>
            <td
              style={
                o.scoreX1 < 5 ? { color: "red", fontWeight: "bold" } : null
              }
            >
              {o.scoreX1}
            </td>
            <td
              style={
                o.score15Min < 5 ? { color: "red", fontWeight: "bold" } : null
              }
            >
              {o.score15Min}
            </td>
            <td
              style={
                o.scoreX2 < 5 ? { color: "red", fontWeight: "bold" } : null
              }
            >
              {o.scoreX2}
            </td>
            <td
              style={
                o.scoreX3 < 5 ? { color: "red", fontWeight: "bold" } : null
              }
            >
              {o.scoreX3}
            </td>
            <td
              style={
                o.average < 5 ? { color: "red", fontWeight: "bold" } : null
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
    <table className="table table-hover">
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
        <tr>
          <td style={{ textAlign: "center" }} colSpan={6}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onHandleOpenForm}
            >
              Thêm
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ListScore;
