import React, { useState, useEffect } from 'react';
import { mapMargins, mapDimensions } from '../utils';
import styles from './index.module.css';
import Key from '../public/key.svg'
import Vector1 from '../public/group1.svg'
import { Pie } from 'react-chartjs-2';

import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
Chart.register(ArcElement, Tooltip, Legend);

export function parseData(data: any): FairNodeProps {
  // Use type assertions to map properties
  const parsedData: FairNodeProps = {
    title: data.name,
    code: data.code,
    contact: data.contact_name,
    email: data.email,
    website: data.website,
    isStart: false,
  };

  return parsedData;
}


export interface FairNodeProps {
  title?: string | undefined;
  code?: string | undefined;
  website?: string | undefined;
  contact?: string | undefined;
  isStart?: boolean | undefined;
  email?: string | undefined;
}

export interface DataProps {
  fairNodes?: FairNodeProps[] | undefined;
  num_finalists?: number | undefined;
  score?: number | undefined;
}

export interface ContactNodeProps {
  names?: string[] | undefined;
  emails?: string[] | undefined;
}

export function PageBody({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {

    const useMD = () => mapDimensions('page-body');

    window.addEventListener('resize', useMD);

    return () => {
      window.removeEventListener('resize', useMD);
    };
  }, []);

  return (
    <main id="" className="flex min-h-max h-full max-w-screen">
      {children}
    </main>
  );
}


export const FairNode: React.FC<FairNodeProps> = ({
  title = 'ISEF-Affiliated Regional Fair',
  code = 'USNC01',
  website = 'www.randomfair.org',
  contact = 'Jane Doe',
  isStart = false,
  email = 'email@email.org',
}) => {
  useEffect(() => {

    const useMD = () => mapDimensions('fair-list');
    const useMDA = () => mapDimensions('node-a');

    window.addEventListener('resize', useMD);
    window.addEventListener('resize', useMDA);

    return () => {
      window.removeEventListener('resize', useMD);
      window.removeEventListener('resize', useMDA);
    };
  }, []);

  return (
    <div id="fair-list" className="flex w-full h-auto flex-row pb-2 md:pb-8">
      <div className="w-[13%] h-auto">
        <div className="rounded-[50%] border-4 md:border-8 border-solid border-[#5da6dc] w-[20px] md:w-[40px] aspect-square"></div>
        <div className="border-2 md:border-4 border-solid border-[#5da6dc] w-[4px] md:w-[8px] h-[85%] box-border ml-2 md:ml-4"></div>
      </div>
      <div id="node-a" className="flex flex-col w-full h-full">
        <h1 className={`${styles.customYellow} font-bold md:font-normal text-sm md:text-3xl pb-2 pl-4`}>{title}</h1>
        <div className="grid grid-cols-2 justify-between w-full pt-px pb-px">
          <h2 className="col-start-1 row-start-1 font-bold text-[0.5rem] md:text-lg text-white">{code}</h2>
          <h2 className="col-start-2 row-start-1 font-normal text-[0.5rem] md:text-lg text-white">Contact: {contact}</h2>
        </div>
        <h2 className="font-normal text-[0.75rem] md:text-xl text-white pt-px pb-px underline"><a href={website}>Website</a></h2>
        <h2 className="font-normal text-[0.75rem] md:text-xl text-white pt-px underline"><a href={email}>Email</a></h2>
      </div>

    </div>
  )
}


export function ComponentA({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {

    const useMD = () => mapDimensions('component-a');
    const useMDA = () => mapDimensions('component-a-h1');

    window.addEventListener('resize', useMD);
    window.addEventListener('resize', useMDA);

    return () => {
      window.removeEventListener('resize', useMD);
      window.removeEventListener('resize', useMDA);
    };
  }, []);

  return (
    <section id='component-a' className={`w-full h-full flex flex-col`}>
      {children}
    </section>
  );
}

export function ComponentC({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {

    const useMD = () => mapDimensions('component-c');
    const useMDA = () => mapDimensions('component-c-a');
    const useMDB = () => mapDimensions('component-c-b');
    const useMDC = () => mapDimensions('component-c-b-a');
    const useMDTA = () => mapDimensions('tmp-id-a');
    const useMDTB = () => mapDimensions('tmp-id-b');
    const useMDTAB = () => mapDimensions('tmp-id-a-b');


    window.addEventListener('resize', useMD);
    window.addEventListener('resize', useMDA);
    window.addEventListener('resize', useMDB);
    window.addEventListener('resize', useMDC);
    window.addEventListener('resize', useMDTA);
    window.addEventListener('resize', useMDTB);
    window.addEventListener('resize', useMDTAB);

    return () => {
      window.removeEventListener('resize', useMD);
      window.removeEventListener('resize', useMDA);
      window.removeEventListener('resize', useMDB);
      window.removeEventListener('resize', useMDC);
      window.removeEventListener('resize', useMDTA);
      window.removeEventListener('resize', useMDTB);
      window.removeEventListener('resize', useMDTAB);
    };
  }, []);

  return (
    <section id='component-c' className={`grid-cols-1 h-auto w-5/6 grid self-center mb-[5%] pt-[3%]`}>
      <section id='component-c-a' className={`blur-[50px] md:blur-[100px] row-start-1 col-start-1 w-5/6 ml-auto mr-auto h-full max-h-full pt-[3%] bg-[#2a279b] rounded-[54px] shadow-customA `}></section>
      <section id='component-c-b' className={`row-start-1 col-start-1 w-5/6 ml-auto mr-auto h-full max-h-full pt-[3%]  bg-black rounded-[54px] shadow-customA z-10 flex flex-col`}>
        {children}
      </section>
    </section>
  );
}

export const DifficultyComponent: React.FC<DataProps> = ({
  fairNodes = [],
  score = 8.0,
  num_finalists = 0,
}) => {
  useEffect(() => {
    const useMM = () => mapMargins('comp-lvl-1-b-child', 'comp-lvl-1-b', 'left', 'tmp-id-a-b')

    // const useMD = () => mapDimensions('diff-component');
    // const useMDA = () => mapDimensions('comp-lvl-1');
    // const useMDB = () => mapDimensions('comp-lvl-2');
    // const useMDC = () => mapDimensions('comp-lvl-1-a');
    // const useMDD = () => mapDimensions('comp-lvl-1-b');
    // const useMDE = () => mapDimensions('comp-lvl-2-a');
    // const useMDF = () => mapDimensions('comp-lvl-2-b');
    window.addEventListener('resize', useMM);
    // window.addEventListener('resize', useMD);
    // window.addEventListener('resize', useMDA);
    // window.addEventListener('resize', useMDB);
    // window.addEventListener('resize', useMDC);
    // window.addEventListener('resize', useMDD);
    // window.addEventListener('resize', useMDE);
    // window.addEventListener('resize', useMDF);

    return () => {
      window.removeEventListener('resize', useMM);
    //   window.removeEventListener('resize', useMD);
    //   window.removeEventListener('resize', useMDA);
    //   window.removeEventListener('resize', useMDB);
    //   window.removeEventListener('resize', useMDC);
    //   window.removeEventListener('resize', useMDD);
    //   window.removeEventListener('resize', useMDE);
    //   window.removeEventListener('resize', useMDF);
    };
  }, []);

  return (
    <>
      {/* <section id='diff-component' className={`flex w-full h-auto pb-[5%]`}> */}
      <section id='diff-component' className={`grid grid-cols-diffComp grid-rows-diffRows w-full h-auto pb-[5%]`}>

        {/* <section id='comp-lvl-1' className="flex w-2/3 md:w-3/4 flex-col"> */}
        <div id='comp-lvl-1-a' className="font-bold text-[#e5be58] self-center justify-self-center text-xl md:text-4xl mb-4 md:mb-8">2023</div>
        <div className="font-bold text-[#39c783] self-center justify-self-center text-lg md:text-4xl mb-4 md:mb-8">2024</div>

        <div id='comp-lvl-1-b' className="grid grid-cols-1 self-start w-full">
          <div id="comp-lvl-1-b-child" className="row-start-1 col-start-1 w-3/4 aspect-square bg-[#e5be58] rounded-[14px] md:rounded-[31px] self-center justify-self-center"></div>
          <div className="blur-[30px] row-start-1 col-start-1 w-3/4 bg-[#e5be58] aspect-square rounded-[14px] md:rounded-[31px] self-center justify-self-center"></div>
          <div className="row-start-1 col-start-1 font-bold text-white text-4xl md:text-8xl self-center justify-self-center z-10">{score}</div>
        </div>


        {/* <section id='comp-lvl-2' className="w-1/3 md:w-1/4 flex flex-col"> */}
        <section id='comp-lvl-2' className="w-full flex flex-col justify-between items-center justify-self-center">
          <div id='comp-lvl-2-a' className="grid grid-cols-1 w-3/4 pb-4 md:pb-12">
            <div className=" row-start-1 col-start-1 w-3/4 aspect-square bg-[#39c783] rounded-[6px] md:rounded-[20px] self-center justify-self-center"></div>
            <div className="blur-[30px] row-start-1 col-start-1 w-3/4 aspect-square bg-[#39c783] rounded-[6px] md:rounded-[20px] self-center justify-self-center"></div>
            <div className=" row-start-1 col-start-1 font-bold text-white text-lg md:text-3xl self-center justify-self-center z-10">8.5</div>
          </div>
          <div className="font-bold text-[#5da6dc] self-center text-[0.75rem] md:text-xl lg:text-3xl pb-[0.5%]">FINALISTS</div>
          <div id='comp-lvl-2-b' className="grid grid-cols-1 w-3/4 pt-1 md:pt-8">
            <div className=" row-start-1 col-start-1 w-3/4 aspect-square bg-[#5da6dc] rounded-[6px] md:rounded-[20px] self-center justify-self-center"></div>
            <div className="blur-[30px] row-start-1 col-start-1 w-3/4 aspect-square bg-[#5da6dc] rounded-[6px] md:rounded-[20px] self-center justify-self-center"></div>
            <div className=" row-start-1 col-start-1 font-bold text-white text-lg md:text-3xl self-center justify-self-center z-10">{num_finalists}</div>
          </div>
        </section>
      </section>




      <div id='tmp-id-a-b' className="flex flex-col pt-12% ml-[50.72px] md:pt-[25%] pb-[5%]">
        {fairNodes.map((fairNode, index) => (
          <FairNode key={index} {...fairNode} />
        ))}
        <div className='w-full h-auto grid grid-cols-1 mt-0 justify-start items-start'>
          <h1 className={`row-start-1 col-start-1 ${styles.customYellow} text-[2.75rem] md:text-[150px] lg:text-[200px] blur-md pb-[20%] pr-[30%] self-start`}>ISEF</h1>
          <h1 className={`row-start-1 col-start-1 ${styles.customYellow} text-[2.75rem] md:text-[150px] lg:text-[200px] pb-[20%] pr-[30%] self-start`}>ISEF</h1>
        </div>
      </div>
    </>
  );
}


export const ChartComponent: React.FC<DataProps> = ({ fairNodes = [] }) => {
  const data = {
    labels: ['Environmental Engineering',
    'Plant Sciences',
    'Computational Biology and Bioinformatics',
    'Physics and Astronomy',
    'Earth and Environmental Sciences',
    'Robotics and Intelligent Machines',
    'Biochemistry',
    'Systems Software',
    'Embedded Systems',
    'Behavioral and Social Sciences',
    'Biomedical Engineering',
    'Materials Science',
    'Biomedical and Health Sciences',
    'Animal Sciences',
    'Engineering Technology: Statics & Dynamics',
    'Chemistry',
    'Microbiology',
    'Cellular and Molecular Biology',
    'Energy: Sustainable Materials and Design',
    'Translational Medical Science',
    'Mathematics',
    'Engineering Mechanics',
    'Energy: Chemical',
    'Energy: Physical',
    'No Category'],
    datasets: [{
      data: [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: [
        '#E57373', '#F06292', '#9575CD', '#64B5F6', '#4FC3F7',
        '#4DB6AC', '#81C784', '#DCE775', '#FFF176', '#FFD54F',
        '#FFB74D', '#FF8A65', '#A1887F', '#90A4AE', '#9E9E9E',
        '#78909C', '#455A64', '#F48FB1', '#CE93D8', '#FFAB91',
        '#AED581', '#FFCC80', '#FFD180', '#FFB380', '#90CAF9'
    ],
      hoverBackgroundColor: [
        '#E57373', '#F06292', '#9575CD', '#64B5F6', '#4FC3F7',
        '#4DB6AC', '#81C784', '#DCE775', '#FFF176', '#FFD54F',
        '#FFB74D', '#FF8A65', '#A1887F', '#90A4AE', '#9E9E9E',
        '#78909C', '#455A64', '#F48FB1', '#CE93D8', '#FFAB91',
        '#AED581', '#FFCC80', '#FFD180', '#FFB380', '#90CAF9'
    ]
    }]
  };

  useEffect(() => {

    function useMD() {

      mapDimensions('chart-component');
    }


    window.addEventListener('resize', useMD);


    return () => {
      window.removeEventListener('resize', useMD);

    };
  }, []);



  return (
    <>
      <section id='chart-component' className={`flex w-5/6 self-center h-auto mb-20`}>
        {/* <div className="container w-auto h-auto max-height-full min-height-full"> */}
        <Pie
          data={data}
          width={400}
          height={400}
        />
        {/* </div> */}
      </section>
    </>
  );
}

export const ContactComponent: React.FC<ContactNodeProps> = ({
  names = ['Jane Doe'],
  emails = ['example@mail.com']
}) => {
  useEffect(() => {
    const useMD = () => mapDimensions('contact-component');


    window.addEventListener('resize', useMD);


    return () => {
      window.removeEventListener('resize', useMD);

    };
  }, []);



  return (
    <>
      <section id='contact-component h-auto' className={`flex flex-col`}>
        <div className={`${styles.customBg} w-5/6 h-auto m-auto rounded-[17px] flex flex-col text-white pt-[5%] pb-[5%]`}>
          {names.map((name, index) => (
            <div key={`${index}-div`} className="text-xs md:text-xl self-start justify-self-start pb-1 md:pb-2 pl-[15%]">
              <div key={`${index}-name`} >{name} -</div>
              <div key={`${index}-contact`}>{emails.at(index)}</div>
              <br></br>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}