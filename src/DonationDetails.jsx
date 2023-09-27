import React from 'react';
import { useParams } from 'react-router-dom';

const DonationDetails = () => {
  const { id } = useParams(); // Get the donation ID from the URL

  // Fetch and display donation details based on the id

  return (
    <div>
      <h2>Donation Details</h2>
      <p>Details for Donation ID: {id}</p>
      {/* Fetch and display specific donation details here */}
    </div>
  );
};

export default DonationDetails;
