import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as _formActions from "../../../_actions/modalForm";
import { reduxForm, Field } from "redux-form";
import { getAllClassAPI } from "../../../_apis/classAPI";
import { getAllYearAPI } from "../../../_apis/yearAPI";
import { Button, Modal, Input, Select, Form } from "antd";
import helpField from "../../../Shares/HelpField";

const { Option } = Select;

const FormItem = Form.Item;
const renderInput = helpField(Input);
const renderSelect = helpField(Select);

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
let FormTransferClass = (props) => {
  const { openTransfer, handleSubmit, onHandleSubmit } = props;
  const [yearId, setyearId] = useState();
  const [listYear, setListYear] = useState([]);
  const [classId, setclassId] = useState();
  const [listClass, setListClass] = useState([]);
  const dispatch = useDispatch();
  /**
   * Hàm Hiển thị Year và Class 1 lần khi mở form
   */
  useEffect(() => {
    getYearData();
    getClassData();
    return () => {
      setListClass([]);
      setListYear([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**
   * Hàm get Class trực tiếp từ API
   */
  const getClassData = async () => {
    const { data, status } = await getAllClassAPI();
    if (status === 200) {
      setListClass(data.data);
    } else {
      setListClass([]);
    }
  };
  /**
   * Hàm get Year trực tiếp từ API
   */
  const getYearData = async () => {
    const { data, status } = await getAllYearAPI();
    if (status === 200) {
      setListYear(data.data);
    } else {
      setListYear([]);
    }
  };

  const handleYearChange = (value) => {
    setyearId(value);
  };
  const handleClassChange = (value) => {
    setclassId(value);
  };
  /**
   * Hàm đóng form
   */
  const onHandleClose = () => {
    dispatch(_formActions.hideModalTransfer());
  };
  /**
   * Hàm render MenuItem Year của SelectYear
   * @returns MenuItem  Year
   */
  const renderYearOptions = () => {
    let xhtml = null;
    if (listYear.length > 0) {
      xhtml = listYear.map((o) => {
        return (
          <Option key={o.id} value={o.id}>
            {o.fromYear}- {o.toYear}
          </Option>
        );
      });
    }
    return xhtml;
  };
  /**
   * Hàm render MenuItem Class của SelectClass
   * @returns MenuItem  Class
   */
  const renderClassOptions = () => {
    let xhtml = null;
    if (listClass.length > 0) {
      xhtml = listClass.map((o) => {
        return (
          <Option key={o.id} value={o.id}>
            {o.name} - {o.grade}
          </Option>
        );
      });
    }
    return xhtml;
  };
  return (
    <Modal
      visible={openTransfer}
      title="Title"
      onOk={handleSubmit(onHandleSubmit)}
      onCancel={onHandleClose}
      footer={null}
    >
      <Field
        value={yearId}
        label="Năm Học"
        name="yearId"
        component={renderSelect}
        onChange={handleYearChange}
      >
        {renderYearOptions()}
      </Field>
      <Field
        value={classId}
        label="Lớp Học"
        name="classId"
        component={renderSelect}
        onChange={handleClassChange}
      >
        {renderClassOptions()}
      </Field>
      <Field disabled label="Họ và Tên" name="name" component={renderInput} />
      <FormItem {...tailFormItemLayout}>
        <Button
          key="submit"
          type="primary"
          onClick={handleSubmit(onHandleSubmit)}
        >
          Lưu Lại
        </Button>
        <Button key="back" onClick={onHandleClose}>
          Huỷ Bỏ
        </Button>
      </FormItem>
    </Modal>
  );
};

FormTransferClass = reduxForm({
  form: "FORM_TRANSFER_CLASS",
})(FormTransferClass);
export default FormTransferClass;
