import { combineReducers } from "redux";
import _yearReducer from "./year";
import _classReducer from "./class";
import _subjectReducer from "./subject";
import _studentClassReducer from "./studentClass";
import _uiReducer from "./ui";
import _modalFormReducer from "./modalForm";
import _scoreReducer from "./score";
import { reducer as _formReducer } from "redux-form";
const rootReducer = combineReducers({
  year: _yearReducer,
  class: _classReducer,
  subject: _subjectReducer,
  studentClass: _studentClassReducer,
  score: _scoreReducer,
  modalForm: _modalFormReducer,
  ui: _uiReducer,
  form: _formReducer,
});
export default rootReducer;
