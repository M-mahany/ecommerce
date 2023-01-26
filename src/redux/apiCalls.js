import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicrequest } from "../requestMethods"

export const login = async (dispatch, user)=>{
dispatch(loginStart());
try{
const res = await publicrequest.post("/auth/login", user);
dispatch(loginSuccess(res.data));
}catch(err){
    dispatch(loginFailure())
}
}