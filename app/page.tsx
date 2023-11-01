"use client"

import Image from 'next/image'
import styles from './index.module.css';
import { parseData, ContactComponent, ChartComponent, PageBody, ComponentA, ComponentC, DifficultyComponent, FairNodeProps, DataProps } from './components';
import React, { useState, useEffect } from 'react';

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

    // Capitalize the first letter of the state
    const county: string = parts[0][0].toUpperCase() + parts[0].slice(1).toLowerCase();
    const state: string = parts[1][0].toUpperCase() + parts[1].slice(1).toLowerCase();

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
  // Create a state variable to store the user's input
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    const inp_data = parseLocationString(userInput);
    if (inp_data) {
      const { county, state } = inp_data;
      // Define your API endpoint
      const apiUrl = `https://pathways-backend-3bo8j60g3-hunter-ss-projects.vercel.app/get_fair_list/${county}/${state}/`;

      // Make the GET request
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Step 3: Update the state variable with the fetched data
          // setFetchedData(data);
          if (data.fair_data.length != 0) {
            var cleanData = [parseData(data.fair_data[0]), parseData(data.fair_data[1])]

            const finalData: DataProps = {
              fairNodes: cleanData,
              num_finalists: data.num_finalists,
              score: data.diff,
            }

            setFetchedData(finalData);
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
        <h1 id="component-a-h1" className="pt-[5%] pl-[5%] pr-[5%]">
          <p className="text-8xl font-bold text-white pb-[5%]">MY</p>
          <p className="text-8xl font-bold text-[#5f5ddc] pb-[2%] pb-[5%]">PATHWAY</p>
          <p className="text-2xl text-left text-white pt-[2%]">Welcome to Project Pathways–<b className="text-[#e5be58]">the most comprehensive tool for the International Science and Engineering Fair available on the internet.</b> Simply enter your county and we’ll deliver an arsenal of data-derived statistics and heuristics that will guide you throughout your research journey.</p>
        </h1>

        <h1 className="text-5xl text-white font-bold text-center self-center pb-[5%] pt-[5%]">Your journey begins <span className="text-[#e5be58]">here</span>.</h1>
        <ComponentC>
          <div className="mt-10 bg-slateblue bg-opacity-40 rounded-[20px] w-5/6 self-center border-[1px] border-solid border-gray-200 backdrop-blur-md flex flex-row items-center">
            <input
              type="text"
              placeholder="Enter your county here."
              className="w-full p-4 text-[18px] text-white bg-transparent focus:outline-none"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </div>
          <section className="grid grid-cols-2">
            <div id='tmp-id-a' className="flex flex-col">
              <div className="rounded-3xl shadow-customB flex justify-end box-border bg-[#141414] w-14 h-40 text-center rotate-90 origin-center self-center">
                <p className="rotate-[270deg] origin-center text-white self-center font-bold text-2xl pt-14">Difficulty*</p>
              </div>
              <DifficultyComponent fairNodes={fetchedData.fairNodes} score={fetchedData.score} num_finalists={fetchedData.num_finalists} />
              <div className='pl-12 self-end self-left w-full h-auto grid grid-cols-1'>
                <h1 className={`row-start-1 col-start-1 ${styles.customYellow} text-[200px] blur-md`}>ISEF</h1>
                <h1 className={`row-start-1 col-start-1 ${styles.customYellow} text-[200px]`}>ISEF</h1>
              </div>

            </div>
            <div id='tmp-id-b' className="flex flex-col">
              <div className="rounded-3xl shadow-customB flex flex-col box-border bg-[#141414] w-auto self-center">
                <div className="text-white self-center font-bold text-2xl px-4 py-4 self-center justify-self-center">Distribution Of Projects</div>
              </div>
              <ChartComponent />

              <div className="rounded-3xl shadow-customB flex flex-col box-border bg-[#141414] w-auto self-center">
                <div className="text-white self-center font-bold text-2xl px-4 py-4 self-center justify-self-center">Important Contacts</div>
              </div>
              <ContactComponent />



            </div>
          </section>
        </ComponentC>
        {/* <img style={{visibility: 'invisible'}} src='/group.svg'></img>
        <img src='/group1.svg'></img>
        <img src='/group2.svg'></img> */}
      </ComponentA>

    </PageBody>
  )
}

