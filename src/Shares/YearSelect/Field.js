import React from "react";
import YearSelect from "./index";
import { Form } from "antd";
const FormItem = Form.Item;

const YearSelectField = ({
  input,
  onChange,
  meta,
  children,
  hasFeedback,
  label,
  ...rest
}) => {
  const handleChange = (s) => {
    input.onChange(s);
    if (onChange) {
      onChange(s);
    }
  };
  const hasError = meta.touched && meta.invalid;
  return (
    <FormItem
      label={label}
      validateStatus={hasError ? "error" : "success"}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <YearSelect onChange={(s) => handleChange(s)} {...rest}></YearSelect>
    </FormItem>
  );
};

export default YearSelectField;
