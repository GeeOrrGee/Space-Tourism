import { Routes, Route, useNavigate } from 'react-router-dom';
import './destinations.styles.scss';
import DestinationItem from '../../components/destination-item/destination-item.component';
import { useEffect } from 'react';
const Destinations = ({ destinationsData }) => {
    let navigate = useNavigate();
    useEffect(() => {
        navigate('/destinations/moon');
    }, []);

    return (
        <section className='destinations-container'>
            <Routes>
                {destinationsData.map((planetObj) => {
                    // if (planetObj.name === 'Moon') {
                    //     console.log(planetObj);
                    //     <Route
                    //         index
                    //         path={`/${planetObj.name}`}
                    //         element={<DestinationItem planetObj={planetObj} />}
                    //     />;

                    return (
                        // <Route
                        //     path={`/${
                        //         planetObj.name === 'Moon' ? '' : planetObj.name //active link is bugged because of non-index route/modified paths
                        //     }`}
                        //     element={<DestinationItem planetObj={planetObj} />}
                        // />
                        <>
                            {/* {planetObj.name === 'Moon' && (
                                // <Route
                                //     index
                                //     planetObj={planetObj}
                                //     element={
                                //         <DestinationItem
                                //             planetObj={planetObj}
                                //         />
                                //     }
                                // />
                                )} */}
                            <Route
                                // index={planetObj.name === 'Moon' && true}
                                path={`/${planetObj.name}`}
                                element={
                                    <DestinationItem planetObj={planetObj} />
                                }
                            />
                        </>
                    );
                })}

                {/* <Route
                    path='/*'
                    element={
                        <DestinationItem
                        planetObj={destinationsData.find(
                            (planetO) => planetO.name === 'Moon'
                            )}
                            />
                        }
                    /> */}
            </Routes>
        </section>
    );
};

export default Destinations;
