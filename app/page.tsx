"use client"

import Image from 'next/image'
import styles from './index.module.css';
import {PathData, FairData, ContactComponent, ChartComponent, ChartProps, PageBody, ComponentA, ComponentC, DifficultyComponent, FairNodeProps, ContactNodeProps } from './components';
import React, { useState, useEffect, useRef, MouseEvent } from 'react';


import Select from './select'


interface Location {
  county: string;
  state: string;
}

interface StaticPath {
  overall_diff: number,
  overall_pred_diff: number,
  overall_finalists: number,
  overall_sectors: string[],
  overall_breakdown: number[],
}


function parseLocationString(input: string): Location | false {
  try {
    // Split the input string by a comma and trim the resulting parts
    const parts: string[] = input.split(',').map(part => part.trim());

    // Check if we have exactly two parts (county and state)
    if (parts.length !== 2) {
      return false;
    }
    // Process the county part to replace spaces with | and remove 'county'
    const county: string = parts[0]
      .replace(/county/gi, '') // Remove 'county'
      .trim()
      .replace(/\s+/g, '+'); // Replace spaces with |

    // Trim left and right spaces
    // Capitalize the first letter of the state
    const state: string = parts[1].replace(/\s+/g, '+');

    return { county, state };
  } catch {
    return false;
  }
}



export default function Home() {
  // const ta: FairNodeProps = {}
  // const tb: FairNodeProps = {}

  // const [fetchedData, setFetchedData] = useState<DataProps>({
  //   fairNodes: [],
  //   num_finalists: 0,
  //   score: 0,
  // });

  const handleStopHover = (e: MouseEvent) => {
    const tmpIdABElement = (e.target as HTMLElement).closest('#tmp-id-a-b');
  
    if (tmpIdABElement) {
      // The target is the element with id 'tmp-id-a-b' or one of its children.
      // You can place your code here if the condition is met.

    } else {
      // If it reaches this point, it means the target is not 'tmp-id-a-b' or its child.
      setIsHovered(false);
    }
  };

  const [parsedContacts, setParsedContacts] = useState<ContactNodeProps>({
    names: ['Jane Doe'],
    emails: ['example@mail.com']
  });

  // Create a state variable to store the user's input
  const [userInput, setUserInput] = useState('');

  const [isActive, setIsActive] = useState<boolean>(false);

  // Create a state variable to store the county list
  const [countyData, setCountyData] = useState<string[]>([]);
  // const [baseData, setBaseData] = useState<PathData[]>([{
  //   overall_diff: 0,
  //   overall_pred_diff: 0,
  //   overall_finalists: 0,
  //   overall_sectors: [],
  //   overall_breakdown: [],
  //   nodes: [],
  // }]);

  const [baseData, setBaseData] = useState<PathData[]>([]);

  const [singleCount, setSingleCount] = useState(0);

  const [currentPath, setCurrentPath] = useState<PathData>({
    overall_diff: 0,
    overall_pred_diff: 0,
    overall_finalists: 0,
    overall_sectors: [],
    overall_breakdown: [],
    nodes: [],
  });


  const [baseCurrentPath, setBaseCurrentPath] = useState<StaticPath>({
    overall_diff: 0,
    overall_pred_diff: 0,
    overall_finalists: 0,
    overall_sectors: [] as string[],
    overall_breakdown: [] as number[],
  })

  const [isHovered, setIsHovered] = useState<boolean | undefined>(undefined);
  const [isClicked, setIsClicked] = useState(false);

  function handleHover(a:any, b:any, c:any, d:any, e:any) {
    setIsHovered(true);
    // setIsClicked(false); // Reset the click state
    console.log('hovering')

    setCurrentPath((prevCurrentPath) => ({
      ...prevCurrentPath,
      overall_finalists: a,
      overall_diff: b,
      overall_pred_diff: c,
      overall_sectors: d,
      overall_breakdown: e,
    }));

    

    // console.log(updatedCurrentPath);

    // setCurrentPath(updatedCurrentPath);
  };

  // Function to call when stopping hovering
  

  // useEffect(() => {
  //   if(!isHovered) {
  //     console.log(baseStateRef.current)
  //   setCurrentPath((prevCurrentPath) => ({
  //     ...prevCurrentPath,
  //     ...baseCurrentPath,
  //   }));
  // }
  // }, [isHovered])

  // Function to call when clicking on the element
  function handleClick(a:any, b:any, c:any, d:any, e:any) {
    setIsClicked(!isClicked);
  };


  useEffect(() => {
    // console.log(baseCurrentPath);
  }, [baseCurrentPath]);

  const [count, setCount] = useState(0);
  const [pathChange, setPathChange] = useState(false);

  useEffect(() => {
    // console.log(currentPath);
    // console.log(count);
    if (currentPath.overall_diff !== 0 && pathChange) {
      // console.log('here')
      // Increment the count state
      setBaseCurrentPath({
        overall_diff: currentPath.overall_diff,
        overall_pred_diff: currentPath.overall_pred_diff,
        overall_finalists: currentPath.overall_finalists,
        overall_sectors: currentPath.overall_sectors,
        overall_breakdown: currentPath.overall_breakdown,
      })
      setPathChange(false) 

    } else if (currentPath.overall_diff == 0) {
      // setCount(0);
    } else {
      // setCount(2);
    }

    if (currentPath.nodes.length > 0) {
      setParsedContacts({
        names: currentPath.nodes.map(({ node }) => node.contact || ''),
        emails: currentPath.nodes.map(({ node }) => node.email || ''),
      } as ContactNodeProps)
    }
  
  }, [currentPath]);

  // useEffect(() => {
  //   if (count == 1) {
  //     // console.log('we got called ayy')
  //     setBaseCurrentPath({
  //       overall_diff: currentPath.overall_diff,
  //       overall_pred_diff: currentPath.overall_pred_diff,
  //       overall_finalists: currentPath.overall_finalists,
  //       overall_sectors: currentPath.overall_sectors,
  //       overall_breakdown: currentPath.overall_breakdown,
  //     })
  //   }
  // }, [count]);

  useEffect(() => {
    // Define your API endpoint or URL
    const apiUrl = 'https://pathways-backend-git-main-hunter-ss-projects.vercel.app/get_county_names'; // Replace with your actual API URL
    // console.log(currentPath);

    // Use the fetch API to make a GET request
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        // Update the state with the fetched data
        const transformedResult = result.map((rs: string) => ({
          value: rs,
          label: rs,
        }));
        setCountyData(transformedResult);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const inp_data = parseLocationString(userInput);
    
    if (inp_data) {
      const { county, state } = inp_data;
      // Define your API endpoint
      const apiUrl = `https://pathways-backend-git-main-hunter-ss-projects.vercel.app/get_fair_list/${county}/${state}/`;
      // console.log(apiUrl)
      // Make the GET request
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data: any) => {
          
          // const baseDataCopy = [...baseData]; // Create a copy of the current state
          // console.log(baseDataCopy);
          const baseDataCopy = [];
          
          for (const dp of data) {
            var parsedRes: PathData = {
              overall_diff: dp.overall_diff,
              overall_pred_diff: dp.overall_pred_diff,
              overall_breakdown: dp.overall_breakdown,
              overall_finalists: dp.overall_finalists,
              overall_sectors: dp.overall_sectors,
              nodes: [],
            };
  
            for (const d of dp.fair_data) {
              var tfnp: FairNodeProps = {
                title: d.name,
                code: d.code,
                contact: d.contact_name,
                email: d.email,
                website: d.website,
                isStart: false,
              };
  
              var tfd: FairData = {
                node: tfnp,
                num_finalists: d.num_finalists,
                pred_diff: d.pred_diff,
                diff: d.diff,
                sectors: d.sectors,
                breakdown: d.breakdown,
                handleHover: handleHover,
                handleClick: handleClick,
              };
  
              parsedRes.nodes.push(tfd);
            }
  
            baseDataCopy.push(parsedRes);
          }
          
          // console.log(baseDataCopy);
          setPathChange(true);
          setIsActive(true);
          setBaseData(baseDataCopy);
          // setCurrentPath(baseDataCopy[0]);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [userInput]);

  const didMountBaseRef = useRef(false);

  useEffect(() => {
    console.log(baseData);
    console.log(isActive)
    if (baseData.length > 0) {
      if (isActive) {
        console.log('WTF')
        setCurrentPath(baseData[1])
      }
    }
  }, [baseData]);

  useEffect(() => {
    console.log(currentPath);
    console.log(baseCurrentPath);
  }, [currentPath]);

  const switchPath = () => {
    var index = baseData.findIndex((object) => {
      const isEqual = require('lodash/isEqual');
      return isEqual(currentPath, object);
    });
    // console.log(`index ${index}`)
    index = index+1;

    if (index == baseData.length) {
      index = 0;
    } 
    console.log(index);
    console.log(baseData[index])
    setPathChange(true);
    setCurrentPath(baseData[index])
  }


  return (
    <PageBody onCustomEvent={handleStopHover}>
      <ComponentA>
        <div id='top-container' className={`w-full grid grid-cols-1`}>
          <div id='top-filter' className={`row-start-1 col-start-1 ${styles.topBackgroundFilter} w-full`}></div>
          <div id='top-bg' className={`row-start-1 col-start-1 ${styles.topBackground} max-h-full w-full grid grid-cols-3 grid-rows-2`}></div>
          {/* <img src='/group.svg' className="absolute top-[1px] right-[5px] z-30"></img> */}
          {/* <img src='/group2.svg' className="absolute top-[1px] left-[5px]"></img>
            <img src='/group1.svg' className="row-start-1 col-start-2"></img>
            <img src='/group.svg' className="row-start-1 col-start-2"></img> */}

          <div id='top-text' className='w-full row-start-1 col-start-1 flex flex-col '>
            <h1 id="component-a-h1" className="pt-[5%] pl-[5%] pr-[5%] z-10">
              <p className="text-5xl md:text-8xl font-bold text-white">MY</p>
              <p className="text-5xl md:text-8xl font-bold text-[#5f5ddc] pb-[1%]">PATHWAY</p>
              <p className="text-lg md:text-2xl text-left text-white pt-[1%]">Welcome to Project Pathways–<b className="text-[#e5be58]">the most comprehensive tool for the International Science and Engineering Fair available on the internet.</b> Simply enter your county and we’ll deliver an arsenal of data-derived statistics and heuristics that will guide you throughout your research journey.</p>
            </h1>

            <h1 className="text-3xl md:text-5xl text-white font-bold text-center self-center pb-[10%] md:pb-[5%] pt-[5%] z-10">Your journey begins <span className="text-[#e5be58]">here</span>.</h1>
          </div>
        </div>
        <div id='bottom' className={`${styles.bottomBackground} flex flex-col`}>
          <ComponentC>
            <div className="bg-slateblue bg-opacity-40 rounded-[20px] w-[90%] self-center border-[1px] border-solid border-gray-200 backdrop-blur-md flex flex-row items-center">
              <Select options={countyData} oifunct={setUserInput}></Select>
            </div>
            { isActive ? 
            (<><button className="rounded-3xl shadow-customB flex flex-col box-border bg-[#141414] w-auto self-center mt-[3%] transition-transform transform hover:scale-105" onClick={switchPath}>
            <div className="text-white self-center font-bold text-[0.65rem] md:text-[0.8rem] lg:text-xl px-4 py-4 justify-self-center w-max-full">Switch Path</div>
          </button>
            <section className="grid grid-cols-2 pt-[3%] gap-x-2 h-auto">
              <div id='tmp-id-a' className="flex flex-col flex-start">
                <div className="rounded-3xl shadow-customB flex flex-col box-border bg-[#141414] w-auto self-center mb-[5%]">
                  <div className="text-white self-center font-bold text-[0.65rem] md:text-[0.8rem] lg:text-xl px-4 py-4 justify-self-center w-max-full">Difficulty*</div>
                </div>
                {/* <p>{currentPath.overall_diff}</p> */}
                <p>{currentPath.overall_diff}</p>
                <p>{baseCurrentPath.overall_diff}</p>
                {isHovered === false ? (
                  <DifficultyComponent overall_diff={baseCurrentPath.overall_diff} overall_breakdown={baseCurrentPath.overall_breakdown} overall_finalists={baseCurrentPath.overall_finalists} overall_pred_diff={baseCurrentPath.overall_pred_diff}  overall_sectors={baseCurrentPath.overall_sectors} nodes={currentPath.nodes}/>
                ) : (
                  <DifficultyComponent overall_diff={currentPath.overall_diff} overall_breakdown={currentPath.overall_breakdown} overall_finalists={currentPath.overall_finalists} overall_pred_diff={currentPath.overall_pred_diff}  overall_sectors={currentPath.overall_sectors} nodes={currentPath.nodes}/>
                )}
                



              </div>
              <div id='tmp-id-b' className="flex flex-col" onMouseEnter={handleStopHover}>
                <div className="rounded-3xl shadow-customB flex flex-col box-border bg-[#141414] w-auto self-center mb-[5%]">
                  <div className="text-white self-center font-bold text-[0.65rem] md:text-[0.8rem] lg:text-xl px-4 py-4 self-center justify-self-center">Distribution Of Projects</div>
                </div>
                {isHovered === false ? (
                  <ChartComponent label_list={baseCurrentPath.overall_sectors} breakdown={baseCurrentPath.overall_breakdown} />
                ) : (
                  <ChartComponent label_list={currentPath.overall_sectors} breakdown={currentPath.overall_breakdown} />
                )}
                
                <div className='relative self-center w-5/6 h-auto'>
                  <div className="relative rounded-3xl flex flex-col box-border bg-[#141414] w-1/2 self-center z-20 md:mb-[-15px] lg:mb-[-25px] md:ml-[-8px] lg:ml-[-20px]">
                    <div className="text-white self-center font-bold text-[0.65rem] md:text-[0.8rem] lg:text-xl px-4 py-4 self-center justify-self-center">Important Contacts</div>
                  </div>
                  <ContactComponent emails={parsedContacts.emails} names={parsedContacts.names} />
                </div>


              </div>
            </section></>) : <div className="h-[20px] w-full"></div> }
          </ComponentC>
          { isActive ? (<></>) : (<div className="h-[100px] w-full"></div>) }
          {/* { isActive ? <div className="h-[100px] w-full"> : <></>}  */}
        </div>
        {/* <img style={{visibility: 'invisible'}} src='/group.svg'></img>
        <img src='/group1.svg'></img>
        <img src='/group2.svg'></img> */}
      </ComponentA>

    </PageBody>
  )
}