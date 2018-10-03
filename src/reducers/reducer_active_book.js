// State argument is not app state,
// only thye state that this reducer responsible for
export default (state = null, action) => {
    switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}