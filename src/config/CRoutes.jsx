import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home';
 import Details from '../pages/Details';
 import Catalog from '../pages/Catalog';
//  class CRoutes extends Component {
//     render() {
//       console.log("sddsd")
//         return (
//             <Routes>
//             <Route path='/:category/search/:keyword' element={<Catalog/>} />
//             <Route path='/:category' element={<Details/>} />
//             <Route path='/tv' exact element={<Home />} />
//             <Route path='/category' element={<Catalog/>} />
//           </Routes>
//         );
//     }
// }

// export default CRoutes;

const CRoutes = () => {
  return (
    <Routes>
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category" element={<Details />} />
      <Route path="/tv" exact element={<Home />} />
      <Route path="/category" element={<Catalog />} />
    </Routes>
  );
};

export default CRoutes;
