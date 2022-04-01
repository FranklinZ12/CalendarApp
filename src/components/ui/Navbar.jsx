import { Disclosure} from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { startLogout } from 'actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import './navbar.css';

const Navbar = () => {
    const { name } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    };

    return (
        <Disclosure as="nav" className="disclosure">
            {({ open }) => (
                <>
                    <div className="div1">
                        <div className="div2">
                            <div className="div3">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="disclosure-button">
                                    <span>Open main menu</span>
                                    {open ? (
                                        <XIcon className="xicon" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="menuIcon" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="div4">
                                <div className="div4-1">
                                    <i
                                        className="logo far fa-calendar-alt"
                                    ></i>
                                    <span>Calendar App</span>
                                </div>
                                <div className="div4-2">
                                    <div className="div4-2-containter">
                                        <span className="item.current item-current2-1">{name}</span>
                                        <button
                                            onClick={handleLogout}
                                            className="item-current1 item-current2-1"
                                        >
                                            <i className="fas fa-sign-out-alt icon"></i>
                                            Salir
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="diclosure-panel">
                        <div className="panel">
                            <Disclosure.Button
                                className='item-1 item2-1'
                            >
                                <span>{name}</span>
                            </Disclosure.Button>
                            <Disclosure.Button
                                className='item-2 item2-1'
                            >
                                <button
                                    onClick={handleLogout}
                                >
                                    Salir
                                </button>
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar