class YearModel {
  constructor(data) {
    if (!data) {
      data = {};
    }
    this.id = data.id || 0;
    this.fromYear = data.fromYear || 0;
    this.toYear = data.toYear || 0;
  }
}

export default YearModel;
