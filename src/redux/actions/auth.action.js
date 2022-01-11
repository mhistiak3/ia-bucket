import { GoogleAuthProvider, signInWithPopup, signOut,  } from "firebase/auth";
import { auth } from "../../firebase";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../constent";
export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
    sessionStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    sessionStorage.removeItem("user");
    dispatch({
      type: LOG_OUT,
    });
  } catch (error) {
    console.log(error.message);
  }
};
