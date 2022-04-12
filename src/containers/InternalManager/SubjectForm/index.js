import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Button, Form, Input } from "antd";
import helpField from "../../../Shares/HelpField";
const FormItem = Form.Item;
const renderInput = helpField(Input);

let SubjectForm = (props) => {
  const {
    isOpenSubject,
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
      title={initialValues.id ? "Cập nhập môn Học" : "Thêm môn Học"}
      visible={isOpenSubject}
      onCancel={handleCancel}
      onOk={handleSubmit(onHandleSubmit)}
      footer={null}
    >
      <Form
        labelCol={{ xs: { span: 24 }, sm: { span: 6 } }}
        wrapperCol={{ xs: { span: 24 }, sm: { span: 14 } }}
      >
        <Field label="Tên Môn" name="nameSubject" component={renderInput} />
        <Field label="Số Tiết" name="lesson" component={renderInput} />
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

SubjectForm = reduxForm({
  form: "CLASS_FORM",
  // validate: validateClass,
})(SubjectForm);

export default SubjectForm;
