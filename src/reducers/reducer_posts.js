import _ from "lodash";
import { FETCH_POST, FETCH_POSTS, CREATE_POST } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };

    default:
      return state;
  }
}
