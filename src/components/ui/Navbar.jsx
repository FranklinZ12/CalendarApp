import { Disclosure, Menu } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from 'media/calendar.png'
import './navbar.css';


const navigation = [
    { name: 'Pedro', href: '#', current: true },
    { name: 'Salir', href: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
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
                                    <img
                                        className="logo"
                                        src={logo}
                                        alt="Calendar"
                                    />
                                    <img
                                        className="logo2"
                                        src={logo}
                                        alt="Calendar"
                                    />
                                    <span>Calendar</span>
                                </div>
                                <div className="div4-2">
                                    <div className="div4-2-containter">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'item-current1' : 'item-current2',
                                                    'item-current2-1'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="div5">

                                {/* Profile dropdown */}
                                <Menu as="div" className="menu">
                                    <div>
                                        <Menu.Button className="menu-button">
                                            <span >Open user menu</span>
                                            <img
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="diclosure-panel">
                        <div className="panel">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'item-1' : 'item-2',
                                        'item2-1'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar