import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import YearList from "./YearList";
import SubjectList from "./SubjectList";
import ClassList from "./ClassList";
import YearForm from "./YearForm";
import ClassForm from "./ClassForm";
import * as _yearActions from "../../_actions/year";
import * as _classActions from "../../_actions/class";
import * as _subActions from "../../_actions/subject";
import * as _modalActions from "../../_actions/modalForm";
import SubjectForm from "./SubjectForm";

const InternalManager = (props) => {
  const isOpenYear = useSelector((state) => state.modalForm.isOpenYear);
  const isOpenClass = useSelector((state) => state.modalForm.isOpenClass);
  const isOpenSubject = useSelector((state) => state.modalForm.isOpenSubject);
  const ltYear = useSelector((state) => state.year.listYear);
  const ltClass = useSelector((state) => state.class.listClass);
  const ltSubject = useSelector((state) => state.subject.listSubject);
  const yearEditing = useSelector((state) => state.year.yearEditing);
  const classEditing = useSelector((state) => state.class.classEditing);
  const subjectEditing = useSelector((state) => state.subject.subjectEditing);
  const dispatch = useDispatch();

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = () => {
    dispatch(_yearActions.getAllYear());
    dispatch(_classActions.getAllClass());
    dispatch(_subActions.getAllSubject());
  };

  const onHandleOpenYear = (dataEditing) => {
    dispatch(_yearActions.setYearEditing(dataEditing ? dataEditing : null));
    dispatch(_modalActions.showModalYear());
  };
  const onHandleOpenClass = (dataEditing) => {
    dispatch(_classActions.setClassEditing(dataEditing ? dataEditing : null));
    dispatch(_modalActions.showModalClass());
  };
  const onHandleOpenSubject = (dataEditing) => {
    dispatch(_subActions.setSubjectEditing(dataEditing ? dataEditing : null));
    dispatch(_modalActions.showModalSubject());
  };

  const handleClose = () => {
    dispatch(_modalActions.hideModal());
  };

  const onSaveYear = (dataYear) => {
    dispatch(_yearActions.saveYear(dataYear));
  };
  const onSaveClass = (dataClass) => {
    dispatch(_classActions.saveClass(dataClass));
  };
  const onSaveSubject = (dataSubject) => {
    dispatch(_subActions.saveSubject(dataSubject));
  };

  const onDeleteYear = (dataYear) => {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm(
        `ban co muon xoa nam hoc ${dataYear.fromYear}-${dataYear.toYear} ?`
      )
    ) {
      dispatch(_yearActions.deleteYear(dataYear.id));
    }
  };
  const onDeleteClass = (dataClass) => {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm(`ban co muon xoa lop hoc ${dataClass.name} ?`)
    ) {
      dispatch(_classActions.deleteClass(dataClass.id));
    }
  };

  const onDeleteSubject = (dataSubject) => {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm(`ban co muon xoa lop hoc ${dataSubject.name} ?`)
    ) {
      dispatch(_subActions.deleteSubject(dataSubject.id));
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
            Quản lý nội bộ
          </h1>
        </div>
        <div className="col-xl-4">
          <button
            style={{ marginBottom: "10px" }}
            type="button"
            className="btn btn-primary"
            onClick={onHandleOpenYear}
          >
            <AddIcon fontSize="small" />
          </button>
          <div className="card">
            <div className="card-header">Danh sách năm học</div>
            <div className="card-body">
              <YearList
                ltYear={ltYear}
                onHandleSelect={(_data) => onHandleOpenYear(_data)}
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <button
            style={{ marginBottom: "10px" }}
            type="button"
            className="btn btn-primary"
            onClick={onHandleOpenClass}
          >
            <AddIcon fontSize="small" />
          </button>
          <div className="card">
            <div className="card-header">Danh sách lớp học</div>
            <div className="card-body">
              <ClassList
                ltClass={ltClass}
                onHandleSelect={(_data) => onHandleOpenClass(_data)}
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <button
            style={{ marginBottom: "10px" }}
            type="button"
            className="btn btn-primary"
            onClick={onHandleOpenSubject}
          >
            <AddIcon fontSize="small" />
          </button>
          <div className="card">
            <div className="card-header">Danh sách môn học</div>
            <div className="card-body">
              <SubjectList
                ltSubject={ltSubject}
                onHandleSelect={(_data) => onHandleOpenSubject(_data)}
              />
            </div>
          </div>
        </div>
        {isOpenYear ? (
          <YearForm
            isOpenYear={isOpenYear}
            onHandleSubmit={onSaveYear}
            onHandleDelete={(_data) => onDeleteYear(_data)}
            handleCancel={handleClose}
            initialValues={yearEditing}
          />
        ) : null}
        {isOpenClass ? (
          <ClassForm
            isOpenClass={isOpenClass}
            onHandleSubmit={onSaveClass}
            onHandleDelete={(_data) => onDeleteClass(_data)}
            handleCancel={handleClose}
            initialValues={classEditing}
          />
        ) : null}
        {isOpenSubject ? (
          <SubjectForm
            isOpenSubject={isOpenSubject}
            onHandleSubmit={onSaveSubject}
            onHandleDelete={(_data) => onDeleteSubject(_data)}
            handleCancel={handleClose}
            initialValues={subjectEditing}
          />
        ) : null}
      </div>
    </div>
  );
};

export default InternalManager;
