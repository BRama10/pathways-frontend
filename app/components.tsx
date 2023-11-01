import React, { useState, useEffect } from 'react';
import mapDimensions from '../utils';
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
    <div id="fair-list" className="flex w-full h-auto flex-row pl-20 pb-8">
      <div className="w-[13%] h-auto">
        <div className="rounded-[50%] border-8 border-solid border-[#5da6dc] w-[40px] aspect-square"></div>
        <div className="border-4 border-solid border-[#5da6dc] w-[8px] h-[90px] box-border ml-4"></div>
      </div>
      <div id="node-a" className="flex flex-col w-[87%] h-full">
        <h1 className={`${styles.customYellow} font-normal text-3xl pb-2`}>{title}</h1>
        <div className="grid grid-cols-2 justify-between w-3/4 pt-px pb-px">
          <h2 className="col-start-1 row-start-1 font-bold text-xl text-white">{code}</h2>
          <h2 className="col-start-2 row-start-1 font-normal text-xl text-white">Contact: {contact}</h2>
        </div>
        <h2 className="font-normal text-xl text-white pt-px pb-px">{website}</h2>
        <h2 className="font-normal text-xl text-white pt-px">{email}</h2>
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
    <section id='component-a' className={`${styles.topBackground} w-full h-full flex flex-col`}>
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


    window.addEventListener('resize', useMD);
    window.addEventListener('resize', useMDA);
    window.addEventListener('resize', useMDB);
    window.addEventListener('resize', useMDC);
    window.addEventListener('resize', useMDTA);
    window.addEventListener('resize', useMDTB);

    return () => {
      window.removeEventListener('resize', useMD);
      window.removeEventListener('resize', useMDA);
      window.removeEventListener('resize', useMDB);
      window.removeEventListener('resize', useMDC);
      window.removeEventListener('resize', useMDTA);
      window.removeEventListener('resize', useMDTB);
    };
  }, []);

  return (
    <section id='component-c' className="grid-cols-1 h-auto w-5/6 grid self-center mb-[5%]">
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

    const useMD = () => mapDimensions('diff-component');
    // const useMDA = () => mapDimensions('comp-lvl-1');
    // const useMDB = () => mapDimensions('comp-lvl-2');
    // const useMDC = () => mapDimensions('comp-lvl-1-a');
    // const useMDD = () => mapDimensions('comp-lvl-1-b');
    // const useMDE = () => mapDimensions('comp-lvl-2-a');
    // const useMDF = () => mapDimensions('comp-lvl-2-b');

    // window.addEventListener('resize', useMD);
    // window.addEventListener('resize', useMDA);
    // window.addEventListener('resize', useMDB);
    // window.addEventListener('resize', useMDC);
    // window.addEventListener('resize', useMDD);
    // window.addEventListener('resize', useMDE);
    // window.addEventListener('resize', useMDF);

    // return () => {
    //   window.removeEventListener('resize', useMD);
    //   window.removeEventListener('resize', useMDA);
    //   window.removeEventListener('resize', useMDB);
    //   window.removeEventListener('resize', useMDC);
    //   window.removeEventListener('resize', useMDD);
    //   window.removeEventListener('resize', useMDE);
    //   window.removeEventListener('resize', useMDF);
    // };
  }, []);

  return (
    <>
      <section id='diff-component' className={`flex w-full h-auto pb-[5%]`}>
        <section id='comp-lvl-1' className="flex w-2/3 md:w-3/4 flex-col justify-around">
          <div id = 'comp-lvl-1-a' className="font-bold text-[#e5be58] self-center text-xl md:text-4xl md-4 md:mb-8">2023</div>
          <div id = 'comp-lvl-1-b' className="grid grid-cols-1 self-center w-full">
            <div className="row-start-1 col-start-1 w-3/4 aspect-square bg-[#e5be58] rounded-[14px] md:rounded-[31px] self-center justify-self-center"></div>
            <div className="blur-[30px] row-start-1 col-start-1 w-3/4 bg-[#e5be58] aspect-square rounded-[14px] md:rounded-[31px] self-center justify-self-center"></div>
            <div className="row-start-1 col-start-1 font-bold text-white text-4xl md:text-8xl self-center justify-self-center z-10">{ score }</div>
          </div>
        </section>
        <section id='comp-lvl-2' className="w-1/3 md:w-1/4 flex flex-col">
          <div className="font-bold text-[#39c783] self-center text-lg md:text-4xl pd-[0.5%] md:pb-[2%]">2024</div>
          <div id = 'comp-lvl-2-a' className="grid grid-cols-1 w-full pb-4 md:pb-12">
            <div className=" row-start-1 col-start-1 w-3/4 aspect-square bg-[#39c783] rounded-[6px] md:rounded-[31px] self-center justify-self-center"></div>
            <div className="blur-[30px] row-start-1 col-start-1 w-3/4 aspect-square bg-[#39c783] rounded-[6px] md:rounded-[31px] self-center justify-self-center"></div>
            <div className=" row-start-1 col-start-1 font-bold text-white text-xl md:text-5xl self-center justify-self-center z-10">8.5</div>
          </div>
          <div className="font-bold text-[#5da6dc] self-center text-[0.75rem] md:text-3xl pb-[0.5%] md:pb-[2%]">FINALISTS</div>
          <div id = 'comp-lvl-2-b' className="grid grid-cols-1 w-full pt-1 md:pt-8">
            <div className=" row-start-1 col-start-1 w-3/4 aspect-square bg-[#5da6dc] rounded-[6px] md:rounded-[31px] self-center justify-self-center"></div>
            <div className="blur-[30px] row-start-1 col-start-1 w-3/4 aspect-square bg-[#5da6dc] rounded-[6px] md:rounded-[31px] self-center justify-self-center"></div>
            <div className=" row-start-1 col-start-1 font-bold text-white text-xl md:text-5xl self-center justify-self-center z-10">{ num_finalists }</div>
          </div>
        </section>
      </section>
      {fairNodes.map((fairNode, index) => (
        <FairNode key={index} {...fairNode} />
      ))}
    </>
  );
}


export const ChartComponent: React.FC<DataProps> = ({ fairNodes = [] }) => {
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
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
      <section id='chart-component' className={`flex w-full h-auto mb-20`}>
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
      <section id='contact-component h-[100px]' className={`flex flex-col`}>
        <div className={`${styles.customBg} w-5/6 h-auto m-auto rounded-[17px] flex flex-col text-xl text-white`}>
          {names.map((name, index) => (
            <>
              <div key={`${index}-name`}>{name} -</div>
              <div key={`${index}-contact`}>{emails.at(index)}</div>
              <br></br>
            </>
          ))}
        </div>
      </section>
    </>
  );
}