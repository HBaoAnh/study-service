import React from "react";

const ClassList = ({ ltClass, onHandleSelect }) => {
  const renderClassItem = () => {
    let xhtml = null;
    if (ltClass) {
      xhtml = ltClass.map((o, index) => {
        return (
          <tr key={o.id} onDoubleClick={() => onHandleSelect(o)}>
            <td>{index + 1}</td>
            <td>{o.name}</td>
            <td>{o.grade}</td>
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
          <th>Tên Lớp</th>
          <th>Khối</th>
        </tr>
      </thead>
      <tbody>
        {
          //item
          renderClassItem()
        }
      </tbody>
    </table>
  );
};

export default ClassList;
