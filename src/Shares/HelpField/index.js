import { Form } from "antd";
const FormItem = Form.Item;

const helpField =
  (Component) =>
  ({ input, meta, children, hasFeedback, label, ...rest }) => {
    const hasError = meta.touched && meta.invalid;
    return (
      <FormItem
        label={label}
        validateStatus={hasError ? "error" : "success"}
        hasFeedback={hasFeedback && hasError}
        help={hasError && meta.error}
      >
        <Component  {...input} {...rest} children={children} />
      </FormItem>
    );
  };

export default helpField;
