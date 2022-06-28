import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Routes/Navigation/navigation.component';
import Homepage from './Routes/Homepage/home.component';

import Destinations from './Routes/Destinations/destinations.component';

import jsonData from './data.json';
import Crew from './Routes/Crew/crew.component';
import Technology from './Routes/Technology/technology.component';

function App() {
    const { destinations, crew, technology } = jsonData;
    console.log(crew);
    console.log(destinations);
    return (
        <div key='index' className='main-page-container'>
            {' '}
            <Routes>
                <Route path={`${'/'}`} element={<Navigation />}>
                    <Route index element={<Homepage />} />
                    <Route
                        path='destinations/*'
                        element={
                            <Destinations destinationsData={destinations} />
                        }
                    />
                    <Route path='crew' element={<Crew crewArray={crew} />} />
                    <Route
                        path='technology'
                        element={<Technology technologyData={technology} />}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
