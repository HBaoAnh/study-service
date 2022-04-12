import React from "react";
import { Form, Modal, Button, Input } from "antd";
import { Field, reduxForm } from "redux-form";
import { validateYear } from "../../../Shares/validate";
import _helpField from "../../../Shares/HelpField";

const FormItem = Form.Item;
const renderInput = _helpField(Input);

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
      title={initialValues.id ? "Cập nhập năm học" : "Thêm năm học"}
      visible={isOpenYear}
      onOk={handleSubmit(onHandleSubmit)}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        labelCol={{ xs: { span: 24 }, sm: { span: 6 } }}
        wrapperCol={{ xs: { span: 24 }, sm: { span: 14 } }}
      >
        <Field
          style={{}}
          label="Từ năm"
          name="fromYear"
          component={renderInput}
          type="number"
        />
        <Field
          label="Đến năm"
          name="toYear"
          component={renderInput}
          type="number"
        />
        <FormItem>
          <Button key="back" onClick={handleCancel} style={{ float: "right" }}>
            huỷ bỏ
          </Button>
          <Button
            style={{ float: "right", margin: "0px 10px" }}
            disabled={invalid || submitting}
            key="submit"
            type="primary"
            onClick={handleSubmit(onHandleSubmit)}
          >
            Lưu lại
          </Button>
          {initialValues.id ? (
            <Button
              style={{ float: "right" }}
              key="button"
              type="primary"
              onClick={() => onHandleDelete(initialValues)}
            >
              Xoá
            </Button>
          ) : null}
        </FormItem>
      </Form>
    </Modal>
  );
};

YearForm = reduxForm({
  form: "YEAR_FORM",
  validate: validateYear,
})(YearForm);

export default YearForm;
