
const userReducer = (state={}, action) => {
    switch (action.type) {
        case "setToken":
            return Object.assign({}, {
                value: action.token
            });
        case "resetToken":
            return Object.assign({}, {
                value: ''
            });
        default: 
            return state;
    }
}

export default userReducer;