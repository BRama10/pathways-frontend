import React, { useState, useEffect } from 'react';

import {  Autocomplete,  AutocompleteSection,  AutocompleteItem, PopoverContent} from "@nextui-org/react";

interface SelectorProps {
    options: {
      [key: string]: string[];
    };
    oifunct: (county: string, state: string) => void;
}

const CustomSelect = ({options, oifunct}: SelectorProps) => {
  const [state, setState] = useState<string | null>(null);
  const [county, setCounty] = useState< string | null>(null);

  const handleInputChange = () => {
      oifunct(county!, state!); // Call the provided function to update userInput
  };

  useEffect(() => {
    if(county != null) {
      console.log(state, county);
      handleInputChange();
    }
  }, [county])
  

  useEffect(() => {
    console.log('state', state);
    console.log('county', county);
    console.log('options', options);
  }, [state, county, options])

  return (
    <div className='flex flex-col gap-y-2 w-full h-auto'>
      <Autocomplete 
        label="Choose your state" 
        className="" 
        onSelectionChange={(e) => {try{setState(e.toString())} catch{setState('')}}}
        classNames={{
          base: "rounded-[8px] w-[90%] self-center border-[1px] border-solid border-gray-200 backdrop-blur-md bg-slateblue bg-opacity-40 ",
          // listboxWrapper: "bg-slateblue bg-opacity-40 ",
          // listbox: "bg-slateblue bg-opacity-40 ",
          // popoverContent: "bg-slateblue bg-opacity-40 "
        }}
        inputProps={{
          classNames: {

            inputWrapper: "rounded-[8px] self-center border-[1px] border-solid border-gray-200 backdrop-blur-md bg-slateblue bg-opacity-40 ",
            innerWrapper: "text-white",
            input: " bg-transparent text-white/90"
          },
        }}
        listboxProps={{
          classNames: {
            list: "text-black"
          }
        }}
        // listboxProps={{ 
        //   classNames: {
        //     base: "bg-slateblue bg-opacity-40",
        //     emptyContent: "bg-slateblue bg-opacity-40 ",
        //     list: "bg-slateblue bg-opacity-40 ",
        //   }
        // }}
        // popoverProps={{
        //   classNames: {
        //     base: "bg-slateblue bg-opacity-40",
        //     backdrop: "bg-slateblue bg-opacity-40 ",
        //     content: "bg-slateblue bg-opacity-40 ",
        //     trigger: "bg-slateblue bg-opacity-40 ",
        //   }
        // }}
        
        // onInputChange={(e) => setState(e)}
      >
        {Object.keys(options).map((option) => (
          <AutocompleteItem key={option} value={option}>
            {option}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      {state !== null && state !== '' && (<Autocomplete 
        label="Choose your county" 
        classNames={{
          base: "rounded-[8px] w-[90%] self-center border-[1px] border-solid border-gray-200 backdrop-blur-md bg-slateblue bg-opacity-40 ",
          // listboxWrapper: "bg-slateblue bg-opacity-40 ",
          // listbox: "bg-slateblue bg-opacity-40 ",
          // popoverContent: "bg-slateblue bg-opacity-40 "
        }}
        inputProps={{
          classNames: {

            inputWrapper: "rounded-[8px] self-center border-[1px] border-solid border-gray-200 backdrop-blur-md bg-slateblue bg-opacity-40 ",
            input: "text-white"
          },
        }}
        onSelectionChange={(e) => {try{setCounty(e.toString())} catch{setCounty('')}}}
        // onInputChange={(e) => setState(e)}
      >
        {options[state].map((option) => (
          <AutocompleteItem key={option} value={option}>
            {option}
          </AutocompleteItem>
        ))}
      </Autocomplete>)}
    </div>
  )
}

// const CustomSelect = ({
// 	options,
//     oifunct,
// }: SelectorProps) => {
// 	const id = Date.now().toString();
//   // const [inputValue, setInputValue] = useState('');
// 	const [isMounted, setIsMounted] = useState(false);

// 	// Must be deleted once
// 	// https://github.com/JedWatson/react-select/issues/5459 is fixed.
// 	useEffect(() => setIsMounted(true), []);

//     const handleInputChange = (input: any) => {
//         console.log(input)
//         // setInputValue(input.label);
//         oifunct(input.value); // Call the provided function to update userInput
//     };


//   // useEffect(() => {console.log(inputValue)}, [inputValue]);
// 	return isMounted ? (
// 		<Autocomplete 
//         label="Select an animal" 
//         className="max-w-xs" 
//       >
//         {options.map((option) => (
//           <AutocompleteItem key={option} value={option}>
//             {option}
//           </AutocompleteItem>
//         ))}
//       </Autocomplete>
// 	) : null;
// };

export default CustomSelect;