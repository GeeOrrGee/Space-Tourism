import { NavLink, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/Homepage/Group 2.svg';
const Navigation = () => {
    return (
        <main>
            <nav className='nav-links-container'>
                <NavLink className='logo' to='/'>{<Logo />}</NavLink>
                <ul>
                    <NavLink
                        eact
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
                        to='/destination'
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
            </nav>
            <Outlet />
        </main>
    );
};

export default Navigation;
