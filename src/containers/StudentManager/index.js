/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListStudentInClass from "./ListStudentInClass";
import YearSelect from "../../Shares/YearSelect";
import ClassSelect from "../../Shares/ClassSelect";
import * as _studentClassAction from "../../_actions/studentClass";
import * as _modalFormAction from "../../_actions/modalForm";
import FormStudentClass from "./FormStudentClass";
import { Link } from "react-router-dom";
const StudentManager = (props) => {
  const [yearId, setYearId] = useState("");
  const [classId, setClassId] = useState("");

  const listStudentClass = useSelector(
    (state) => state.studentClass.listStudentclass
  );
  const studentEditing = useSelector(
    (state) => state.studentClass.studentEditing
  );

  const checkOpen = useSelector((state) => state.modalForm.openModal);
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
  const handleDelete = (data) => {
    if (confirm(`ban co chac muon xoa ${data.name}`)) {
      const dataDelete = {
        ...data,
        yearId,
        classId,
      };
      dispatch(_studentClassAction.deleteStudentClass(dataDelete));
    }
  };
  const handleOpenForm = (dataEditing) => {
    dispatch(
      _studentClassAction.setStudentClassEditing(
        dataEditing ? dataEditing : null
      )
    );
    dispatch(_modalFormAction.showModal());
  };

  const onSubmit = (data) => {
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
          <YearSelect onChange={(s) => onYearChange(s)} />
          <ClassSelect onChange={(s) => onClassChange(s)} />
          <div style={{ display: "inline-block", float: "right" }}>
            <Link
              to="/transfer-class"
              type="button"
              className="btn btn-primary"
            >
              Xếp Lớp
            </Link>
            &nbsp;
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleOpenForm}
            >
              Thêm HS vào Lớp
            </button>
          </div>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h5>Danh Sách Học Sinh</h5>
            </div>
            <div className="panel-body">
              <ListStudentInClass
                listStudentClass={listStudentClass}
                onHandleEdit={handleOpenForm}
                onHandleDelete={handleDelete}
              />
            </div>
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
                onSubmit={(_data) => onSubmit(_data)}
                initialValues={studentEditing}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentManager;
