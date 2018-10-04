import { combineReducers } from "redux";
import PostsReducer from "./reducer_posts";

const rootReducer = combineReducers({
  Posts: PostsReducer
});

export default rootReducer;
