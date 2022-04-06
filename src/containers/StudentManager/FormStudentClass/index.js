// import React, { useEffect, useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { reduxForm } from "redux-form";
import * as _formActions from "../../../_actions/modalForm";
import { Box, Button, Grid, MenuItem, Modal } from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import DangerousIcon from "@mui/icons-material/Dangerous";
import { Field } from "redux-form";
import renderTextField from "../../../Shares/FormHelper/TextField";
import renderSelectField from "../../../Shares/FormHelper/SelectField";
import { validateHocSinh } from "../../../Shares/FormHelper/validate";

const FormStudentClass = (props) => {
  const {
    classes,
    open,
    onHandleSubmit,
    onHandleDelete,
    handleSubmit,
    initialValues,
    submitting,
    invalid,
    reset,
  } = props;
  const dispatch = useDispatch();
  /**
   * Hàm đóng form
   */
  const onHandleClose = () => {
    dispatch(_formActions.hideModal());
  };
  /**
   * Hàm render button xoá
   * @returns button
   */
  const renderbtnClearData = () => {
    let xhtml = null;
    if (initialValues.studentId === 0) {
      xhtml = (
        <Button
          style={{ marginRight: 10 }}
          variant="contained"
          disabled={invalid || submitting}
          onClick={reset}
        >
          Xoá dữ liệu
        </Button>
      );
    } else {
      xhtml = xhtml = (
        <Button
          style={{ marginRight: 10 }}
          variant="contained"
          color="error"
          onClick={() => onHandleDelete(initialValues)}
        >
          Xoá
        </Button>
      );
    }
    return xhtml;
  };
  return (
    <Modal open={open}>
      <div className={classes.modalContainers}>
        <div className={classes.modalHead}>
          <span className={classes.title}>
            {initialValues.id === 0
              ? "Thêm học sinh vào Lớp"
              : "Cập nhập Học Sinh"}
          </span>
          <DangerousIcon
            fontSize="large"
            className={classes.iconClose}
            onClick={onHandleClose}
          />
        </div>
        <div className={classes.modalContent}>
          <form onSubmit={handleSubmit(onHandleSubmit)}>
            <Grid container spacing={2}>
              {/* {renderSelectClass()} */}
              <Grid item md={12} className={classes.input}>
                <Field
                  fullWidth
                  id="name"
                  label="Họ và Tên"
                  className={classes.textField}
                  name="name"
                  component={renderTextField}
                />
              </Grid>
              <Grid item md={12} className={classes.input}>
                <Field
                  fullWidth
                  id="birthday"
                  label="Ngày Sinh"
                  className={classes.textField}
                  name="birthday"
                  component={renderTextField}
                />
              </Grid>
              <Grid item md={12} className={classes.input}>
                <Field
                  fullWidth
                  id="gender"
                  label="Giới Tính"
                  className={classes.selectField}
                  name="gender"
                  component={renderSelectField}
                >
                  <MenuItem value={true}>Nam</MenuItem>
                  <MenuItem value={false}>NỮ</MenuItem>
                </Field>
              </Grid>
              <Grid item md={12} className={classes.input}>
                <Field
                  fullWidth
                  id="homeTown"
                  label="Nơi Sinh"
                  className={classes.textField}
                  name="homeTown"
                  component={renderTextField}
                />
              </Grid>
              <Grid item md={12} className={classes.input}>
                <Box display="flex" flexDirection="row-reverse" mt={2}>
                  <Button
                    variant="contained"
                    style={{ float: "right" }}
                    onClick={onHandleClose}
                  >
                    Thoát
                  </Button>

                  <Box mr={1}>
                    {renderbtnClearData()}
                    <Button
                      disabled={invalid || submitting}
                      variant="contained"
                      type="submit"
                    >
                      Lưu lại
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </Modal>
  );
};

FormStudentClass.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
};

const ReduxForm = reduxForm({
  form: "FORM_STUDENT_CLASS",
  validate: validateHocSinh,
});
export default withStyles(styles)(ReduxForm(FormStudentClass));
