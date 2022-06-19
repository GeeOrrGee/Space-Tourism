import './crew.styles.scss';

const CrewItem = ({ crewObj }) => {
    return <li className='crew-member-container'>{crewObj.name}</li>;
};

export default CrewItem;
