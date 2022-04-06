import React from "react";

const ListStudent = ({ listStudent, onHandleStudent }) => {
  const renderStudent = () => {
    let xhtml = null;
    if (listStudent.length > 0) {
      xhtml = listStudent.map((o, index) => {
        return (
          <tr key={o.studentId} onClick={() => onHandleStudent(o)}>
            <td>{index + 1}</td>
            <td>{o.name}</td>
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
          <th>Họ và Tên</th>
        </tr>
      </thead>
      <tbody>{renderStudent()}</tbody>
    </table>
  );
};

export default ListStudent;
