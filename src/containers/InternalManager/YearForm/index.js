import React from "react";
import { Modal, Button, Row } from "antd";
import { Field, reduxForm } from "redux-form";
import renderTextField from "../../../Shares/FormHelper/TextField";
import { validateYear } from "../../../Shares/FormHelper/validate";

let YearForm = (props) => {
  const {
    isOpenYear,
    handleCancel,
    handleSubmit,
    onHandleSubmit,
    onHandleDelete,
    initialValues,
    invalid,
    submitting,
  } = props;
  return (
    <Modal
      title="Năm học"
      visible={isOpenYear}
      onOk={handleSubmit(onHandleSubmit)}
      onCancel={handleCancel}
      footer={null}
    >
      <Row>
        <Field
          style={{ width: "100%", marginBottom: "20px" }}
          label="Từ năm"
          name="fromYear"
          component={renderTextField}
          type="number"
        />
      </Row>
      <Row>
        <Field
          style={{ width: "100%", marginBottom: "20px" }}
          label="Đến năm"
          name="toYear"
          component={renderTextField}
          type="number"
        />
      </Row>
      <Button
        key="button"
        type="primary"
        onClick={() => onHandleDelete(initialValues)}
      >
        Xoá
      </Button>
      <Button
        disabled={invalid || submitting}
        key="submit"
        type="primary"
        onClick={handleSubmit(onHandleSubmit)}
      >
        Lưu lại
      </Button>
      <Button key="back" onClick={handleCancel}>
        huỷ bỏ
      </Button>
    </Modal>
  );
};

YearForm = reduxForm({
  form: "YEAR_FORM",
  validate: validateYear,
})(YearForm);

export default YearForm;
