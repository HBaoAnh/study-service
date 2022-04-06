/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ListStudent from "./ListStudent";
import ListScore from "./ListScore";
import { useDispatch, useSelector } from "react-redux";
import * as _studentClassAction from "../../_actions/studentClass";
import * as _scoreActions from "../../_actions/score";
import * as _modalFormActions from "../../_actions/modalForm";
import YearSelect from "../../Shares/YearSelect";
import ClassSelect from "../../Shares/ClassSelect";
import FormScore from "./FormScore";

const ScoreManager = (props) => {
  const [yearId, setYearId] = useState([-1]);
  const [classId, setClassId] = useState([-1]);
  const [stuId, setStuId] = useState();
  const listStudent = useSelector(
    (state) => state.studentClass.listStudentclass
  );
  const scoreEditing = useSelector((state) => state.score.scoreEditing);
  const scores = useSelector((state) => state.score.scores);
  const openForm = useSelector((state) => state.modalForm.openModal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (yearId && classId) {
      loadData();
    }
  }, [yearId, classId]);

  // set value khi chọn select năm

  const onYearChange = (value) => {
    setYearId(value);
  };
  // set value khi chọn select lớp
  const onClassChange = (value) => {
    setClassId(value);
  };

  const loadData = () => {
    dispatch(_studentClassAction.getStudentClass(yearId, classId));
  };
  /**
   * Hàm show điểm của học sinh theo studentId
   * @param {number} studentId
   */
  const handleStudent = (dataHandle) => {
    dispatch(_scoreActions.getScoreByStudentId(dataHandle));
    setStuId(dataHandle.studentId);
  };
  const handleOpenForm = (dataEdit) => {
    if (stuId) {
      dispatch(_scoreActions.setScoreEditing(dataEdit));
      dispatch(_modalFormActions.showModal());
    } else {
      alert("vui lòng chọn học sinh cần sửa điểm");
    }
  };
  const HandleSaveScore = (dataSubmit) => {
    const dataSave = {
      ...dataSubmit,
      yearId,
      classId,
      stuId,
    };
    dispatch(_scoreActions.saveScoreStudent(dataSave));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
            Quản Lý Điểm Của Học Sinh
          </h1>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <YearSelect onChange={(s) => onYearChange(s)} />
            <ClassSelect onChange={(s) => onClassChange(s)} />
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">DANH SÁCH HỌC SINH</h3>
              </div>
              <div className="panel-body">
                {/* danh sach hoc sinh */}
                <ListStudent
                  listStudent={listStudent}
                  onHandleStudent={(dataHandle) => handleStudent(dataHandle)}
                />
              </div>
            </div>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">BẢNG ĐIỂM</h3>
              </div>
              <div className="panel-body">
                {/* danh sach diem */}
                <ListScore
                  scores={scores}
                  onHandleOpenForm={(_dataEdit) => handleOpenForm(_dataEdit)}
                />
              </div>
            </div>
          </div>
        </div>
        {openForm ? (
          <FormScore
            openForm={openForm}
            initialValues={scoreEditing}
            onHandleSubmit={(_dataSubmit) => HandleSaveScore(_dataSubmit)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ScoreManager;
