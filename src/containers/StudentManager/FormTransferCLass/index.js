import React from "react";
import { useDispatch } from "react-redux";
import * as _formActions from "../../../_actions/modalForm";
import { reduxForm, Field } from "redux-form";
import { Button, Modal, Input, Form } from "antd";
import helpField from "../../../Shares/HelpField";
import YearSelectField from "../../../Shares/YearSelect/Field";
import ClassSelectField from "../../../Shares/ClassSelect/Field";

const FormItem = Form.Item;
const renderInput = helpField(Input);

let FormTransferClass = (props) => {
  const { openTransfer, handleSubmit, onHandleSubmit, initialValues } = props;
  const dispatch = useDispatch();

  /**
   * Hàm đóng form
   */
  const onHandleClose = () => {
    dispatch(_formActions.hideModal());
  };

  return (
    <Modal
      visible={openTransfer}
      title={initialValues.id ? "Xếp Lớp Học sinh" : ""}
      onOk={handleSubmit(onHandleSubmit)}
      onCancel={onHandleClose}
      footer={null}
    >
      <Form
        labelCol={{ xs: { span: 24 }, sm: { span: 6 } }}
        wrapperCol={{ xs: { span: 24 }, sm: { span: 14 } }}
      >
        <Field label="Năm Học" name="yearId" component={YearSelectField} />
        <Field label="Lớp Học" name="classId" component={ClassSelectField} />
        <Field disabled label="Họ và Tên" name="name" component={renderInput} />
        <FormItem>
          <Button key="back" onClick={onHandleClose} style={{ float: "right" }}>
            Huỷ Bỏ
          </Button>
          <Button
            style={{ float: "right", marginRight: "10px" }}
            key="submit"
            type="primary"
            onClick={handleSubmit(onHandleSubmit)}
          >
            Lưu Lại
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
};

FormTransferClass = reduxForm({
  form: "FORM_TRANSFER_CLASS",
})(FormTransferClass);
export default FormTransferClass;
