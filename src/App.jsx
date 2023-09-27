import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Cards from './Cards';
import DonationDetails from './DonationDetails';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/donation/details/:id" element={<DonationDetails />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
