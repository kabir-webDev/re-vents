import { combineReducers } from "redux";
import testReducer from "../../features/sandbox/testReducer";
import eventReducer from "../../features/events/eventReducer";
import walahReducer from "../../features/sandbox/walahReducer";

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
  walah: walahReducer,
});

export default rootReducer;
