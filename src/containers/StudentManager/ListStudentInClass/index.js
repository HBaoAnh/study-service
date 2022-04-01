import React from "react";

const ListStudentInClass = (props) => {
  const { listStudentClass, onHandleEdit, onHandleDelete} = props;
  const renderStudent = () => {
    let xhtml = null;
    if (listStudentClass) {
      xhtml = listStudentClass.map((student, index) => {
        const { id, name, birthday, gender, homeTown } = student;
        return (
          <tr key={id}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{birthday}</td>
            <td>{gender ? "Nam" : "Nữ"}</td>
            <td>{homeTown}</td>
            <td>
              <button
                type="button"
                className="btn btn-xs btn-warning"
                onClick={() => onHandleEdit(student)}
              >
                Sửa
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-xs btn-danger"
                onClick={() => onHandleDelete(student)}
              >
                Xoá
              </button>
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
