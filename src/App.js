import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Routes/Navigation/navigation.component';
import Homepage from './Routes/Homepage/home.component';
import dumm from './Routes/dummy';

function App() {
    return (
        <div className='main-page-container'>
            {' '}
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Homepage />} />
                    <Route path='/destination' element={<dumm />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
