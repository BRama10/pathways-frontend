import React, { useState, useEffect } from 'react';

import Select from 'react-select'

interface SelectorProps {
    options: string[];
    oifunct: (arg0: string) => void;
}

const CustomSelect = ({
	options,
    oifunct,
}: SelectorProps) => {
	const id = Date.now().toString();
	const [isMounted, setIsMounted] = useState(false);

	// Must be deleted once
	// https://github.com/JedWatson/react-select/issues/5459 is fixed.
	useEffect(() => setIsMounted(true), []);

    const handleInputChange = (input: any) => {
        console.log(input)
        oifunct(input.value); // Call the provided function to update userInput
    };

	return isMounted ? (
		<Select 
            id={id}
            options={options}
            menuPortalTarget={document.body}
            onChange={handleInputChange}
            styles={{
              input: (baseStyles, state) => ({
                ...baseStyles,
                color: 'white',
              }),
              singleValue: (baseStyles, state) => ({
                ...baseStyles,
                color: 'white',
              }),
              container: (baseStyles, state) => ({
                ...baseStyles,
                width: '100%',
                borderRadius: '20px',
              }),
              control : (baseStyles, state) => ({
                ...baseStyles,
                borderRadius: '20px',
                background: 'inherit',
                color: 'white',
                height: '60px',
              }),
              option : (baseStyles, state) => ({
                ...baseStyles,
                zIndex: 20,
                background: 'black',
                color: 'white'
              }),
              menuPortal: (base) => ({
                ...base,
                zIndex: 20, // Set your desired z-index value
              }),
              menu : (baseStyles, state) => ({
                ...baseStyles,
                background: 'inherit',
              }),
            }}
             />
	) : null;
};

export default CustomSelect;