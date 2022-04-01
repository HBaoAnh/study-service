class ClassModel {
  constructor(data) {
    if (!data) {
      data = {};
    }
    this.id = data.id || 0;
    this.name = data.name || "";
    this.grade = data.grade !== undefined ? data.grade : "Khác";
  }
}

export default ClassModel;
