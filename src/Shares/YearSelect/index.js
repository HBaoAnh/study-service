import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getListSchoolAPI } from "../../_apis/yearAPI";
import { withStyles } from "@mui/styles";
import styles from "./styles";
/////////////////////////////////////////////////////////////////////////////////////////////////////////

const YearSelect = ({ classes, onChange }) => {
  const [id, setId] = useState();
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
    return () => {
      setList([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    const { data, status } = await getListSchoolAPI();
    if (status === 200) {
      setList(data.data);
      if (data.data.length > 0) {
        setId(data.data[0].id);
        if (onChange) {
          onChange(data.data[0].id);
        }
      }
    } else {
      setList([]);
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    setId(target.value);
    if (onChange) {
      onChange(target.value);
    }
  };

  const renderOptions = () => {
    let xhtml = null;
    if (list.length > 0) {
      xhtml = list.map((o) => {
        return (
          <option key={o.id} value={o.id}>
            {o.fromYear} - {o.toYear}
          </option>
        );
      });
    }
    return xhtml;
  };
  return (
    <div className={classes.selectControl}>
      <b>
        Năm học:
        <select style={{ padding: "10px" }} value={id} onChange={handleChange}>
          {renderOptions()}
        </select>
      </b>
    </div>
  );
};

YearSelect.propTypes = {
  onChange: PropTypes.func,
};

export default withStyles(styles)(YearSelect);
