import React from "react";
import ItemStudent from "../ItemStudent";
const ListStudentInClass = (props) => {
  const {
    listStudentClass,
    handleSelectStudent,
    handleTransferClass,
  } = props;
  const renderStudent = () => {
    let xhtml = null;
    if (listStudentClass) {
      xhtml = listStudentClass.map((student, index) => {
        return (
          <ItemStudent
            key={student.id}
            index={index}
            student={student}
            onHandleSelectStudent={() => handleSelectStudent(student)}
            onHandleTranferClass={() => handleTransferClass(student)}
          />
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
          <th>Name</th>
          <th>Birthday</th>
          <th>Gender</th>
          <th>HomeTown</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{renderStudent()}</tbody>
    </table>
  );
};

export default ListStudentInClass;
