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

    const initialLoginValues = {
        lEmail: 'franklin@gmail.com',
        lPassword: '123456',
    }


    const initialRegisterValues = {
        rName: 'fran',
        rEmail: 'fran@gmail.com',
        rPassword1: '123456',
        rPassword2: '123456',
    }

    const [formLoginValues, handleLoginInputChange] = useForm(initialLoginValues);
    const [formRegisterValues, handleRegisterInputChange] = useForm(initialRegisterValues);

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
        }
        dispatch(startRegister(rEmail, rPassword1, rName));
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
                        <form onSubmit={handleLogin}>
                            <h3>Iniciar sesion</h3>
                            <Input
                                type="text"
                                placeholder='Correo...'
                                name='lEmail'
                                value={lEmail}
                                defaultValue={lEmail}
                                onChange={handleLoginInputChange}
                                required
                            />
                            <Input
                                type="password"
                                placeholder='Contraseña...'
                                name='lPassword'
                                value={lPassword}
                                defaultValue={lPassword}
                                onChange={handleLoginInputChange}
                                required
                            />
                            <Input type="submit" value='Login' />
                        </form>
                    </div>

                    <div className="form signupForm">
                        <form onSubmit={handleRegister}>
                            <h3>Resgistrate</h3>
                            <Input
                                type="text"
                                placeholder='Nombre...'
                                name={rName} value={rName}
                                defaultValue={rName}
                                onChange={handleRegisterInputChange}
                                required
                            />
                            <Input
                                type="text"
                                placeholder='Correo...'
                                name={rEmail} value={rEmail}
                                defaultValue={rEmail}
                                onChange={handleRegisterInputChange}
                                required />
                            <Input
                                type="password"
                                placeholder='Contraseña...'
                                name={rPassword1}
                                value={rPassword1}
                                defaultValue={rPassword1}
                                onChange={handleRegisterInputChange}
                                required
                            />
                            <Input
                                type="password"
                                placeholder='Repita la contraseña...'
                                name={rPassword2} value={rPassword2}
                                defaultValue={rPassword2}
                                onChange={handleRegisterInputChange}
                                required />
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