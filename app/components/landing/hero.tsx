import { poppin } from '@/app/constants';
import Link from 'next/link';
import React from 'react';
import Main from '@/public/Blue and Orange Minimalist Sports Tournament Logo.svg';
import Image from 'next/image';
import pulse from '@/public/pulusu.svg';
import dna from '@/public/4.svg';
import Logo from '@/public/BOOMSCHIk.svg';

const Hero = () => {
  return (
    <header className="bg-white text-black">
      <div className="container mx-auto p-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center w-full lg:w-auto lg:px-24">
          <div className="text-2xl font-bold text-purple-600 flex-all w-full lg:w-[20%]">
            <Image src={Logo} alt="Image" className="w-10 h-10" />
            <span className={`bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text ${poppin.className}`}>Srusta</span>
          </div>

          <nav className="lg:ml-52 mt-4 lg:mt-0 w-full max-w-full p-4 rounded-[30px] border border-gray-300 flex justify-center items-center space-x-6 lg:w-[40rem]">
            <Link href="#" className={`text-purple-600 ${poppin.className}`}>Home</Link>
            <Link href="/#about" className={`hover:text-gray-600 ${poppin.className}`}>About Us</Link>
            <Link href="/#works" className={`hover:text-gray-600 ${poppin.className}`}>Services</Link>
            <Link href="/#" className={`hover:text-gray-600 ${poppin.className}`}>Contact Us</Link>
          </nav>
        </div>

        <div className="flex justify-center lg:justify-end w-full lg:w-auto mt-4 lg:mt-0">
          <Link href={"/Login"}
            className={`${poppin.className} bg-gradient-to-r from-purple-400 to-pink-500 text-white py-2 px-8 rounded-full text-sm`}
          >
            Login
          </Link>
        </div>
      </div>

      <div className="text-center py-20">
        <h1 className={`${poppin.className} text-4xl lg:text-5xl font-bold leading-[2.5rem] lg:leading-[3.3rem]`}>
          Connecting Patients with <br /> Essential Healthcare
        </h1>
        <p className={`${poppin.className} text-gray-500 mt-4`}>
          We provide seamless and effective healthcare solutions to underserved populations, ensuring they
          <br /> receive the best possible care and access to necessary medical resources.
        </p>
      </div>
      <div className="h-[30rem] lg:h-[40rem] w-full relative flex justify-center items-center overflow-hidden -mt-7">
        <div className="h-full w-[50%] lg:w-[40%] relative">
          <div className="absolute w-[130%] h-[80%] top-28 conic -left-20 rounded-[50%] overflow-hidden"></div>
          <Image src={Main} alt="Image" className="ml-20 z-10 object-cover h-[60%] object-top" />
        </div>

        <Image src={pulse} alt="Image" className="absolute w-32 h-32 lg:w-52 lg:h-52 left-20 lg:left-32 top-5" />
        <Image src={dna} alt="Image" className="absolute w-16 h-16 lg:w-20 lg:h-20 right-32 lg:right-40 top-20" />
      </div>
    </header>
  );
};

export default Hero;
