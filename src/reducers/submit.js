export default (state = {}, action) => {
    if (action.type === 'SUBMIT') {
        return {
            ...state,
        }
    }
    return state;
}