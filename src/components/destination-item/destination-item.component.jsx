import { NavLink } from 'react-router-dom';
import './destination-item.styles.scss';
const DestinationItem = ({ planetObj }) => {
    const { description, distance, images, name, travel } = planetObj;
    console.log(planetObj.name.toLowerCase());
    return (
        <figure className='planet-content-wrapper'>
            <div className='planet-container'>
                <header>
                    <span>01</span>
                    <span>PICK YOUR DESTINATION</span>
                </header>
                <div className='planet-img-container'>
                    <img
                        // width='100%'
                        src={require(`../../assets/destination/image-${planetObj.name.toLowerCase()}.png`)}
                        alt={planetObj.name}
                    />
                </div>
            </div>
            <div className='planet-description'>
                <nav className='destinations-nav'>
                    <NavLink
                        className={({ isActive }) => {
                            return isActive
                                ? `nav-link nav-is-active`
                                : 'nav-link';
                        }}
                        to='/destinations/moon'
                    >
                        MOON
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => {
                            return isActive
                                ? `nav-link nav-is-active`
                                : 'nav-link';
                        }}
                        to='/destinations/mars'
                    >
                        MARS
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => {
                            return isActive
                                ? `nav-link nav-is-active`
                                : 'nav-link';
                        }}
                        to='/destinations/europa'
                    >
                        EUROPA
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => {
                            return isActive
                                ? `nav-link nav-is-active`
                                : 'nav-link';
                        }}
                        to='/destinations/titan'
                    >
                        TITAN
                    </NavLink>
                </nav>
                <div className='planet-content'>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <div className='line'></div>
                    <footer className='planet-details'>
                        <div className='avg-distance'>
                            <h2>AVG. DISTANCE</h2>
                            <span>{distance}</span>
                        </div>
                        <div className='travel-time'>
                            <h2>EST. TRAVEL TIME</h2>
                            <span>{travel}</span>
                        </div>
                    </footer>
                </div>
            </div>
        </figure>
    );
};

export default DestinationItem;
