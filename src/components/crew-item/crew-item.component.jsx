import './crew-item.styles.scss';

const CrewItem = ({ crewObj, id, activeCarouselId }) => {
    const { name, bio, images, role } = crewObj;
    const imgUrlName = name.toLowerCase().replaceAll(' ', '-');
    console.log(id === activeCarouselId);
    return (
        <li
            id={id}
            className={`crew-member-container ${
                id === activeCarouselId && 'active-carousel'
            }`}
        >
            {' '}
            <figure className='crew-member-inner'>
                <div className='crew-member-content'>
                    {' '}
                    <h2>
                        <span>02</span>MEET YOUR CREW
                    </h2>
                    <div className='crew-member-description'>
                        <span>{role}</span>
                        <h2>{name}</h2>
                        <p>{bio}</p>
                    </div>
                </div>
                <div className='crew-member-img-container'>
                    <img
                        src={require(`../../assets/crew/image-${imgUrlName}.png`)}
                        alt={name}
                    />
                </div>
            </figure>
        </li>
    );
};

export default CrewItem;
