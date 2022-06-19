import './crew.styles.scss';
import { Routes, Route } from 'react-router-dom';
import CrewItem from '../../components/crew-item/crew-item.component';

const Crew = ({ crewArray }) => {
    return (
        <section className='main-crew-container'>
            <ul>
                {crewArray.map((crewObj, index) => (
                    <CrewItem crewObj={crewObj} id={index + 1} />
                ))}
            </ul>

            <div className='carousel-btn-container'>
                <button className='carousel-btn'></button>
                <button className='carousel-btn'></button>
                <button className='carousel-btn'></button>
                <button className='carousel-btn'></button>
            </div>
        </section>
    );
};

export default Crew;
