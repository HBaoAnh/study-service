import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getListClassAPI } from "../../_apis/classAPI";
import { withStyles } from "@mui/styles";
import styles from "./styles";
///////////////////////////////////////////////////////

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
    const { data, status } = await getListClassAPI();
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
            Lớp: {o.name}
          </option>
        );
      });
    }
    return xhtml;
  };
  return (
    <div className={classes.selectControl}>
      <select style={{ padding: "5px" }} value={id} onChange={handleChange}>
        {renderOptions()}
      </select>
    </div>
  );
};

ClassSelect.propTypes = {
  onChange: PropTypes.func,
};

export default withStyles(styles)(ClassSelect);
