import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/Homepage/Group 2.svg';
const Navigation = () => {
    return (
        <main>
            <nav className='nav-links-container'>
                <Link to='/'>{<Logo />}</Link>
                <ul>
                    <Link className='nav-link' to='/'>
                        <strong>00</strong>
                        HOME
                    </Link>
                    <Link className='nav-link' to='/destination'>
                        <strong>01</strong>
                        DESTINATION
                    </Link>
                    <Link className='nav-link' to='/crew'>
                        <strong>02</strong>
                        CREW
                    </Link>
                    <Link className='nav-link' to='/technology'>
                        <strong>03</strong>
                        TECHNOLOGY
                    </Link>
                </ul>
            </nav>
            <Outlet />
        </main>
    );
};

export default Navigation;
