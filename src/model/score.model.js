class ScoreModel {
  constructor(data) {
    if (!data) {
      data = {};
    }
    this.id = data.id || 0;
    this.yearId = data.yearId || 0;
    this.classId = data.classId || 0;
    this.studentId = data.studentId || 0;
    this.subjectId = data.subjectId || 0;
    this.scoreX1 = data.scoreX1 || 0;
    this.score15Min = data.score15Min || 0;
    this.scoreX2 = data.scoreX2 || 0;
    this.scoreX3 = data.scoreX3 || 0;
    this.nameSubject = data.nameSubject || "";
  }
}

export default ScoreModel;
