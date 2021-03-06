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
import AutorenewIcon from "@mui/icons-material/Autorenew";

const ScoreManager = (props) => {
  const [yearId, setYearId] = useState([0]);
  const [classId, setClassId] = useState([0]);
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
  /**
   * Hàm show dialog form sửa điểm
   * @param {object} dataEdit
   */
  const handleOpenForm = (dataEdit) => {
    if (stuId) {
      dispatch(_scoreActions.setScoreEditing(dataEdit));
      dispatch(_modalFormActions.showModal());
    } else {
      alert("vui lòng chọn học sinh cần chỉnh sửa điểm");
    }
  };
  /**
   * Hàm Save điểm với dữ liệu trên form
   * @param {object} dataSubmit dữ liệu đc submit
   */
  const handleSaveScore = (dataSubmit) => {
    const dataSave = {
      ...dataSubmit,
      yearId,
      classId,
      studentId: stuId,
    };
    dispatch(_scoreActions.saveScoreStudent(dataSave));
  };
  /**
   * Hàm gán sẵn môn và điểm
   */
  const handleAddScore = () => {
    const data = [];
    if (stuId) {
      const dataAdd = {
        ...data,
        yearId,
        classId,
        studentId: stuId,
      };
      dispatch(_scoreActions.addScoreBegin(dataAdd));
    } else {
      alert("vui lòng chọn học sinh cần chỉnh sửa điểm");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
            Quản Lý Điểm Của Học Sinh
          </h1>
        </div>
        <div>
          <label style={{ margin: "0px 10px" }}>Năm Học :</label>
          <YearSelect onChange={(s) => onYearChange(s)} />
          <label style={{ margin: "0px 10px" }}>Lớp Học :</label>
          <ClassSelect onChange={(s) => onClassChange(s)} />
          {/* button add score */}
          <button
            style={{ float: "right" }}
            type="button"
            className="btn btn-sm btn-primary"
            onClick={handleAddScore}
          >
            <AutorenewIcon />
          </button>
          <hr />
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="card">
            <div className="card-header">DANH SÁCH HỌC SINH</div>
            <div className="card-body">
              {/* danh sach hoc sinh */}
              <ListStudent
                listStudent={listStudent}
                onHandleStudent={(dataHandle) => handleStudent(dataHandle)}
              />
            </div>
          </div>
        </div>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div className="card">
            <div className="card-header">BẢNG ĐIỂM</div>
            <div className="card-body">
              {/* danh sach diem */}
              <ListScore
                scores={scores}
                onHandleOpenForm={(_dataEdit) => handleOpenForm(_dataEdit)}
              />
            </div>
          </div>
        </div>
        {openForm ? (
          <FormScore
            openForm={openForm}
            initialValues={scoreEditing}
            onHandleSubmit={(_dataSubmit) => handleSaveScore(_dataSubmit)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ScoreManager;
