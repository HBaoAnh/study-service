import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import _helpField from "../../../Shares/HelpField";
import { Button, Modal, Input, Form, Select } from "antd";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import * as _modalFormActions from "../../../_actions/modalForm";
import { useDispatch } from "react-redux";
import { getAllSubjectAPI } from "../../../_apis/subjectAPI";
import { validateScore } from "../../../Shares/validate";

const { Option } = Select;

const FormItem = Form.Item;
const renderInput = _helpField(Input);
const renderSelect = _helpField(Select);

let FormScore = (props) => {
  const { openForm, initialValues,handleSubmit, onHandleSubmit, invalid, submitting } = props;
  const [subjects, setSubjects] = useState([]);

  /**
   * Hiển thị 1 lần
   */
  useEffect(() => {
    getDataSubjects();
    return () => {
      setSubjects([]);
    };
  }, []);
  const dispatch = useDispatch();
  /**
   * Hàm get môn học trực tiếp từ API
   */
  const getDataSubjects = async () => {
    const { status, data } = await getAllSubjectAPI();
    if (status === 200) {
      setSubjects(data.data);
    } else {
      setSubjects([]);
    }
  };
  /**
   * Hàm Đóng form
   */
  const onHandleClose = () => {
    dispatch(_modalFormActions.hideModal());
  };
  /**
   * Hàm render MenuItem của Select control
   * @returns MenuItem
   */
  const renderOptionsSubjects = () => {
    let xhtml = null;
    if (subjects.length > 0) {
      xhtml = subjects.map((o) => {
        return (
          <Option key={o.id} value={o.id}>
            {o.nameSubject}
          </Option>
        );
      });
    }
    return xhtml;
  };
  return (
    <Modal
      visible={openForm}
      title={initialValues.id ? "Cập nhập điểm học sinh" : "Thêm điểm học sinh"}
      onOk={handleSubmit(onHandleSubmit)}
      onCancel={onHandleClose}
      footer={null}
    >
      <Form
        labelCol={{ xs: { span: 24 }, sm: { span: 6 } }}
        wrapperCol={{ xs: { span: 24 }, sm: { span: 14 } }}
      >
        <Field
          disabled
          label="Môn học"
          name="subjectId"
          component={renderSelect}
        >
          {renderOptionsSubjects()}
        </Field>
        <Field
          label="Điểm Miệng"
          name="scoreX1"
          type="number"
          component={renderInput}
        />
        <Field
          label="Điểm 15 Phút"
          name="score15Min"
          type="number"
          component={renderInput}
        />
        <Field
          label="Điểm Hệ Số 2"
          name="scoreX2"
          type="number"
          component={renderInput}
        />
        <Field
          label="Điểm Hệ Số 3"
          name="scoreX3"
          type="number"
          component={renderInput}
        />
        <FormItem>
          <Button style={{ float: "right" }} onClick={onHandleClose}>
            Thoát
          </Button>
          <Button
            style={{ float: "right", margin:"0px 10px" }}
            disabled={invalid || submitting}
            key="submit"
            type="primary"
            onClick={handleSubmit(onHandleSubmit)}
          >
            Lưu lại
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
};

FormScore.propTypes = {
  open: PropTypes.bool,
  onHandleClose: PropTypes.func,
};

FormScore = reduxForm({
  form: "Form_Score",
  validate: validateScore,
})(FormScore);

export default FormScore;
