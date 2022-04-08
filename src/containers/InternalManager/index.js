import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import YearList from "./YearList";
import SubjectList from "./SubjectList";
import ClassList from "./ClassList";
import YearForm from "./YearForm";
import * as _yearActions from "../../_actions/year";
import * as _modalActions from "../../_actions/modalForm";
import { useDispatch, useSelector } from "react-redux";

const InternalManager = (props) => {
  const isOpenYear = useSelector((state) => state.modalForm.isOpenYear);
  const ltYear = useSelector((state) => state.year.listYear);
  const yearEditing = useSelector((state) => state.year.yearEditing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_yearActions.getAllYear());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHanleOpenYear = (dataEditing) => {
    dispatch(_yearActions.setYearEditing(dataEditing ? dataEditing : null));
    dispatch(_modalActions.showModalYear());
  };
  const onHanleOpenClass = () => {};
  const onHanleOpenSubject = () => {};
  const handleClose = () => {
    dispatch(_modalActions.hideModalYear());
  };

  const onSaveYear = (dataSubmit) => {
    dispatch(_yearActions.saveYear(dataSubmit));
  };
  const onDeleteYear = (data) => {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm(`ban co muon xoa nam hoc ${data.fromYear}-${data.toYear} ?`)
    ) {
      dispatch(_yearActions.deleteYear(data.id));
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
            onClick={onHanleOpenYear}
          >
            <AddIcon fontSize="small" />
          </button>
          <div className="card">
            <div className="card-header">Danh sách năm học</div>
            <div className="card-body">
              <YearList
                ltYear={ltYear}
                onHandleSelect={(_data) => onHanleOpenYear(_data)}
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <button
            style={{ marginBottom: "10px" }}
            type="button"
            className="btn btn-primary"
            onClick={onHanleOpenClass}
          >
            <AddIcon fontSize="small" />
          </button>
          <div className="card">
            <div className="card-header">Danh sách lớp học</div>
            <div className="card-body">
              <ClassList />
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <button
            style={{ marginBottom: "10px" }}
            type="button"
            className="btn btn-primary"
            onClick={onHanleOpenSubject}
          >
            <AddIcon fontSize="small" />
          </button>
          <div className="card">
            <div className="card-header">Danh sách môn học</div>
            <div className="card-body">
              <SubjectList />
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
      </div>
    </div>
  );
};

export default InternalManager;
