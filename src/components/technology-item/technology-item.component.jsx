import { useEffect, useState } from 'react';
import './technology-item.styles.scss';
const TechnologyItem = ({
    technologyObj,
    id,
    activeItemId,
    setActiveItemId,
}) => {
    const { description, name } = technologyObj;
    const [landscapeImgMode, setLandscapeImgMode] = useState(false);
    const imgName = name.replaceAll(' ', '-').toLowerCase();
    useEffect(() => {
        const currentTechnologyComponent = localStorage.getItem(
            'currentTechnologyId'
        );
        if (currentTechnologyComponent)
            setActiveItemId(currentTechnologyComponent);
        window.addEventListener('resize', () => {
            const windowWidth = window.innerWidth;
            console.log(windowWidth);
            if (windowWidth < 992) {
                setLandscapeImgMode(true);
            } else {
                setLandscapeImgMode(false);
            }
        });
    }, []);
    const clickHandler = (e) => {
        console.log(imgName);
        localStorage.setItem('currentTechnologyId', e.target.dataset.id);
        setActiveItemId(e.target.dataset.id);
    };
    console.log(id, activeItemId);
    return (
        <li
            key={'technology-item' + id}
            className={`technology-item-container ${
                activeItemId === id && 'active-technology-item'
            }`}
        >
            <div className='technology-content-container'>
                <div className='technology-buttons-container'>
                    <button
                        data-id={1}
                        onClick={clickHandler}
                        className={`technology-button ${
                            activeItemId === '1' && 'active-technology-button'
                        }`}
                    >
                        1
                    </button>
                    <button
                        data-id={2}
                        onClick={clickHandler}
                        className={`technology-button ${
                            activeItemId === '2' && 'active-technology-button'
                        }`}
                    >
                        2
                    </button>
                    <button
                        data-id={3}
                        onClick={clickHandler}
                        className={`technology-button ${
                            activeItemId === '3' && 'active-technology-button'
                        }`}
                    >
                        3
                    </button>
                </div>
                <div className='technology-item-description'>
                    <span>THE TERMINOLOGY...</span>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='technology-item-img-container'>
                <img
                    src={require(`../../assets/technology/image-${imgName}-${
                        landscapeImgMode ? 'landscape' : 'portrait'
                    }.jpg`)}
                    alt={name}
                />
            </div>
        </li>
    );
};

export default TechnologyItem;
