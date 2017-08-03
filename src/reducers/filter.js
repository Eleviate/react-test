'use strict';
const initialState = {
    firstName: '',
    lastName: '',
    patronymic: '',
    passport: '',
    email: '',
    gender: '',
    date: '',
    error: {}
};
export default (state = initialState, action) => {
    if (action.data === 'err') {
        return {
            ...state,
            error: {
                ...state.error,
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
        case 'EMAIL':
            delete state.error[action.type];
            return isEmail(action.data) ? {
                ...state,
                email: action.data
            } : {
                ...state,
                error: {
                    ...state.error,
                    [action.type]: 'Email-адрес должен содержать "@" и ".". Например "email@email.com"'
                }
            };
        case 'PASSPORT':
            delete state.error[action.type];
            return {
                ...state,
                passport: action.data.replace(/(\d{4})(?=(\d{6})+([^\d]|$))/g, '$1 ').substring(0, 11)
            };
        case 'GENDER':
            delete state.error[action.type];
            return {
                ...state,
                gender: gender(action.data)
            };
        case 'DATE':
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
        case 'SUBMIT':
            return {
                ...state,
                error: required(action.fields)
            };
        default:
            return state;
    }
}


function isError(type) {
    const req = 'Это поле не должно быть пустым';
    switch (type) {
        case 'PASSPORT':
            return 'Поле должно состоять только из цифр';
        case 'FIRSTNAME':
            return 'Имя должно состоять только из кириллици';
        case 'LASTNAME':
            return 'Фамилия должна состоять только из кириллици';
        case 'PATRONYMIC':
            return 'Отчество должно состоять только из кириллици';
        case 'EMAIL':
            return 'Не верный адрес электронной почты';
        case 'LASTNAME_REQ':
            return req;
        case 'PASSPORT_REQ':
            return req;
        case 'FIRSTNAME_REQ':
            return req;
        case 'PATRONYMIC_REQ':
            return req;
        case 'EMAIL_REQ':
            return req;
        case 'DATE_REQ':
            return req;
        case 'GENDER_REQ':
            return req;

    }
}

function required(array) {
    let result = {};
    if (!array.length) return false;
    array.forEach((item => {
        result[item.toString().toUpperCase()] = isError(`${item}_REQ`.toUpperCase())
    }));
    return result;
}
function isEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
function gender(value) {
    switch (value) {
        case 0:
            break;
        case 1:
            return 'Женщина';
        case 2:
            return 'Мужчина';
        default: return;
    }
}