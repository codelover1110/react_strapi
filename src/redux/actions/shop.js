import ActionTypes from "./actionTypes";

export const ShopComment = (data) => async dispatch => {
    try {
        await dispatch({
            type : ActionTypes.ShopComment,
            payload : data
        }) ;
        
        return true ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}

