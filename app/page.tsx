"use client"

import Image from 'next/image'
import styles from './index.module.css';
import { ContactComponent, ChartComponent, PageBody, ComponentA, DifficultyComponent, FairNodeProps } from './components';

const fairNode: FairNodeProps = {
 
}

export default function Home() {
  return (
    <PageBody>
      <ComponentA>
        <h1 className="mt-40 ml-40 mb-40">
          <p className="text-8xl font-bold text-white mb-5">MY</p>
          <p className="text-8xl font-bold text-[#5f5ddc] mt-5 mb-10">PATHWAY</p>
          <p className="text-2xl text-left text-white mt-5">Welcome to Project Pathways–<b className="text-[#e5be58]">the most comprehensive tool for the International Science and Engineering Fair available on the internet.</b> Simply enter your county and we’ll deliver an arsenal of data-derived statistics and heuristics that will guide you throughout your research journey.</p>
        </h1>

        <h1 className="text-5xl text-white font-bold text-center mt-50 mb-20">Your journey begins <span className="text-[#e5be58]">here</span>.</h1>

        <section className={`w-5/6 ml-auto mr-auto h-auto mt-20 bg-black rounded-[54px] shadow-customA grid grid-cols-2`}>
          <div className="flex flex-col">
            <div className="rounded-3xl shadow-customB flex justify-end box-border bg-[#141414] w-14 h-40 text-center rotate-90 origin-center self-center">
              <p className="rotate-[270deg] origin-center text-white self-center font-bold text-2xl pt-14">Difficulty*</p>
            </div>
            <DifficultyComponent fairNodes={[fairNode, fairNode]} />
            <div className='pl-12 self-end self-left w-full h-auto grid grid-cols-1'>
              <h1 className={`row-start-1 col-start-1 ${styles.customYellow} text-[200px] blur-md`}>ISEF</h1>
              <h1 className={`row-start-1 col-start-1 ${styles.customYellow} text-[200px]`}>ISEF</h1>
            </div>

          </div>
          <div className="flex flex-col">
            <div className="rounded-3xl shadow-customB flex justify-end box-border bg-[#141414] w-16 h-80 text-center rotate-90 origin-center self-center">
              <p className="rotate-[270deg] origin-center text-white self-center font-bold text-2xl pt-14">Distribution Of Projects</p>
            </div>
            <ChartComponent />

            <div className="rounded-3xl shadow-customB flex justify-end box-border bg-[#141414] w-16 h-80 text-center rotate-90 origin-center self-center pb-px">
              <p className="rotate-[270deg] origin-center text-white self-center font-bold text-2xl pt-14">Important Contacts</p>
            </div>
            <ContactComponent />

          

          </div>
        </section>
        {/* <img src='/group.svg'></img>
        <img src='/group1.svg'></img>
        <img src='/group2.svg'></img> */}
      </ComponentA>
    </PageBody>
  )
}
