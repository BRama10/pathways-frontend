"use client"

import { useCombobox } from 'downshift'
import Downshift from 'downshift'
import React, { useState, useEffect } from 'react';


interface DropdownProps {
    countyList: string[];
    setCountyList: (c: string[]) => void;
    userInput: string;
    setUserInput: (c: string) => void;
}

export const DropdownCombobox: React.FC<DropdownProps> = ({
    countyList,
    setCountyList,
    userInput,
    setUserInput
}) => {
    const {
        isOpen,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        highlightedIndex,
        getItemProps,
    } = useCombobox({
        items: countyList,
        onInputValueChange: ({ inputValue }) => {
            if (inputValue)
                setCountyList(
                    countyList.filter((item) =>
                        item.toLowerCase().startsWith(inputValue.toLowerCase()),
                    ),
                )
        },
    })
    return (
        <div>
            <label {...getLabelProps()}>Choose an element:</label>
            <div>
                <input
                    {...getInputProps()}
                    type="text"
                    placeholder="Enter your county here."
                    className="w-full p-4 text-sm md:text-lg text-white bg-transparent focus:outline-none"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button
                    type="button"
                    {...getToggleButtonProps()}
                    aria-label="toggle menu"
                >
                    &#8595;
                </button>
            </div>
            <ul {...getMenuProps()}>
                {isOpen &&
                    countyList.map((item, index) => (
                        <li
                            style={
                                highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}
                            }
                            key={`${item}${index}`}
                            {...getItemProps({ item, index })}
                        >
                            {item}
                        </li>
                    ))}
            </ul>
        </div>
    )
}

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
        setCountyData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

    return (
        <DropdownCombobox countyList={countyData} setCountyList={setCountyData} userInput={userInput} setUserInput={setUserInput} />
    )
}