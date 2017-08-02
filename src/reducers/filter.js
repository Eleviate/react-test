'use strict';
const initialState = {
    firstName: '',
    lastName: '',
    patronymic: '',
    passport: '',
    error: {}
};
export default (state = initialState, action) => {
    if (action.data === 'err') {
        return {
            ...state,
            error: {
                [action.type]: isError(action.type)
            }
        }
    }
    switch (action.type) {
        case 'FIRSTNAME':
            delete state.error[action.type];
            return {
                ...state,
                firstName: action.data
            };
        case 'LASTNAME':
            delete state.error[action.type];
            return {
                ...state,
                lastName: action.data
            };
        case 'PATRONYMIC':
            delete state.error[action.type];
            return {
                ...state,
                patronymic: action.data
            };
        case 'PASSPORT':
            delete state.error[action.type];
            return {
                ...state,
                passport: action.data.replace(/(\d{4})(?=(\d{6})+([^\d]|$))/g, '$1 ').substring(0, 11)
            };
        case 'CHECK_DATE':
            if (+new Date(action.data).getFullYear() > (new Date().getFullYear() - 18)) {
                delete state.date;
                return {
                    ...state,
                    error: {
                        ...state.error,
                        [action.type]: 'Не верный возраст, минимальный возраст 18 лет'
                    }
                }
            } else {
                delete state.error[action.type];
                return {
                    ...state,
                    date: action.data
                };
            }
        default:
            return state;
    }

    function isError(type) {
        switch (type) {
            case 'PASSPORT':
                return 'Поле должно состоять только из цифр';
            case 'FIRSTNAME':
                return 'Имя должно состоять только из кириллици';
            case 'LASTNAME':
                return 'Фамилия должна состоять только из кириллици';
            case 'PATRONYMIC':
                return 'Отчество должно состоять только из кириллици'
        }

    }
}