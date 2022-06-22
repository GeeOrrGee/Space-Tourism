import { useState } from 'react';
import TechnologyItem from '../../components/technology-item/technology-item.component';
import './technology.styles.scss';

const Technology = ({ technologyData }) => {
    console.log(technologyData);
    const [activeItemId, setActiveItemId] = useState('1');

    return (
        <section className='technology-main-container'>
            <span>
                <span>03</span>
                SPACE LAUNCH 101
            </span>
            <ul>
                {' '}
                {technologyData.map((technolotgObj, index) => (
                    <TechnologyItem
                        id={`${index + 1}`}
                        technologyObj={technolotgObj}
                        activeItemId={activeItemId}
                        setActiveItemId={setActiveItemId}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Technology;
