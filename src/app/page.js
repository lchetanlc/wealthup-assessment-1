import React from 'react'
import Image from 'next/image'
import profile from './profile.png'
import first from './first.png'
import one from './one.png'
import icon from './icon.png'
import logos from './logos.png'
 const Home = () => {
  return (
    <div>
      <div class="grid place-items-center bg-gradient-to-r from-teal-500 to-teal-600">
        <h1 class="text-white text-4xl font-poppins  font-bold leading-normal mt-5">Backed By The Best</h1>
        <p class="text-white text-1xl font-poppins font-normal  leading-normal">Wealthup is backed and supported by</p>
        <Image src={first} height={150} alt="sponsors"></Image>
      </div>
      <div class="bg-blue-900 pt-5 ">
        <h1 class="text-white text-4xl font-poppins font-extrabold text-center relative top-[20px]">Transforming Lives - Financially!</h1>


        <div class="flex items-center justify-center space-x-5 h-350 text-white relative top-[-20px]">
          <figcaption class="flex items-start space-x-3">
            <Image class="rounded-full w-20 h-55" width="200" height="200" src={profile} alt="profile picture" />
            <div class="space-y-0.5 font-medium dark:text-white">
              <div>Simrin Sirur</div>
              <div>Journalist</div>
              <div class="text-sm dark:text-gray-400">The Print, Gurugram</div>
              <div class="w-[450px] text-l relative top-[10px]">&quot;I was afraid to learn about investments and savings because it seemed to fly over my head, but Ankit was extremely patient and walked me through everything... I now feel more confident to handle my own money.&quot;</div>
            </div>
          </figcaption>
          <Image class="rounded-full w-6 h-7" src={icon} alt="arrow" />
          <Image class="w-150 h-100 " src={one} alt="grid-picture" />
        </div>



      </div>
      <div className="flex justify-center bg-gradient-to-b from-[#1FB3A5] to-[#18A1A7] ">
        <Image className='object-cover h-35 w-98' src={logos} alt="Logos"/>
      </div>
    </div>
  )
}

export default Home;
