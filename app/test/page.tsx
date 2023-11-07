"use client"

import React, { useState, useEffect } from 'react';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';


export default function Home() {
    const [userInput, setUserInput] = useState('');

  // Create a state variable to store the county list
  const [countyData, setCountyData] = useState<string[]>([]);


  useEffect(() => {
    // Define your API endpoint or URL
    const apiUrl = 'https://pathways-backend-git-main-hunter-ss-projects.vercel.app/get_county_names'; // Replace with your actual API URL

    // Use the fetch API to make a GET request
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        // Update the state with the fetched data
        const transformedResult = result.map((rs: string) => ({
            id: rs,
            value: rs,
          }));
        setCountyData(transformedResult);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
    
    return (     
        <DatalistInput
    placeholder="Chocolate"
    label="Select ice cream flavor"
    onSelect={(item) => console.log(item.value)}
    items={countyData}
  />
    )
}