import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Select } from "antd";
import { getAllYearAPI } from "../../_apis/yearAPI";
const { Option } = Select;

const YearSelect = ({ onChange }) => {
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
    const { data, status } = await getAllYearAPI();
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

  const renOptions = () => {
    let xhtml = null;
    if (list.length > 0) {
      xhtml = list.map((o) => {
        return (
          <Option key={o.id} value={o.id}>
            {o.fromYear} - {o.toYear}
          </Option>
        );
      });
    }
    return xhtml;
  };
  return (
    <Select
      value={id}
      style={{ width: "120px", marginRight: "10px" }}
      onChange={handleChange}
    >
      {renOptions()}
    </Select>
  );
};

YearSelect.propTypes = {
  onChange: PropTypes.func,
};

export default YearSelect;
