"use client"

import Image from 'next/image'
import styles from './index.module.css';
import { ContactComponent, ChartComponent, PageBody, ComponentA, ComponentC, DifficultyComponent, FairNodeProps } from './components';

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
        <ComponentC>
        <div className="mt-10 bg-slateblue bg-opacity-40 rounded-[20px] w-5/6 self-center border-[1px] border-solid border-gray-200 backdrop-blur-md flex flex-row items-center">
              <input
                type="text"
                placeholder="Enter your county here."
                className="w-full p-4 text-[18px] text-white bg-transparent focus:outline-none"
              />
            </div>
            <section className="grid grid-cols-2">
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
            <div className="flex flex-col pt-6 pb-4">
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
        {/* <img src='/group.svg'></img>
        <img src='/group1.svg'></img>
        <img src='/group2.svg'></img> */}
      </ComponentA>
    </PageBody>
  )
}

