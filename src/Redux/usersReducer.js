const SAVE_DATA = 'SAVE_DATA';
const CHANGE_DATA = 'CHANGE_DATA';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        { id: 1, name: 'Пользователь 1', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 2, name: 'Саша', departmen: 'ОТК', company: 'БПК', jobTitle: 'Инженер' },
        { id: 3, name: 'Пользователь 3', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 4, name: 'Пользователь 4', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 5, name: 'Пользователь 5', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 6, name: 'Пользователь 6', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 7, name: 'Пользователь 7', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 8, name: 'Пользователь 8', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 9, name: 'Пользователь 9', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 10, name: 'Пользователь 10', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 11, name: 'Пользователь 11', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 12, name: 'Пользователь 12', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 13, name: 'Пользователь 13', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 14, name: 'Пользователь 14', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 15, name: 'Пользователь 15', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 16, name: 'Пользователь 16', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 17, name: 'Пользователь 17', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 18, name: 'Пользователь 18', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 19, name: 'Пользователь 19', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
        { id: 20, name: 'Пользователь 20', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' }
    ]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SAVE_DATA:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            name: action.name,
                            departmen: action.departmen,
                            company: action.company,
                            jobTitle: action.jobTitle
                        }
                    }
                    return user;
                })
            };

        case CHANGE_DATA:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            name: action.name,
                            departmen: action.departmen,
                            company: action.company,
                            jobTitle: action.jobTitle
                        }
                    }
                    return user;
                })
            };

        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }

        default:
            return state;
    }
}


export const saveDataAC = (userId, name, departmen, company, jobTitle) => ({
    type: SAVE_DATA,
    userId,
    name: name,
    departmen: departmen,
    company: company,
    jobTitle: jobTitle
})

export const changeDataAC = (userId, name, departmen, company, jobTitle) =>
({
    type: CHANGE_DATA,
    userId,
    name: name,
    departmen: departmen,
    company: company,
    jobTitle: jobTitle
})

export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;