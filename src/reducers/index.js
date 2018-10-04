import { combineReducers } from "redux";
import PostsReducer from "./reducer_posts.js";

const rootReducer = combineReducers({
  Posts: PostsReducer
});

export default rootReducer;
