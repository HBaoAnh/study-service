import * as _typeActions from '../_constants/student';

export const deleteStudent = (data) => {
    return {
      type: _typeActions.DELETE_STUDENT,
      payload: data,
    };
  };
  
  export const deleteStudentSuccess = (studentId) => {
    return {
      type: _typeActions.DELETE_STUDENT_SUC,
      payload: {
        studentId,
      },
    };
  };
  