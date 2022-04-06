import React, { useEffect, useState } from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import { Button, Grid, MenuItem, Modal } from "@mui/material";
import DangerousIcon from "@mui/icons-material/Dangerous";
import { useDispatch } from "react-redux";
import * as _formActions from "../../../_actions/modalForm";
import { Field } from "redux-form";
import renderTextField from "../../../Shares/FormHelper/TextField";
import { Box } from "@mui/system";
import { reduxForm } from "redux-form";
import renderSelectField from "../../../Shares/FormHelper/SelectField";
import { getListClassAPI } from "../../../_apis/classAPI";
import { getListYearAPI } from "../../../_apis/yearAPI";

const FormTransferClass = (props) => {
  const { classes, openTransfer, handleSubmit, onHandleSubmit } = props;
  const [listClass, setListClass] = useState([]);
  const [listYear, setListYear] = useState([]);

  useEffect(() => {
    getYearData();
    getClassData();
    return () => {
      setListClass([]);
      setListYear([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useDispatch();
  
  const getClassData = async () => {
    const { data, status } = await getListClassAPI();   
    if (status === 200) {
      setListClass(data.data);
    } else {
      setListClass([]);
    }
  };
  const getYearData = async () => {
    const { data, status } = await getListYearAPI();
    if (status === 200) {
      setListYear(data.data);
    } else {
      setListYear([]);
    }
  };
  const onHandleClose = () => {
    dispatch(_formActions.hideModalTransfer());
  };

  const renderYearOptions = () => {
    let xhtml = null;
    if (listYear.length > 0) {
      xhtml = listYear.map((o) => {
        return (
          <MenuItem key={o.id} value={o.id}>
            {o.fromYear}- {o.toYear}
          </MenuItem>
        );
      });
    } 
    return xhtml;
  };

  const renderClassOptions = () => {
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
  return (
    <Modal open={openTransfer}>
      <div className={classes.modalContainers}>
        <div className={classes.modalHead}>
          <span className={classes.title}>Chuyển Lớp Học Sinh</span>
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
                  label="Năm Học"
                  name="yearId"
                  component={renderSelectField}
                >
                  {renderYearOptions()}
                </Field>
              </Grid>
              <Grid item md={12} className={classes.input}>
                <Field
                  label="Lớp Học"
                  name="classId"
                  component={renderSelectField}
                >
                  {renderClassOptions()}
                </Field>
              </Grid>
              <Grid item md={12} className={classes.input}>
                <Field
                  fullWidth
                  disabled
                  label="Họ và Tên"
                  className={classes.textField}
                  name="name"
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
                    <Button variant="contained" type="submit">
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

const ReduxForm = reduxForm({
  form: "FORM_TRANSFER_CLASS",
});
export default withStyles(styles)(ReduxForm(FormTransferClass));
