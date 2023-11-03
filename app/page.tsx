"use client"

import Image from 'next/image'
import styles from './index.module.css';
import { parseData, ContactComponent, ChartComponent, ChartProps, PageBody, ComponentA, ComponentC, DifficultyComponent, FairNodeProps, DataProps, ContactNodeProps } from './components';
import React, { useState, useEffect } from 'react';
import DropdownCombobox from './dropdown';

interface Location {
  county: string;
  state: string;
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
  const ta: FairNodeProps = {}
  const tb: FairNodeProps = {}

  const [fetchedData, setFetchedData] = useState<DataProps>({
    fairNodes: [ta, tb],
    num_finalists: 0,
    score: 0,
  });

  const [fetchedDataBreakdown, setFetchedDataBreakdown] = useState<ChartProps>({
    label_list: undefined,
    breakdown: undefined,
  });

  const [fetchedContacts, setContacts] = useState<ContactNodeProps>({
    names: ['Jane Doe'],
    emails: ['example@mail.com']
  });
  // Create a state variable to store the user's input
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

  useEffect(() => {
    const inp_data = parseLocationString(userInput);
    if (inp_data) {
      const { county, state } = inp_data;
      // Define your API endpoint
      const apiUrl = `https://pathways-backend-git-main-hunter-ss-projects.vercel.app/get_fair_list/${county}/${state}/`;

      // Make the GET request
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data: any | number) => {
          if (data != 0) {
            const chartProps: ChartProps = {
              label_list: data.sectors,
              breakdown: data.breakdown
            }

            setFetchedDataBreakdown(chartProps);

            // Step 3: Update the state variable with the fetched data
            // setFetchedData(data);
            const contactNames: string[] = [];
            const emails: string[] = [];

            // Iterate through the array and extract the attributes
            data.fair_data.forEach((item: any) => {
              contactNames.push(item.contact_name);
              emails.push(item.email);
            });

            const contactProps: ContactNodeProps = {
              names: contactNames,
              emails: emails
            };

            setContacts(contactProps)

            if (data.fair_data.length != 0) {
              var cleanData = [parseData(data.fair_data[0]), parseData(data.fair_data[1])]

              const finalData: DataProps = {
                fairNodes: cleanData,
                num_finalists: data.num_finalists,
                score: data.diff,
              }

              setFetchedData(finalData);
            }
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [userInput]);

  return (
    <PageBody>
      <ComponentA>
        <div id='top-container' className={`w-full grid grid-cols-1`}>
          <div id='top-filter' className={`row-start-1 col-start-1 ${styles.topBackgroundFilter} w-full`}></div>
          <div id='top-bg' className={`row-start-1 col-start-1 ${styles.topBackground} max-h-full w-full grid grid-cols-3 grid-rows-2`}></div>
          <img src='/group.svg' className="absolute top-[1px] right-[5px] z-30"></img>
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
            <div className="mt-10 bg-slateblue bg-opacity-40 rounded-[20px] w-5/6 self-center border-[1px] border-solid border-gray-200 backdrop-blur-md flex flex-row items-center">
              <DropdownCombobox countyList={countyData} setCountyList={setCountyData} userInput={userInput} setUserInput={setUserInput} />
              {/* <datalist id="options">
                {countyData.map((option, index) => (
                  <option key={index} value={option} />
                ))}
              </datalist> */}
            </div>
            <section className="grid grid-cols-2 pt-[3%] gap-x-2 h-auto">
              <div id='tmp-id-a' className="flex flex-col flex-start">
                <div className="rounded-3xl shadow-customB flex flex-col box-border bg-[#141414] w-auto self-center mb-[5%]">
                  <div className="text-white self-center font-bold text-sm md:text-2xl px-4 py-4 self-center justify-self-center w-max-full">Difficulty*</div>
                </div>

                <DifficultyComponent fairNodes={fetchedData.fairNodes} score={fetchedData.score} num_finalists={fetchedData.num_finalists} />



              </div>
              <div id='tmp-id-b' className="flex flex-col">
                <div className="rounded-3xl shadow-customB flex flex-col box-border bg-[#141414] w-auto self-center mb-[5%]">
                  <div className="text-white self-center font-bold text-xs md:text-2xl px-4 py-4 self-center justify-self-center">Distribution Of Projects</div>
                </div>
                <ChartComponent label_list={fetchedDataBreakdown.label_list} breakdown={fetchedDataBreakdown.breakdown} />

                <div className="rounded-3xl shadow-customB flex flex-col box-border bg-[#141414] w-auto self-center">
                  <div className="text-white self-center font-bold text-xs md:text-2xl px-4 py-4 self-center justify-self-center">Important Contacts</div>
                </div>
                <ContactComponent emails={fetchedContacts.emails} names={fetchedContacts.names} />



              </div>
            </section>
          </ComponentC>
        </div>
        {/* <img style={{visibility: 'invisible'}} src='/group.svg'></img>
        <img src='/group1.svg'></img>
        <img src='/group2.svg'></img> */}
      </ComponentA>

    </PageBody>
  )
}

