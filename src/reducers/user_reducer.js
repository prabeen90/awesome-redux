// export const userReducer =  () => {
//     let apiUsers = [];

//     return apiUsers;
// }

// get users on componentDidMount
export const userReducer = function (state = [], action) {
    switch(action.type){
        case 'GET_ALL_USER':
            return [ ...state, ...action.users ]
    }
    return state;
}

export const selectedReducer = function (state = {name: 'prabeen'}, action) {
    switch(action.type){
        case 'SELECTED_USER':
            return action.user
    }
    return state;
}
