class SubjectModel {
  constructor(data) {
    if (!data) {
      data = {};
    }
    this.id = data.id || 0;
    this.nameSubject = data.nameSubject || "";
    this.lesson = data.lesson || 0;
  }
}

export default SubjectModel;
