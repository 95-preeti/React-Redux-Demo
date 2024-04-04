import { combineReducers } from "redux"
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from "./iceCream/iceCreamReducer"
import  useReducer  from './user/userReducer'

const rootReducer =combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: useReducer
})

export default rootReducer