class StudentClassModel {
  constructor(data) {
    if (!data) {
      data = {};
    }
    this.id = data.id || 0;
    this.yearId = data.yearId || 0;
    this.classId = data.classId || 0;
    this.studentId = data.studentId || 0;
    this.name = data.name || "";
    this.gender = data !== undefined ? data.gender : true;
    this.birthday = data.birthday || "";
    this.homeTown = data.homeTown || "";
  }
}

export default StudentClassModel;
