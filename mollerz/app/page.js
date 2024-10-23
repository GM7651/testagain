'use client';
import { useEffect, useRef, useState } from 'react';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav from "./components/nav";
import Footer from './components/footer'; // Adjust the path as necessary




export default function Home() {

  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);
  const svgRef = useRef(null); // New ref for the SVG
  


  useEffect(() => {
    const currentRef = textRef.current; // Save the current value of the ref
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Show the text as soon as it's slightly visible
          }
        });
      },
      {
        threshold: 0, // Trigger when any part of the element is in view
        rootMargin: '0px 0px -200px 0px', // Make it trigger 200px before it enters the viewport
      }
    );
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) observer.unobserve(currentRef); // Use the stored ref value
    };
  }, []);


  return (
    <div className=" bg-white w-full font-sans">
      <Nav /> 



      <div className="w-full py-8">

        <div className="w-full">
        </div>      
        <section className="mt-24">
      <div className="bg-black text-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
          <div className="flex items-center">
               <Image
                  className="inline-block mt-24 md:mt-0   p-8 md:p-0"
                  src="/moller2.png"  // Remove 'public' from the path
                  alt="Tech Image 2"
                  width={300}
                  height={300}
                />

            </div>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
            Omega-3            
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Distributor zyrtar në Shqipëri
            </p>
            <a
              href="#"
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
            <div className="h-48 flex flex-wrap content-center">
              <div>
                <Image
                  className="inline-block mt-28 hidden lg:block animate-float"  // Apply the float animation
                  src="/img2.png"
                  alt="Tech Image 1"
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <Image
                  className="inline-block mt-24 md:mt-0  animate-float p-8 md:p-0"
                  src="/img2.png"
                  alt="Tech Image 2"
                  width={300}
                  height={300}
                />
              </div>
              <div>
              <Image
              className="inline-block mt-28 hidden lg:block animate-float"  // Apply the float animation
              src="/img2.png"
              alt="Tech Image 3"
              width={300}
              height={300}
            />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        <div className="relative overflow-hidden pt-16 pb-32 bg-gradient-to-b from-green-300 to-emerald-900 space-y-24 w-full">
          <div className="relative overflow-hidden  pt-16 pb-32 space-y-24">
            <div className="relative">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                  <div>
      
                  <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-green-400 to-green-700">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 70 70" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-10 w-10 text-white">
                          <g>
                      	<path d="M36,15.649c-6.636,0-12.033,5.397-12.033,12.031c0,6.635,5.397,12.033,12.033,12.033c6.635,0,12.033-5.398,12.033-12.033
		                  C48.033,21.046,42.635,15.649,36,15.649z M36,37.713c-5.532,0-10.033-4.501-10.033-10.033c0-5.531,4.501-10.031,10.033-10.031
		                  s10.033,4.5,10.033,10.031C46.033,33.213,41.532,37.713,36,37.713z"/>
                                        	<path d="M30.631,26.443c0-0.446,0.054-0.67,0.178-1.135c0.141-0.534-0.177-1.081-0.711-1.223c-0.538-0.143-1.081,0.177-1.223,0.711
		                  c-0.152,0.573-0.244,0.97-0.244,1.646c0,0.553,0.447,1,1,1C30.183,27.442,30.631,26.995,30.631,26.443z"/>
                                        	<path d="M36.001,33.051c-2.32,0-4.369-1.479-5.098-3.678c-0.174-0.525-0.739-0.806-1.265-0.635
		                  c-0.524,0.174-0.808,0.741-0.634,1.264c1.001,3.02,3.812,5.049,6.996,5.049c0.552,0,1.001-0.447,1.001-1
		                  C37.001,33.498,36.553,33.051,36.001,33.051z"/>
                                        	<path d="M58.803,30.302l-0.854-1.329c-0.417-0.65-0.417-1.928-0.001-2.577l0.854-1.332c0.699-1.092,0.913-2.422,0.584-3.647
		                  c-0.328-1.225-1.177-2.27-2.332-2.868l-1.402-0.724c-0.686-0.354-1.323-1.46-1.287-2.233l0.072-1.576
		                  c0.06-1.276-0.383-2.478-1.244-3.38c-0.91-0.954-2.153-1.442-3.526-1.392L48.032,9.32c-0.776,0-1.831-0.627-2.175-1.29
		                  l-0.727-1.404c-0.793-1.532-2.335-2.484-4.025-2.484c-0.875,0-1.735,0.257-2.487,0.739l-1.332,0.854
		                  c-0.604,0.387-1.972,0.388-2.575,0.001l-1.33-0.852c-0.755-0.483-1.616-0.736-2.491-0.736c-1.69,0-3.233,0.959-4.026,2.494
		                  L26.14,8.057c-0.342,0.663-1.399,1.317-2.23,1.317c0,0-0.001,0-0.002,0l-1.579-0.103c-1.354-0.05-2.615,0.41-3.525,1.363
		                  c-0.862,0.902-1.304,2.104-1.244,3.378l0.072,1.58c0.036,0.771-0.601,1.876-1.286,2.23l-1.407,0.726
		                  c-1.152,0.596-2.002,1.641-2.33,2.867c-0.328,1.224-0.115,2.554,0.587,3.65l0.853,1.327c0.417,0.651,0.417,1.929,0.002,2.577
		                  l-0.856,1.333c-0.7,1.093-0.913,2.423-0.584,3.649c0.328,1.225,1.179,2.269,2.33,2.863l1.404,0.728
		                  c0.686,0.353,1.324,1.459,1.288,2.231l-0.072,1.576c-0.059,1.261,0.375,2.445,1.214,3.343l-3.03,16.694
		                  c-0.123,0.678,0.11,1.368,0.618,1.834c0.508,0.465,1.219,0.637,1.881,0.45l5.412-1.491l4.543,3.301
		                  c0.348,0.252,0.76,0.381,1.176,0.381c0.251,0,0.504-0.047,0.743-0.146c0.639-0.258,1.101-0.821,1.224-1.5l2.27-12.498l2.634,14.501
		                  c0.123,0.678,0.585,1.243,1.223,1.5c0.24,0.096,0.493,0.143,0.745,0.143c0.416,0,0.828-0.164,1.176-0.416l7.303-5.338l8.701,2.328
		                  c0.174,0.049,0.353-0.064,0.53-0.064c0.005,0,0.013,0,0.021,0c1.104,0,2-0.75,2-1.855c0-0.22-0.037-0.289-0.103-0.488L54.31,42.604
		                  c0.091-0.404,0.148-0.82,0.128-1.251l-0.071-1.58c-0.036-0.771,0.601-1.875,1.288-2.229l1.402-0.728
		                  c1.152-0.594,2.002-1.638,2.332-2.863C59.717,32.728,59.504,31.398,58.803,30.302z M27.976,60.373l-2.748-1.994
		                  c-0.345-0.252-0.757-0.383-1.175-0.383c-0.178,0-0.357,0.023-0.534,0.072l-3.271,0.902l2.335-12.86l1.382-0.064
		                  c0.582,0,1.322,0.354,1.8,0.809c0.159,0.151,0.29,0.314,0.375,0.479l0.726,1.406c0.001,0.003,0.004,0.005,0.005,0.008
		                  c0.132,0.254,0.291,0.485,0.461,0.705c0.042,0.054,0.083,0.105,0.126,0.156c0.37,0.438,0.812,0.796,1.304,1.063
		                  c0.034,0.018,0.068,0.036,0.102,0.054c0.257,0.131,0.523,0.246,0.802,0.325L27.976,60.373z M46.826,58.064
		                  c-0.585-0.162-1.215-0.047-1.707,0.311l-5.506,3.998L37.3,49.639l1.32,0.866c0.754,0.483,1.614,0.759,2.489,0.759
		                  c1.689,0,3.232-0.91,4.024-2.443l0.728-1.324c0.128-0.248,0.356-0.468,0.635-0.646c0.466-0.296,1.071-0.477,1.59-0.477
		                  c0.001,0,0.002,0,0.003,0l0.18-0.01l1.624-0.074c0.334,0,0.664-0.198,0.979-0.266l2.517,13.848L46.826,58.064z M54.584,31.131
		                  l0.854,1.329c0.123,0.193,0.117,0.356,0.09,0.458c-0.028,0.101-0.103,0.248-0.305,0.352l-1.404,0.734
		                  c-2.074,1.072-3.555,3.655-3.446,5.984l0.071,1.611c0.008,0.176-0.041,0.387-0.141,0.492c-0.051,0.054-0.135,0.182-0.275,0.244
		                  c-0.052,0.02-0.106,0.035-0.168,0.035c-0.001,0-0.002,0-0.002,0l-1.58-0.197c-2.325-0.117-4.901,1.254-5.971,3.324l-0.727,1.404
		                  c-0.146,0.279-0.359,0.32-0.473,0.32c-0.108,0-0.221-0.035-0.33-0.105l-1.332-0.854c-0.205-0.132-0.429-0.246-0.66-0.351
		                  c-0.087-0.04-0.176-0.075-0.266-0.111c-0.141-0.056-0.283-0.105-0.43-0.151c-0.122-0.038-0.241-0.078-0.366-0.109
		                  c-0.046-0.012-0.095-0.018-0.141-0.028c-0.326-0.075-0.661-0.125-1.005-0.152c-0.095-0.008-0.189-0.015-0.284-0.019
		                  c-0.099-0.004-0.194-0.02-0.294-0.02c-0.066,0-0.13,0.011-0.196,0.013c-0.13,0.003-0.258,0.016-0.388,0.025
		                  c-0.222,0.019-0.439,0.045-0.655,0.083c-0.112,0.02-0.227,0.034-0.337,0.06c-0.021,0.005-0.039,0.015-0.06,0.02
		                  c-0.662,0.158-1.282,0.401-1.811,0.739l-1.312,0.844c-0.026,0.013-0.055,0.016-0.081,0.029c-0.292,0.154-0.589,0.061-0.74-0.232
		                  l-0.727-1.408c-1.073-2.07-3.626-3.543-5.972-3.445l-1.603,0.076c-0.01,0-0.026-0.004-0.038-0.004
		                  c-0.047-0.002-0.081-0.015-0.119-0.024c-0.038-0.011-0.075-0.021-0.123-0.044c-0.013-0.007-0.028-0.008-0.041-0.015
		                  c-0.036-0.022-0.076-0.046-0.099-0.069c-0.102-0.107-0.151-0.257-0.142-0.435l0.072-1.576c0.109-2.332-1.373-4.899-3.446-5.971
		                  l-1.406-0.728c-0.201-0.104-0.277-0.246-0.304-0.347c-0.026-0.101-0.033-0.263,0.089-0.453l0.856-1.333
		                  c1.258-1.965,1.258-4.928-0.002-6.895l-0.853-1.327c-0.124-0.193-0.117-0.353-0.091-0.455c0.028-0.102,0.103-0.243,0.304-0.347
		                  l1.405-0.721c2.074-1.072,3.555-3.632,3.447-5.962l-0.072-1.563c-0.008-0.175,0.04-0.291,0.142-0.396
		                  c0.068-0.072,0.193-0.09,0.441-0.09c0.001,0,0.002,0,0.004,0l1.578,0.007c2.34,0.121,4.9-1.443,5.974-3.516l0.724-1.402
		                  c0.145-0.281,0.359-0.322,0.473-0.322c0.109,0,0.221,0.035,0.331,0.106l1.331,0.854c1.896,1.215,4.997,1.215,6.892,0l1.334-0.854
		                  c0.109-0.07,0.221-0.105,0.328-0.105c0.115,0,0.328,0.041,0.474,0.322l0.726,1.403c1.071,2.071,3.623,3.557,5.973,3.447
		                  l1.615-0.075c0.213,0,0.338,0.086,0.407,0.158c0.101,0.106,0.15,0.255,0.142,0.433l-0.071,1.576c-0.11,2.332,1.372,4.9,3.448,5.973
		                  l1.4,0.724c0.203,0.105,0.279,0.249,0.307,0.35c0.027,0.101,0.033,0.263-0.09,0.454l-0.854,1.332
		                  C53.324,26.2,53.324,29.165,54.584,31.131z"/>
                      </g>
                          </svg>
                        </span>
                      </div>
                      <div className="mt-6" ref={textRef}>
                      <h2
    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight  text-transparent bg-gradient-to-b from-green-900 to-green-700 bg-clip-text transition-transform duration-1000 ${
      isVisible ? 'animate-slideIn' : 'opacity-0'
    }`}
  >
    Shija e Shijshme e Vajit të Mëlçisë Möller&apos;s: Shije e Vlerësuar dhe Cilësi e Lartë
</h2>
                      <p
                          className={`mt-4 text-lg text-gray-900 transition-transform duration-1000 ${
                            isVisible ? 'animate-slideIn delay-200' : 'opacity-0'
                          }`}
                        >
                          Nëse po pyesni për vajin e mëlçisë së merlucit nëse është i shijshëm, përgjigja është PO! Në të kaluarën shija nuk ishte e mirë. 
                          Möller&apos;s dëshmon të kundërtën: të tre shijet (Limon, Tutti Frutti, Mollë) janë vlerësuar me Çmimin Superior për Shijen më të Mirë.
                        </p>
                        </div>
                      
                  </div>
                </div>

                <div className="pl-6 pr-6 md:pl-0 md:pr-0 lg:relative lg:m-0 lg:h-full lg:px-0 lg:flex lg:justify-center">
  <Image
    src="/img3.png"  // Path to your image
    alt="Description of the image"
    layout="responsive"  // Use Next.js's responsive layout for better responsiveness
    width={1920}  // Define image width ratio (can adjust based on image aspect ratio)
    height={1080} // Define image height ratio
    className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl rounded-xl animate-float"
  />
</div>
              </div>
            </div>

            <div className="relative">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                  <div>

                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-green-400 to-green-700">
                    <svg className=" mr-2 w-10 h-10 text-green-800" fill="currentColor" viewBox="0 0 400 500">
                      
                      <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>

                      <g>
                        <g>
                          <g>
                            <path d="M349.58,148.645h-19.258V66.065c0-6.08-4.931-11.011-11.011-11.011h-24.774V38.538C294.538,17.288,277.25,0,256,0
                              s-38.538,17.288-38.538,38.538v16.516h-24.774c-6.081,0-11.011,4.931-11.011,11.011v82.581h-19.259
                              c-28.845,0-52.311,23.467-52.311,52.312v258.731c0,28.845,23.467,52.312,52.311,52.312H349.58
                              c28.845,0,52.312-23.467,52.312-52.312V200.957C401.892,172.112,378.426,148.645,349.58,148.645z M239.484,38.538
                              c0-9.107,7.409-16.516,16.516-16.516s16.516,7.409,16.516,16.516v16.516h-33.032V38.538z M203.699,77.075h104.602v71.57H203.699
                              V77.075z M379.871,459.688c0,16.702-13.588,30.291-30.291,30.291H162.419c-16.701,0-30.289-13.588-30.289-30.291V200.957
                              c0-16.702,13.588-30.291,30.289-30.291H349.58c16.702,0,30.291,13.588,30.291,30.291V459.688z"/>
                            <path d="M346.839,192.688H165.161c-6.081,0-11.011,4.931-11.011,11.011v253.247c0,6.08,4.93,11.011,11.011,11.011h181.677
                              c6.08,0,11.011-4.931,11.011-11.011v-81.755c0-6.08-4.931-11.011-11.011-11.011s-11.011,4.931-11.011,11.011v70.744H176.172
                              V214.71h159.656v37.161c0,6.08,4.931,11.011,11.011,11.011s11.011-4.931,11.011-11.011v-48.172
                              C357.849,197.619,352.92,192.688,346.839,192.688z"/>
                            <path d="M346.839,303.071c-6.08,0-11.011,4.931-11.011,11.011v3.303c0,6.08,4.931,11.011,11.011,11.011
                              s11.011-4.931,11.011-11.011v-3.303C357.849,308.002,352.92,303.071,346.839,303.071z"/>
                            <path d="M256,247.636c-3.617,0-7.004,1.776-9.06,4.752c-7.63,11.047-45.697,67.487-45.697,93.751
                              c0,30.194,24.564,54.756,54.756,54.756s54.758-24.564,54.758-54.756c0-26.264-38.066-82.703-45.698-93.751
                              C263.004,249.413,259.616,247.636,256,247.636z M288.736,346.14c0,18.051-14.685,32.735-32.736,32.735
                              s-32.735-14.685-32.735-32.735c0-11.916,17.018-43.009,32.737-67.582C271.72,303.124,288.736,334.211,288.736,346.14z"/>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
          <div className="mt-6">
          <div className="mt-6" ref={textRef}>
          <h2
  className={`-mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-transparent bg-gradient-to-t from-green-900 to-green-600 bg-clip-text transition-transform duration-1000 ${
    isVisible ? 'animate-slideIn' : 'opacity-0'
  }`}
>
  Möller&apos;s Forte Omega-3
</h2>
  <p
    className={`mt-4 text-lg text-gray-900 transition-transform duration-1000 ${
      isVisible ? 'animate-slideIn delay-200' : 'opacity-0'
    }`}
  >
   </p>
</div>

              <div>
                <ul className="mt-8 space-y-3 font-medium">
                    <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0 flex items-center mt-4" ref={svgRef}> {/* Added 'flex' and 'items-center' */}
                      <svg className={`w-5 h-5 text-green-800 transition-transform duration-1000 ${isVisible ? 'animate-slideIn' : 'opacity-0'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"></path>
                     </svg>
                  </div>
                        <p
                      className={`mt-2 text-2xl ml-2 text-gray-900 transition-transform duration-1000 ${
                       isVisible ? 'animate-slideIn delay-200' : 'animate-slideOut'
                       }`}
                      >
                       Këshillohet për funksionimin e mirë të zemrës,të sistemit nervor dhe të syve.                        
                    </p>
                    </li>
                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
                  <div className="flex-shrink-0 flex items-center mt-4" ref={svgRef}> {/* Added 'flex' and 'items-center' */}
                      <svg className={`w-5 h-5 text-green-800 transition-transform duration-1000 ${isVisible ? 'animate-slideIn' : 'opacity-0'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"></path>
                     </svg>
                  </div>
                   <p
                      className={`mt-2 text-2xl text-gray-900 ml-2 transition-transform duration-1000 ${
                       isVisible ? 'animate-slideIn delay-200' : 'animate-slideOut'
                       }`}
                      >
                        Omega-3,i pasuruar me vitaminën D3 dhe E
                  </p>
                    </li>
                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
                    <div className="flex-shrink-0 flex items-center mt-4" ref={svgRef}> {/* Added 'flex' and 'items-center' */}
                      <svg className={`w-5 h-5 text-green-800 transition-transform duration-1000 ${isVisible ? 'animate-slideIn' : 'opacity-0'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"></path>
                     </svg>
                  </div>
                        <p
                      className={`mt-2 text-2xl ml-2 text-gray-900 transition-transform duration-1000 ${
                       isVisible ? 'animate-slideIn delay-200' : 'animate-slideOut'
                       }`}
                      >
                        Përdorimi: 1 ose 2 herë në ditë për të rritur dhe për fëmijë mbi 6 vjeç,pas ushqimit.

                        </p>


                    </li>
                   
                </ul>
            </div>



            
           
          </div>
        </div>
      </div>        
      <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-6 md:pl-0 lg:relative lg:m-0 lg:h-full lg:px-0 lg:flex lg:justify-center">
                <Image
                  src="/img6.png"  // Path to your image
                  alt="Description of the image"
                  width={700}  // Base width for the image
                  height={600}  // Base height for the image
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl animate-float"  // Responsive width control
                />
              </div>
            </div>
      
    </div>
  </div>    <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
        <div>
             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-green-400 to-green-700">
                    <svg className=" mr-2 w-10 h-10 text-green-800" fill="currentColor" viewBox="0 0 400 500">
                      <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>

                      <g>
                        <g>
                          <g>
                            <path d="M349.58,148.645h-19.258V66.065c0-6.08-4.931-11.011-11.011-11.011h-24.774V38.538C294.538,17.288,277.25,0,256,0
                              s-38.538,17.288-38.538,38.538v16.516h-24.774c-6.081,0-11.011,4.931-11.011,11.011v82.581h-19.259
                              c-28.845,0-52.311,23.467-52.311,52.312v258.731c0,28.845,23.467,52.312,52.311,52.312H349.58
                              c28.845,0,52.312-23.467,52.312-52.312V200.957C401.892,172.112,378.426,148.645,349.58,148.645z M239.484,38.538
                              c0-9.107,7.409-16.516,16.516-16.516s16.516,7.409,16.516,16.516v16.516h-33.032V38.538z M203.699,77.075h104.602v71.57H203.699
                              V77.075z M379.871,459.688c0,16.702-13.588,30.291-30.291,30.291H162.419c-16.701,0-30.289-13.588-30.289-30.291V200.957
                              c0-16.702,13.588-30.291,30.289-30.291H349.58c16.702,0,30.291,13.588,30.291,30.291V459.688z"/>
                            <path d="M346.839,192.688H165.161c-6.081,0-11.011,4.931-11.011,11.011v253.247c0,6.08,4.93,11.011,11.011,11.011h181.677
                              c6.08,0,11.011-4.931,11.011-11.011v-81.755c0-6.08-4.931-11.011-11.011-11.011s-11.011,4.931-11.011,11.011v70.744H176.172
                              V214.71h159.656v37.161c0,6.08,4.931,11.011,11.011,11.011s11.011-4.931,11.011-11.011v-48.172
                              C357.849,197.619,352.92,192.688,346.839,192.688z"/>
                            <path d="M346.839,303.071c-6.08,0-11.011,4.931-11.011,11.011v3.303c0,6.08,4.931,11.011,11.011,11.011
                              s11.011-4.931,11.011-11.011v-3.303C357.849,308.002,352.92,303.071,346.839,303.071z"/>
                            <path d="M256,247.636c-3.617,0-7.004,1.776-9.06,4.752c-7.63,11.047-45.697,67.487-45.697,93.751
                              c0,30.194,24.564,54.756,54.756,54.756s54.758-24.564,54.758-54.756c0-26.264-38.066-82.703-45.698-93.751
                              C263.004,249.413,259.616,247.636,256,247.636z M288.736,346.14c0,18.051-14.685,32.735-32.736,32.735
                              s-32.735-14.685-32.735-32.735c0-11.916,17.018-43.009,32.737-67.582C271.72,303.124,288.736,334.211,288.736,346.14z"/>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>          
                   <div className="mt-6">
                   <h2
  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight  text-transparent bg-gradient-to-b from-green-500 to-green-700 bg-clip-text transition-transform duration-1000 ${
    isVisible ? 'animate-slideIn' : 'animate-slideOut'
  }`}
>
  Shëndet i Plotë në Një Kuti: Möller&apos;s Total Omega-3, Multivitamina dhe Minerale
</h2>
<p
  className={`mt-4 text-lg text-black transition-transform duration-1000 ${
    isVisible ? 'animate-slideIn delay-200' : 'animate-slideOut'
  }`}
>
  Möller&apos;s Total është një suplement ushqimor kompleks që përmban kombinimin optimal të acideve yndyrore omega-3, si dhe vitamina, minerale dhe antioksidantë.
</p>
            
          </div>
        </div>
      </div>        
      <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-6 md:pl-0 lg:relative lg:m-0 lg:h-full lg:px-0 lg:flex lg:justify-center">
                <Image
                  src="/img4.png"  // Path to your image
                  alt="Description of the image"
                  width={700}  // Base width for the image
                  height={600}  // Base height for the image
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl animate-float"  // Responsive width control
                />
              </div>
            </div>
    </div>
  </div>
</div>
  </div>

  <section id="Projects"
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
        <Image 
            src="/img7.png"
            alt="Product" 
            width={160} // Corresponds to `w-40` (in pixels)
            height={320} // Corresponds to `h-80` (in pixels)
            className="ml-14 object-cover rounded-t-xl" 
          />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Möller&#39;s</span>
                <p className="text-lg font-bold text-black text-wrap truncate block capitalize">Möller&#39;s Cod Liver Oil Os-3 tutti-frutti flavor</p>
                <div className="flex items-center">
                   
                    
                </div>
            </div>
        </a>
    </div>

    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
        <Image 
            src="/img7.png"
            alt="Product" 
            width={160} // Corresponds to `w-40` (in pixels)
            height={320} // Corresponds to `h-80` (in pixels)
            className="ml-14 object-cover rounded-t-xl" 
          />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Möller&#39;s</span>
                <p className="text-lg font-bold text-black text-wrap truncate block capitalize">Möller&#39;s Omega-3 Fish, strawberry, 36 jellies</p>
                <div className="flex items-center">
                   
                    
                </div>
            </div>
        </a>
    </div>

    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
        <Image 
            src="/img9.png"
            alt="Product" 
            width={160} // Corresponds to `w-40` (in pixels)
            height={320} // Corresponds to `h-80` (in pixels)
            className="ml-14 object-cover rounded-t-xl" 
          />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Möller&#39;s</span>
                <p className="text-lg font-bold text-black text-wrap truncate block capitalize">Möller’s Cod Liver Oil Omega-3 lemon flavor</p>
                <div className="flex items-center">
                   
                    
                </div>
            </div>
        </a>
    </div>

    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
        <Image 
            src="/img10.png"
            alt="Product" 
            width={160} // Corresponds to `w-40` (in pixels)
            height={320} // Corresponds to `h-80` (in pixels)
            className="ml-14 object-cover rounded-t-xl" 
          />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Möller&#39;s</span>
                <p className="text-lg font-bold text-black text-wrap truncate block capitalize">Möller’s Omega-3 Jelly Fish Cola</p>
                <div className="flex items-center">
                   
                    
                </div>
            </div>
        </a>
    </div>
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
        <Image 
            src="/img7.png"
            alt="Product" 
            width={160} // Corresponds to `w-40` (in pixels)
            height={320} // Corresponds to `h-80` (in pixels)
            className="ml-14 object-cover rounded-t-xl" 
          />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Möller&#39;s</span>
                <p className="text-lg font-bold text-black text-wrap truncate block capitalize">Möller&#39;s COD LIVER OIL OMEGA-3 tutti-frutti flavor</p>
                <div className="flex items-center">
                   
                    
                </div>
            </div>
        </a>
    </div>

    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <Image 
            src="/img7.png"
            alt="Product" 
            width={160} // Corresponds to `w-40` (in pixels)
            height={320} // Corresponds to `h-80` (in pixels)
            className="ml-14 object-cover rounded-t-xl" 
          />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Möller&#39;s</span>
                <p className="text-lg font-bold text-black text-wrap truncate block capitalize">Möller&#39;s COD LIVER OIL OMEGA-3 tutti-frutti flavor</p>
                <div className="flex items-center">
                   
                    
                </div>
            </div>
        </a>
    </div>

</section>

      </div>
      <Footer />

    </div>
  );
}
