import ActionType from '../actions/actionTypes';

const INITIAL_STATE = {
    comment : ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionType.ShopComment :
            return({
                ...state,
                comment : action.payload
            })
        default:
            return state;
    }
}