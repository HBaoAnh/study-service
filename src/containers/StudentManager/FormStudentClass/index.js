import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as _formActions from "../../../_actions/modalForm";
import { validateStudent } from "../../../Shares/FormHelper/validate";
import { Button, Modal, Input, DatePicker, Form, Radio } from "antd";
import helpField from "../../../Shares/HelpField";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

const renderInput = helpField(Input);
const renderDatePicker = helpField(DatePicker);
const renderRadioGroup = helpField(RadioGroup);
const renderTextArea = helpField(TextArea);

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 6,
    },
  },
};

let FormStudentClass = (props) => {
  const {
    open,
    onHandleSubmit,
    onHandleDelete,
    handleSubmit,
    initialValues,
    invalid,
    submitting,
    pristine,
    reset,
  } = props;
  const dispatch = useDispatch();
  /**
   * Hàm đóng form
   */
  const onHandleClose = () => {
    dispatch(_formActions.hideModal());
  };
  return (
    <Modal
      visible={open}
      title="Title"
      onOk={handleSubmit(onHandleSubmit)}
      onCancel={onHandleClose}
      footer={null}
    >
      <Form>
        <Field
          id="name"
          placeholder="Họ và Tên"
          label="Họ và Tên"
          name="name"
          component={renderInput}
        />
        <Field
          placeholder="Ngày Sinh"
          label="Ngày Sinh"
          name="birthday"
          component={renderDatePicker}
          onFocus={(e) => e.preventDefault()}
          onBlur={(e) => e.preventDefault()}
        />
        <Field
          id="gender"
          placeholder="Giới Tính"
          label="Giới Tính"
          name="gender"
          component={renderRadioGroup}
        >
          <Radio value={true}>Nam</Radio>
          <Radio value={false}>Nữ</Radio>
        </Field>
        <Field
          id="homeTown"
          placeholder="Nơi Sinh"
          label="Nơi Sinh"
          name="homeTown"
          component={renderTextArea}
        />
        <FormItem {...tailFormItemLayout}>
          {initialValues.id ? (
            <Button
              key="button"
              type="primary"
              onClick={() => onHandleDelete(initialValues)}
            >
              Xoá
            </Button>
          ) : (
            <Button disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </Button>
          )}

          <Button
          style={{margin: "0px 10px"}}
            disabled={invalid || submitting}
            key="submit"
            type="primary"
            onClick={handleSubmit(onHandleSubmit)}
          >
            Lưu lại
          </Button>
          <Button key="back" onClick={onHandleClose}>
            huỷ bỏ
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
};

FormStudentClass.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
};

FormStudentClass = reduxForm({
  form: "FORM_STUDENT_CLASS",
  validate: validateStudent,
})(FormStudentClass);

export default FormStudentClass;
