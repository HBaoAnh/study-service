/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListStudentInClass from "./ListStudentInClass";
import YearSelect from "../../Shares/YearSelect";
import ClassSelect from "../../Shares/ClassSelect";
import * as _studentClassAction from "../../_actions/studentClass";
import * as _studentActions from "../../_actions/student";
import * as _modalFormAction from "../../_actions/modalForm";
import FormStudentClass from "./FormStudentClass";
import FormTransferClass from "./FormTransferCLass";

const StudentManager = (props) => {
  const [yearId, setYearId] = useState([0]);
  const [classId, setClassId] = useState([0]);
  const [studentTransfer, setStudentTransfer] = useState();

  const listStudentClass = useSelector(
    (state) => state.studentClass.listStudentclass
  );
  const studentEditing = useSelector(
    (state) => state.studentClass.studentEditing
  );

  const checkOpen = useSelector((state) => state.modalForm.openModal);
  const openTransfer = useSelector((state) => state.modalForm.openTransfer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (yearId && classId) {
      loadData();
    }
  }, [yearId, classId]);

  const loadData = () => {
    dispatch(_studentClassAction.getStudentClass(yearId, classId));
  };

  // set value khi chọn select năm
  const onYearChange = (value) => {
    setYearId(value);
  };
  // set value khi chọn select lớp
  const onClassChange = (value) => {
    setClassId(value);
  };
  /**
   * Hàm xoá
   * @param {object} data
   */
  const handleDelete = (data) => {
    if (confirm(`ban co chac muon xoa ${data.name}`)) {
      dispatch(_studentActions.deleteStudent(data));
    }
  };
  /**
   * Hàm showDialog thêm và sửa học sinh trong lớp
   * @param {object} dataEditing listStudent
   */
  const handleOpenForm = (dataEditing) => {
    dispatch(
      _studentClassAction.setStudentClassEditing(
        dataEditing ? dataEditing : null
      )
    );
    dispatch(_modalFormAction.showModal());
  };
  /**
   * Hàm showDialog chuyển lớp cho học sinh
   * @param {object} dataEditing listStudentClass
   */
  const onHandleTransferClass = () => {
    if (studentTransfer) {
      dispatch(
        _studentClassAction.setStudentClassEditing(
          studentTransfer ? studentTransfer : null
        )
      );
      dispatch(_modalFormAction.showModalTransfer());
    } else {
      alert("Vui lòng chọn học sinh cần xếp lớp");
    }
  };
  /**
   * Hàm save student
   * @param {object} data
   */
  const handleTransferClass = (dataStudent) => {
    setStudentTransfer(dataStudent);
  };

  const onSaveStudentInClass = (data) => {
    if (data.id === 0) {
      const dataPost = {
        ...data,
        yearId,
        classId,
      };
      dispatch(_studentClassAction.saveStudentClass(dataPost));
    } else {
      dispatch(_studentClassAction.saveStudentClass(data));
    }
  };
  /**
   * Hàm Chuyển lớp cho học sinh
   * @param {object} dataTransfer data khi Submit
   */
  const onSubmitTransferClass = (dataTransfer) => {
    console.log(dataTransfer);
    // dispatch(_studentClassAction.transferStudentClass(dataTransfer));
  };
  //return //
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
            Quản Lý Học Sinh
          </h1>
        </div>
        {/* danh sách học sinh theo lớp */}
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <label style={{ margin: "0px 10px" }}>Năm Học :</label>
          <YearSelect onChange={(s) => onYearChange(s)} />
          <label style={{ margin: "0px 10px" }}>Lớp Học :</label>
          <ClassSelect onChange={(s) => onClassChange(s)} />

          <div style={{ display: "inline-block", float: "right" }}>
            <button
              style={{ marginRight: 10 }}
              className="btn btn-success"
              onClick={onHandleTransferClass}
            >
              Xếp Lớp
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleOpenForm}
            >
              Thêm HS vào Lớp
            </button>
          </div>
          <hr />
          <div className="card">
            <div className="card-header">Danh Sách Học Sinh</div>
            <div className="card-body">
              <ListStudentInClass
                listStudentClass={listStudentClass}
                handleSelectStudent={handleOpenForm}
                handleTransferClass={handleTransferClass}
              />
            </div>
            <div
              style={{
                left: 0,
                right: 0,
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              {checkOpen ? (
                <FormStudentClass
                  open={checkOpen}
                  onHandleSubmit={(_data) => onSaveStudentInClass(_data)}
                  onHandleDelete={(_data) => handleDelete(_data)}
                  initialValues={studentEditing}
                />
              ) : null}
              {openTransfer ? (
                <FormTransferClass
                  openTransfer={openTransfer}
                  initialValues={studentEditing}
                  onHandleSubmit={onSubmitTransferClass}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentManager;
