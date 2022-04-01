import { startRegister } from 'actions/auth';
import { startLogin } from 'actions/auth';
import Input from 'components/ui/Input';
import { useForm } from 'hooks/useForm';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import './login.css';

const Login = () => {
    const [isActive, setIsctive] = useState();
    const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange] = useForm();
    const [formRegisterValues, handleRegisterInputChange] = useForm();

    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;
    const { lEmail, lPassword } = formLoginValues;

    const handleShowSigin = () => {
        // const div = formBx.current;
        // div.className = 'formBx active'
        setIsctive(true);
    }

    const handleShowSigup = () => {
        // const div = formBx.current;
        // div.className = 'formBx'
        setIsctive(false);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(lEmail, lPassword));
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (rPassword1 !== rPassword2) {
            Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
        }else{
            dispatch(startRegister(rEmail, rPassword1, rName));
        }
    }

    return (
        <div className={`bodyLogin ${isActive ? 'active' : ''}`}>
            <div className="containerL">
                <div className="blueBg">
                    <div className="box signin">
                        <h2>¿Ya tienes una cuenta?</h2>
                        <button
                            className=""
                            onClick={handleShowSigup}
                        >Iniciar sesion</button>
                    </div>
                    <div className="box signup">
                        <h2>¿No tienes una cuenta?</h2>
                        <button
                            className=""
                            onClick={handleShowSigin}
                        >Registrate</button>
                    </div>
                </div>
                <div className={`formBx ${isActive ? 'active' : ''}`}
                >
                    <div className="form signinForm">
                        <form onSubmit={handleLogin} onChange={handleLoginInputChange}>
                            <h3>Iniciar sesion</h3>
                            <Input
                                type="text"
                                placeholder='Correo...'
                                name='lEmail'
                                required = {true}
                            />
                            <Input
                                type="password"
                                placeholder='Contraseña...'
                                name='lPassword'
                                required = {true}
                            />
                            <Input type="submit" value='Login' />
                        </form>
                    </div>

                    <div className="form signupForm">
                        <form onSubmit={handleRegister} onChange={handleRegisterInputChange}>
                            <h3>Resgistrate</h3>
                            <Input
                                type="text"
                                placeholder='Primer nombre...'
                                name='rName'                         
                                required = {true}
                            />
                            <Input
                                type="text"
                                placeholder='Correo...'
                                name='rEmail'
                                required 
                                />
                            <Input
                                type="password"
                                placeholder='Contraseña...'
                                name='rPassword1'
                                required = {true}
                            />
                            <Input
                                type="password"
                                placeholder='Repita la contraseña...'
                                name='rPassword2'
                                required = {true} />
                            <Input
                                type="submit"
                                value='Crear'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login