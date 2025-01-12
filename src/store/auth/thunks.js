import { signInWithGoogle, registerUserWithEmailPassword, loginUserWithEmailPassword, logoutFirebase, } from "../../firebase/providers";
import { clearNoteLogout } from "../journal";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}
export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if (result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result))
    }
}

export const startRegisterUser = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });
        if (!ok) {
            return dispatch(logout({ errorMessage }));
        }
        dispatch(login({ uid, displayName, photoURL, email }));
    };
};



export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await loginUserWithEmailPassword({ email, password });
        console.log(result);

        if (!result.ok) return dispatch(logout(result));
        dispatch(login(result));

    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(clearNoteLogout())
        dispatch(logout());
    }
}

