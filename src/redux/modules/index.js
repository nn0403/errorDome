import { combineReducers } from "redux";
import entities from "./entities";
import home from "./home";
import detail from "./detail";
import login from "./login";
import app from "./app";


//合并成根reducer
const rootReducer = combineReducers({
  entities,
  home,
  detail,
  app,
  login
});

export default rootReducer