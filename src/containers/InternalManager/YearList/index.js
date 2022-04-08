import React from "react";

const YearList = ({ ltYear, onHandleSelect }) => {
  const renderItem = () => {
    let xhtml = null;
    if (ltYear) {
      xhtml = ltYear.map((o, index) => {
        return (
          <tr key={o.id} onDoubleClick={() => onHandleSelect(o)}>
            <td>{index + 1}</td>
            <td>{o.fromYear}</td>
            <td>{o.toYear}</td>
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
          <th>Stt</th>
          <th>Từ Năm</th>
          <th>Đến Năm</th>
        </tr>
      </thead>
      <tbody>{renderItem()}</tbody>
    </table>
  );
};

export default YearList;
