import React from "react";
import PropTypes from "prop-types";
import * as moment from "moment";

const ItemStudent = ({
  student,
  index,
  onHandleSelectStudent,
  onHandleTranferClass,
}) => {
  const { id, name, birthday, gender, homeTown } = student;
  const birth = new Date(birthday);
  return (
    <tr
      key={id}
      onDoubleClick={onHandleSelectStudent}
      onClick={onHandleTranferClass}
    >
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{moment(birth).calendar()}</td>
      <td>{gender ? "Nam" : "Nữ"}</td>
      <td>{homeTown}</td>
    </tr>
  );
};

ItemStudent.propTypes = {
  index: PropTypes.number,
  student: PropTypes.object,
};

export default ItemStudent;
