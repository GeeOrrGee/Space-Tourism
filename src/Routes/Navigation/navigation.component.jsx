import { NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/shared/logo.svg';
import { ReactComponent as HamburgerNavbar } from '../../assets/shared/icon-hamburger.svg';
import { ReactComponent as CancelButton } from '../../assets/shared/icon-close.svg';
const Navigation = () => {
    const [mobileNavActive, setMobileNavActive] = useState(false);
    const [mobileNavState, setMobileNavState] = useState({
        hamburgerState: true,
    });

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            const windowSize = window.innerWidth;

            if (windowSize < 608) {
                setMobileNavActive(true);
            } else {
                setMobileNavActive(false);
            }
        });
    }, []);

    return (
        <>
            {' '}
            <nav className='main-nav'>
                <NavLink className='logo' to='/'>
                    {<Logo />}
                </NavLink>
                <div className='nav-links-container'>
                    {!mobileNavActive ? (
                        <ul>
                            <NavLink
                                className={({ isActive }) => {
                                    return isActive
                                        ? `nav-link nav-is-active`
                                        : 'nav-link';
                                }}
                                to='/'
                            >
                                <li>
                                    {' '}
                                    <strong>00</strong>
                                    HOME
                                </li>
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => {
                                    return isActive
                                        ? `nav-link nav-is-active`
                                        : 'nav-link';
                                }}
                                to='/destinations'
                            >
                                <li>
                                    {' '}
                                    <strong>01</strong>
                                    DESTINATION
                                </li>
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => {
                                    return isActive
                                        ? `nav-link nav-is-active`
                                        : 'nav-link';
                                }}
                                to='/crew'
                            >
                                <li>
                                    {' '}
                                    <strong>02</strong>
                                    CREW
                                </li>
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => {
                                    return isActive
                                        ? `nav-link nav-is-active`
                                        : 'nav-link';
                                }}
                                to='/technology'
                            >
                                <li>
                                    {' '}
                                    <strong>03</strong>
                                    TECHNOLOGY
                                </li>
                            </NavLink>
                        </ul>
                    ) : (
                        <>
                            {mobileNavState.hamburgerState ? (
                                <HamburgerNavbar
                                    className='hamburger-icon'
                                    onClick={() => {
                                        setMobileNavState({
                                            navClassName: 'activeNavHamburger',
                                            hamburgerState: false,
                                        });
                                    }}
                                />
                            ) : (
                                <CancelButton
                                    className='hamburger-icon'
                                    onClick={() =>
                                        setMobileNavState({
                                            hamburgerState: true,
                                            navClassName: '',
                                        })
                                    }
                                />
                            )}
                            <ul className={mobileNavState.navClassName}>
                                <NavLink
                                    className={({ isActive }) => {
                                        return isActive
                                            ? `nav-link nav-is-active`
                                            : 'nav-link';
                                    }}
                                    to='/'
                                >
                                    <li>
                                        {' '}
                                        <strong>00</strong>
                                        HOME
                                    </li>
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => {
                                        return isActive
                                            ? `nav-link nav-is-active`
                                            : 'nav-link';
                                    }}
                                    to='/destinations'
                                >
                                    <li>
                                        {' '}
                                        <strong>01</strong>
                                        DESTINATION
                                    </li>
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => {
                                        return isActive
                                            ? `nav-link nav-is-active`
                                            : 'nav-link';
                                    }}
                                    to='/crew'
                                >
                                    <li>
                                        {' '}
                                        <strong>02</strong>
                                        CREW
                                    </li>
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => {
                                        return isActive
                                            ? `nav-link nav-is-active`
                                            : 'nav-link';
                                    }}
                                    to='/technology'
                                >
                                    <li>
                                        {' '}
                                        <strong>03</strong>
                                        TECHNOLOGY
                                    </li>
                                </NavLink>
                            </ul>
                        </>
                    )}
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navigation;
