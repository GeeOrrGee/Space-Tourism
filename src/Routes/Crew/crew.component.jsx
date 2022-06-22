import './crew.styles.scss';
import { Routes, Route } from 'react-router-dom';
import CrewItem from '../../components/crew-item/crew-item.component';
import { useEffect, useState } from 'react';

const Crew = ({ crewArray }) => {
    const [activeCarouselId, setActiveCarouselId] = useState(null);

    useEffect(() => {
        const activeRefresh = localStorage.getItem('activeCarousel');
        if (activeRefresh) setActiveCarouselId(activeRefresh);
    }, []);

    const carouselHandler = (e) => {
        setActiveCarouselId(e.target.dataset.id);
        localStorage.setItem('activeCarousel', e.target.dataset.id);
        // while (e.target.dataset.id === activeCarouselId) {
        //     e.target.classList.add('active-carousel-btn');
        // }
        // console.log(activeCarouselId);
    };

    return (
        <section key='crew' className='main-crew-container'>
            <ul>
                {crewArray.map((crewObj, index) => (
                    <CrewItem
                        crewObj={crewObj}
                        activeCarouselId={activeCarouselId}
                        id={`${index + 1}`}
                    />
                ))}
            </ul>
            <div className='carousel-btn-container'>
                <button
                    className={`carousel-btn ${
                        activeCarouselId === '1' && 'active-carousel-btn '
                    }`}
                    data-id='1'
                    onClick={carouselHandler}
                ></button>
                <button
                    className={`carousel-btn ${
                        activeCarouselId === '2' && 'active-carousel-btn '
                    }`}
                    data-id='2'
                    onClick={carouselHandler}
                ></button>
                <button
                    className={`carousel-btn ${
                        activeCarouselId === '3' && 'active-carousel-btn '
                    }`}
                    data-id='3'
                    onClick={carouselHandler}
                ></button>
                <button
                    className={`carousel-btn ${
                        activeCarouselId === '4' && 'active-carousel-btn '
                    }`}
                    data-id='4'
                    onClick={carouselHandler}
                ></button>
            </div>
        </section>
    );
};

export default Crew;
