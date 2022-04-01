import React, { useEffect, useState } from "react";
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
import { getListClassAPI } from "../../../_apis/classAPI";

const FormStudentClass = (props) => {
  const {
    classes,
    open,
    onSubmit,
    handleSubmit,
    initialValues,
    submitting,
    pristine,
    reset,
  } = props;
  const [listClass, setListClass] = useState([]);

  const getData = async () => {
    const { data, status } = await getListClassAPI();
    if (status === 200) {
      setListClass(data.data);
    } else {
      setListClass([]);
    }
  };

  useEffect(() => {
    getData();
    return () => {
      setListClass([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dispatch = useDispatch();

  const onHandleClose = () => {
    dispatch(_formActions.hideModal());
  };
  const onHandleSubmit = (data) => {
    onSubmit(data);
  };

  const renderOptions = () => {
    let xhtml = null;
    if (listClass.length > 0) {
      xhtml = listClass.map((o) => {
        return (
          <MenuItem key={o.id} value={o.id}>
            {o.name} - {o.grade}
          </MenuItem>
        );
      });
    }
    return xhtml;
  };

  const renderSelectClass = () => {
    let xhtml = null;
    if (initialValues.id !== 0) {
      xhtml = (
        <Grid item md={12} className={classes.input}>
          <Field label="classId" name="classId" component={renderSelectField}>
            {renderOptions()}
          </Field>
        </Grid>
      );
    }
    return xhtml;
  };
  return (
    <Modal  open={open}>
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
              {renderSelectClass()}
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
                    disabled={pristine || submitting}
                    variant="contained"
                    style={{ float: "right" }}
                    onClick={reset}
                  >
                    Xoá Dữ liệu
                  </Button>
                  <Box mr={1}>
                    <Button
                      disabled={pristine || submitting}
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
});
export default withStyles(styles)(ReduxForm(FormStudentClass));
