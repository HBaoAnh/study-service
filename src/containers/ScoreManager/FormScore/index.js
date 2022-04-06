import React, { useEffect, useState } from "react";
import styles from "./styles";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Box, Button, Grid, MenuItem, Modal } from "@mui/material";
import { Field } from "redux-form";
import DangerousIcon from "@mui/icons-material/Dangerous";
import { reduxForm } from "redux-form";
import * as _modalFormActions from "../../../_actions/modalForm";
import { useDispatch } from "react-redux";
import renderSelectField from "../../../Shares/FormHelper/SelectField";
import renderTextField from "../../../Shares/FormHelper/TextField";
import { getAllSubject } from "../../../_apis/subjectAPI";

const FormScore = (props) => {
  const {
    classes,
    openForm,
    handleSubmit,
    onHandleSubmit,
    invalid,
    submitting,
    initialValues,
  } = props;
  console.log(initialValues);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getDataSubjects();
    return () => {
      setSubjects([]);
    };
  }, []);
  const dispatch = useDispatch();

  const getDataSubjects = async () => {
    const { status, data } = await getAllSubject();
    if (status === 200) {
      setSubjects(data.data);
    } else {
      setSubjects([]);
    }
  };

  const onHandleClose = () => {
    dispatch(_modalFormActions.hideModal());
  };

  const renderOptionsSubjects = () => {
    let xhtml = null;
    if (subjects.length > 0) {
      xhtml = subjects.map((o) => {
        return (
          <MenuItem key={o.id} value={o.id}>
            {o.nameSubject}
          </MenuItem>
        );
      });
    }
    return xhtml;
  };
  return (
    <Modal open={openForm}>
      <div className={classes.modalContainers}>
        <div className={classes.modalHead}>
          <span className={classes.title}>Them diem</span>
          <DangerousIcon
            fontSize="large"
            className={classes.iconClose}
            onClick={onHandleClose}
          />
        </div>
        <div className={classes.modalContent}>
          <form onSubmit={handleSubmit(onHandleSubmit)}>
            <Grid container spacing={2}>
              <Grid item md={12} className={classes.input}>
                <Field
                  disabled
                  label="Môn học"
                  name="subjectId"
                  component={renderSelectField}
                >
                  {renderOptionsSubjects()}
                </Field>
              </Grid>
              <Grid item md={3} className={classes.input}>
                <Field
                  label="Điểm Miệng"
                  name="scoreX1"
                  component={renderTextField}
                  type="number"
                />
              </Grid>
              <Grid item md={3} className={classes.input}>
                <Field
                  label="Điểm 15 Phút"
                  name="score15Min"
                  component={renderTextField}
                  type="number"
                />
              </Grid>
              <Grid item md={3} className={classes.input}>
                <Field
                  label="Điểm Hệ Số 2"
                  name="scoreX2"
                  component={renderTextField}
                  type="number"
                />
              </Grid>
              <Grid item md={3} className={classes.input}>
                <Field
                  label="Điểm Hệ Số 3"
                  name="scoreX3"
                  component={renderTextField}
                  type="number"
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

FormScore.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  onHandleClose: PropTypes.func,
};

const withReduxForm = reduxForm({
  form: "Form_Score",
});

export default withStyles(styles)(withReduxForm(FormScore));
