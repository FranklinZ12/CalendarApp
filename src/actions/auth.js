import { fetchConToken } from "helpers/fetch";
import { fetchSinToken } from "helpers/fetch";
import Swal from "sweetalert2";
import { types } from "types/types";



export const startLogin = (email, password) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('auth/', { email, password }, 'POST');
        const body = await resp.json();

        if (resp.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            Swal.fire('Error','Correo o usuario incorrecto' , 'error');
        }
    }
}

export const startRegister = (email, password, name) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('auth/new', { email, password, name }, 'POST');
        const body = await resp.json();
        console.log(body.errores)
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            Swal.fire('Error', 'Datos incorrectos', 'error');
        }
    }
}

export const startChecking = () => {
    return async (dispatch) => {
        const resp = await fetchConToken('/auth/renew');
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            dispatch(checkingFinish());
        }

    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = (user) => ({
    type: types.authLogin,
    payload: user
});

export const startLogout = () => {
    return async (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }
}

const logout = () => ({ type: types.authLogout });