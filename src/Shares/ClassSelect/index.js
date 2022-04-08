import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAllClassAPI } from "../../_apis/classAPI";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import { Select } from "antd";
///////////////////////////////////////////////////////
const { Option } = Select;

const ClassSelect = ({ onChange, classes }) => {
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
    const { data, status } = await getAllClassAPI();
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

  const handleChange = (value) => {
    setId(value);
    if (onChange) {
      onChange(value);
    }
  };

  const renderOptions = () => {
    let xhtml = null;
    if (list.length > 0) {
      xhtml = list.map((o) => {
        return (
          <Option key={o.id} value={o.id}>
            {o.name}
          </Option>
        );
      });
    }
    return xhtml;
  };
  return (
    <div className={classes.selectControl}>
      <Select
        value={id}
        style={{ padding: "5px", marginRight: "10px" }}
        onChange={handleChange}
      >
        {renderOptions()}
      </Select>
    </div>
  );
};

ClassSelect.propTypes = {
  onChange: PropTypes.func,
};

export default withStyles(styles)(ClassSelect);
