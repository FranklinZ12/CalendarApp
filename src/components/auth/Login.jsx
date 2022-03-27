import Input from 'components/ui/Input';
import { useState } from 'react';
import './login.css';

const Login = () => {
    const [isActive, setIsctive] = useState();

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
    return (
        <div className={`bodyLogin ${isActive ? 'active' : ''}`}>
            <div className="container">
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
                        <form>
                            <h3>Iniciar sesion</h3>
                            <Input type="text" placeholder='Correo...' />
                            <Input type="password" placeholder='Contraseña...' />
                            <Input type="submit" value='Login' />
                        </form>
                    </div>

                    <div className="form signupForm">
                        <form>
                            <h3>Resgistrate</h3>
                            <Input type="text" placeholder='Nombre...' />
                            <Input type="text" placeholder='Correo...' />
                            <Input type="password" placeholder='Contraseña...' />
                            <Input type="password" placeholder='Repita la contraseña...' />
                            <Input type="submit" value='Crear' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login