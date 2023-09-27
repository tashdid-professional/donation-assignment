import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

import Donation from './Donation';
import Statistics from './Statistics';
import Home from './Home';
import DonationDetails from './DonationDetails'; // Import the new component

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/donation" element={<Donation />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/" element={<Home />} />
          <Route path="/donation/details/:id" element={<DonationDetails />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
