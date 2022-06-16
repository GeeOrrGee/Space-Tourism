import './home.styles.scss';
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
    const navigate = useNavigate();
    return (
        <div className='homepage-container'>
            <div className='homepage-text-container'>
                <header>
                    <h2>SO, YOU WANT TO TRAVEL TO </h2>
                    <span>SPACE</span>{' '}
                </header>
                <p>
                    Let's face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we'll give you
                    a truly out of this world experience!
                </p>
            </div>
            <button onClick={() => navigate('/destination')}>EXPLORE</button>
        </div>
    );
};

export default Homepage;
