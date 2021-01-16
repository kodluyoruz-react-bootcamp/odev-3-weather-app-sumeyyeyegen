// import React, { useContext } from 'react'
// import { ForecastContext } from "../contexts/ForecastContext";
// //import { API_KEY, API_BASE_URL } from '../apis/config';

// const CitySelector = ({ onSearch }) => {
//     const { setCity } = useContext(ForecastContext);
//     // const onSearch = () => {
//     //     fetch(`${API_BASE_URL}?city=${city},TR&days=7&key=${API_KEY}`)
//     //         .then((response) => response.json())
//     //         .then((result) => console.log(result));
//     // };
//     return (
//         <>
//             <div className="row">
//                 <div className="col">
//                     <h1>Search your city</h1>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="container">
//                     <div className="col text-center" >
//                         <input className="form-control" placeholder="Enter city" onChange={(e) => setCity(e.target.value)} value={city} />
//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col">
//                     <button onClick={() => onSearch(city)}> Check Weather</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default CitySelector;