import { combineReducers } from "redux";
import _studentClassReducer from "./studentClass";
import _uiReducer from "./ui";
import _modalFormReducer from "./modalForm";
import _scoreReducer from "./score";
import { reducer as _formReducer } from "redux-form";
const rootReducer = combineReducers({
  studentClass: _studentClassReducer,
  score: _scoreReducer,
  modalForm: _modalFormReducer,
  ui: _uiReducer,
  form: _formReducer,
});
export default rootReducer;
