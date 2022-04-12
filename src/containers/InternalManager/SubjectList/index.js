import React from "react";

const SubjectList = ({ ltSubject, onHandleSelect }) => {
  const renderSubjectItem = () => {
    let xhtml = null;
    if (ltSubject) {
      xhtml = ltSubject.map((o, idx) => {
        return (
          <tr key={o.id} onDoubleClick={() => onHandleSelect(o)}>
            <td>{idx + 1}</td>
            <td>{o.nameSubject}</td>
            <td>{o.lesson}</td>
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
          <th>Tên Môn</th>
          <th>Số Tiết</th>
        </tr>
      </thead>
      <tbody>
        {
          //item
          renderSubjectItem()
        }
      </tbody>
    </table>
  );
};

export default SubjectList;
