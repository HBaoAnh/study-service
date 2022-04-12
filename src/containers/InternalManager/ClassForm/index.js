import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Button, Form, Input } from "antd";
import helpField from "../../../Shares/HelpField";
import { validateClass } from "../../../Shares/validate";
const FormItem = Form.Item;
const renderInput = helpField(Input);

let ClassForm = (props) => {
  const {
    isOpenClass,
    handleCancel,
    handleSubmit,
    onHandleSubmit,
    onHandleDelete,
    invalid,
    submitting,
    initialValues,
  } = props;
  return (
    <Modal
      title={initialValues.id ? "Cập nhập lớp học" : "Thêm lớp học"}
      visible={isOpenClass}
      onCancel={handleCancel}
      onOk={handleSubmit(onHandleSubmit)}
      footer={null}
    >
      <Form
        labelCol={{ xs: { span: 24 }, sm: { span: 6 } }}
        wrapperCol={{ xs: { span: 24 }, sm: { span: 14 } }}
      >
        <Field label="Tên Lớp" name="name" component={renderInput} />
        <Field label="Tên Khối" name="grade" component={renderInput} />
        <FormItem>
          <Button onClick={handleCancel} style={{ float: "right" }}>
            Huỷ Bỏ
          </Button>

          <Button
            disabled={invalid || submitting}
            type="primary"
            onClick={handleSubmit(onHandleSubmit)}
            style={{ float: "right", margin: "0px 10px" }}
          >
            Lưu lại
          </Button>
          {initialValues.id ? (
            <Button
              type="primary"
              danger
              onClick={() => onHandleDelete(initialValues)}
              style={{ float: "right" }}
            >
              Xoá
            </Button>
          ) : null}
        </FormItem>
      </Form>
    </Modal>
  );
};

ClassForm = reduxForm({
  form: "CLASS_FORM",
  validate: validateClass,
})(ClassForm);

export default ClassForm;
