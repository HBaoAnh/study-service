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
  if(!name){
    errors.name = "vui long nhap ten lop hoc";
  }
  return errors;
};

export const validateNamHoc = (values) => {
  const errors = {};
  const {name} = values;
  if(!name){
    errors.name ="vui lòng nhập tên năm học"
  }
  return errors;
}