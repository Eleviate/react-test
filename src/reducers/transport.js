const marks = {
    FORD: ['Focus', 'Fiesta', 'Explorer'],
    TOYOTA: ['Corolla', 'Tacoma', 'Camry']
};

export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_CAR':
            return {
                ...state,
                cars: ['Ford', 'Toyota']
            };
        case 'GET_MARK':
            return {
                ...state,
                marks: marks[action.data]
            };
        case 'REMOVE_CAR':
            delete state.cars;
            delete state.marks;
            return {
                ...state
            };
        default:
            return state;
    }
}