import { Routes, Route } from 'react-router-dom';
import './destinations.styles.scss';
import DestinationItem from '../../components/destination-item/destination-item.component';
const Destinations = ({ destinationsData }) => {
    return (
        <div className='destinations-container'>
            <Routes>
                {destinationsData.map((planetObj) => (
                    <Route
                        path={`/${planetObj.name.toLowerCase()}`}
                        element={<DestinationItem planetObj={planetObj} />}
                    />
                ))}
            </Routes>
        </div>
    );
};

export default Destinations;
