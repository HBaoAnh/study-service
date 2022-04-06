export const validateHocSinh = (values) => {
  const errors = {};
  const { name } = values;
  if (!name) {
    errors.name = "vui long nhap ho ten hoc sinh";
  } else if (name.trim() && name.length < 5) {
    errors.name = "ho ten hoc sinh phai co tu 5 ky tu tro len";
  }
  return errors;
};

export const validateLopHoc = (values) => {
  const errors = {};
  const { name } = values;
  if (!name) {
    errors.name = "vui long nhap ten lop hoc";
  }
  return errors;
};

export const validateNamHoc = (values) => {
  const errors = {};
  const { name } = values;
  if (!name) {
    errors.name = "vui lòng nhập tên năm học";
  }
  return errors;
};

export const validateScore = (values) => {
  const errors = {};
  const { scoreX1, score15Min, scoreX2, scoreX3 } = values;
  if (!scoreX1) {
    errors.scoreX1 = "Vui lòng nhập điểm số";
  } else if (scoreX1 < 0 || scoreX1 > 10) {
    errors.scoreX1 = "Điểm số không hơp lệ";
  }
  if (!score15Min) {
    errors.score15Min = "Vui lòng nhập điểm số";
  } else if (score15Min < 0 || score15Min > 10) {
    errors.score15Min = "Điểm số không hơp lệ";
  }
  if (!scoreX2) {
    errors.scoreX2 = "Vui lòng nhập điểm số";
  } else if (scoreX2 < 0 || scoreX2 > 10) {
    errors.scoreX2 = "Điểm số không hơp lệ";
  }
  if (!scoreX3) {
    errors.scoreX3 = "Vui lòng nhập điểm số";
  } else if (scoreX3 < 0 || scoreX3 > 10) {
    errors.scoreX3 = "Điểm số không hơp lệ";
  }
  return errors;
};
