// // import * as React from "react";

// // import { Card, CardContent } from "@/components/ui/card";
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// //   CarouselNext,
// //   CarouselPrevious,
// // } from "@/components/ui/carousel";

// // export default function Speakers() {
// //   return (
// //     <section id="speakers" className="p-24 ">
// //       <h2 className="text-2xl text-center">AI & The Next Frontier</h2>
// //       <h3 className="font-semibold text-4xl text-center mt-4">
// //         Meet Our Speakers
// //       </h3>
// //       <div className="mt-10">
// //         <Carousel
// //           opts={{
// //             align: "start",
// //           }}
// //           className="w-full max-w-full"
// //         >
// //           <CarouselContent>
// //             {Array.from({ length: 5 }).map((_, index) => (
// //               <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
// //                 <div className="p-1">
// //                   <Card>
// //                     <CardContent className="flex aspect-square items-center justify-center p-6">
// //                       <span className="text-3xl font-semibold">
// //                         {index + 1}
// //                       </span>
// //                     </CardContent>
// //                   </Card>
// //                 </div>
// //               </CarouselItem>
// //             ))}
// //           </CarouselContent>
// //           <CarouselPrevious />
// //           <CarouselNext />
// //         </Carousel>
// //       </div>
// //     </section>
// //   );
// // }

// // pages/speakers.js
// import { useEffect, useRef } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';

// export default function SpeakersCarousel() {
//   const topRowRef = useRef(null);
//   const bottomRowRef = useRef(null);

//   useEffect(() => {
//     // Animation for scrolling rows
//     const animateTopRow = () => {
//       if (topRowRef.current) {
//         if (topRowRef.current.scrollLeft >= topRowRef.current.scrollWidth / 2) {
//           topRowRef.current.scrollLeft = 0;
//         } else {
//           topRowRef.current.scrollLeft += 1;
//         }
//       }
//     };

//     const animateBottomRow = () => {
//       if (bottomRowRef.current) {
//         if (bottomRowRef.current.scrollLeft <= 0) {
//           bottomRowRef.current.scrollLeft = bottomRowRef.current.scrollWidth / 2;
//         } else {
//           bottomRowRef.current.scrollLeft -= 1;
//         }
//       }
//     };

//     const topInterval = setInterval(animateTopRow, 30);
//     const bottomInterval = setInterval(animateBottomRow, 30);

//     return () => {
//       clearInterval(topInterval);
//       clearInterval(bottomInterval);
//     };
//   }, []);

//   // Speaker data
//   const speakers = [
//     {
//       name: 'Hauck Aufhäuser',
//       position: 'Managing Director',
//       company: 'Hauck Aufhäuser Lampe',
//       logo: '/hauck-logo.png',
//       image: '/api/placeholder/300/400'
//     },
//     {
//       name: 'Gate Ventures',
//       position: 'Principal',
//       company: 'Gate Ventures',
//       logo: '/gate-ventures-logo.png',
//       image: '/api/placeholder/300/400'
//     },
//     {
//       name: 'STON.fi',
//       position: 'CMO & acting CBDO',
//       company: 'STON.fi',
//       logo: '/ston-logo.png',
//       image: '/api/placeholder/300/400'
//     },
//     {
//       name: 'KFW',
//       position: 'Investment Manager',
//       company: 'KFW',
//       logo: '/kfw-logo.png',
//       image: '/api/placeholder/300/400'
//     },
//     {
//       name: 'Dr. Michael',
//       position: 'CEO',
//       company: 'Tech Solutions',
//       logo: '/tech-solutions-logo.png',
//       image: '/api/placeholder/300/400'
//     },
//     {
//       name: 'Joao Rodrigues',
//       position: 'CTO',
//       company: 'Digital Innovations',
//       logo: '/digital-logo.png',
//       image: '/api/placeholder/300/400'
//     }
//   ];

//   // Duplicate speakers to create infinite scroll effect
//   const duplicatedSpeakers = [...speakers, ...speakers];

//   return (
//     <div className="relative min-h-screen bg-black text-white overflow-hidden">
//       <Head>
//         <title>Conference Speakers</title>
//       </Head>

//       {/* Navigation */}
//       <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6">
//         <button className="text-xl font-bold">MENU</button>
//         <div className="flex items-center">
//           <span className="text-2xl font-bold">CONF<span className="text-blue-500">3</span>RENCE</span>
//         </div>
//         <button className="bg-blue-600 text-white px-6 py-3 flex items-center font-bold">
//           GET TICKETS <span className="ml-2 text-xl">+</span>
//         </button>
//       </div>

//       {/* Background geometric lines */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-0 left-0 w-full h-full">
//           {/* Abstract geometric lines would go here */}
//         </div>
//       </div>

//       {/* Top row - moving left */}
//       <div
//         ref={topRowRef}
//         className="flex overflow-x-scroll scrollbar-hide mt-32 mb-12"
//         style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//       >
//         <div className="flex flex-nowrap">
//           {duplicatedSpeakers.map((speaker, index) => (
//             <div key={`top-${index}`} className="flex-none w-80 p-4">
//               <div className="bg-black border-gray-800 border rounded-lg overflow-hidden">
//                 <div className="h-64 relative grayscale">
//                   <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
//                   <img
//                     src={speaker.image}
//                     alt={speaker.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="h-12 mb-4">
//                     <div className="h-12 w-12 bg-gray-800 flex items-center justify-center">
//                       {/* Company logo would go here */}
//                     </div>
//                   </div>
//                   <h3 className="text-xl font-bold">{speaker.name}</h3>
//                   <p className="text-gray-400">{speaker.position}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="relative px-8">
//         <div className="h-px bg-gray-800 w-full"></div>
//         <div className="absolute top-0 left-0 w-full overflow-hidden">
//           {/* Small vertical markers */}
//           <div className="flex justify-between">
//             {Array(40).fill(0).map((_, i) => (
//               <div key={i} className="h-2 w-px bg-gray-700"></div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom row - moving right */}
//       <div
//         ref={bottomRowRef}
//         className="flex overflow-x-scroll scrollbar-hide my-12"
//         style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//       >
//         <div className="flex flex-nowrap">
//           {duplicatedSpeakers.map((speaker, index) => (
//             <div key={`bottom-${index}`} className="flex-none w-96 p-4">
//               <div className="bg-transparent">
//                 <h2 className="text-3xl font-bold mb-2">{speaker.name}</h2>
//                 <p className="text-gray-400 text-xl">{speaker.position}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Styles to hide scrollbars
// const globalStyles = `
//   .scrollbar-hide::-webkit-scrollbar {
//     display: none;
//   }
//   .scrollbar-hide {
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//   }
// `;

// // // Add global styles
// // export function Head() {
// //   return (
// //     <>
// //       <title>Conference Speakers</title>
// //       <style>{globalStyles}</style>
// //     </>
// //   );
// // }

import { useState, useEffect, useRef } from "react";

export default function SpeakersCarousel() {
  const [isAnimating, setIsAnimating] = useState(true);
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  // Sample speaker data
  const speakers = [
    {
      name: "Hauck Aufhäuser",
      position: "Managing Director",
      company: "Hauck Aufhäuser Lampe",
      image: "/api/placeholder/300/400",
    },
    {
      name: "Gate Ventures",
      position: "Principal",
      company: "Gate Ventures",
      image: "/api/placeholder/300/400",
    },
    {
      name: "STON.fi",
      position: "CMO & acting CBDO",
      company: "STON.fi",
      image: "/api/placeholder/300/400",
    },
    {
      name: "KFW",
      position: "Investment Manager",
      company: "KFW",
      image: "/api/placeholder/300/400",
    },
  ];

  // Duplicate speakers for infinite effect
  const duplicatedSpeakers = [...speakers, ...speakers, ...speakers];

  useEffect(() => {
    let topInterval, bottomInterval;

    if (isAnimating) {
      // Animation for top row (moving left)
      topInterval = setInterval(() => {
        if (topRowRef.current) {
          topRowRef.current.scrollLeft += 1;
          if (
            topRowRef.current.scrollLeft >=
            topRowRef.current.scrollWidth / 3
          ) {
            topRowRef.current.scrollLeft = 0;
          }
        }
      }, 30);

      // Animation for bottom row (moving right)
      bottomInterval = setInterval(() => {
        if (bottomRowRef.current) {
          bottomRowRef.current.scrollLeft -= 1;
          if (bottomRowRef.current.scrollLeft <= 0) {
            bottomRowRef.current.scrollLeft =
              bottomRowRef.current.scrollWidth / 3;
          }
        }
      }, 30);
    }

    return () => {
      clearInterval(topInterval);
      clearInterval(bottomInterval);
    };
  }, [isAnimating]);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Header
      <div className="flex justify-between items-center p-4 absolute top-0 left-0 right-0 z-10">
        <button className="font-bold text-xl">MENU</button>
        <div className="text-2xl font-bold">CONF<span className="text-blue-600">3</span>RENCE</div>
        <button className="bg-blue-600 px-6 py-2 font-bold flex items-center">
          GET TICKETS <span className="ml-2">+</span>
        </button>
      </div> */}

      <div className="pt-24 pb-12">
        {/* Top row - scrolling left */}
        <div
          ref={topRowRef}
          className="flex overflow-x-hidden"
          style={{ scrollbarWidth: "none" }}
          onMouseEnter={() => setIsAnimating(false)}
          onMouseLeave={() => setIsAnimating(true)}
        >
          <div className="flex space-x-4 px-4">
            {duplicatedSpeakers.map((speaker, index) => (
              <div key={`top-${index}`} className="flex-none w-64 md:w-72">
                <div className="relative h-80 bg-gray-900 overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale opacity-80"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="w-fit h-10 bg-gray-800 mb-3">LinkedIn</div>
                    <h3 className="text-xl font-bold">{speaker.name}</h3>
                    <p className="text-gray-400">{speaker.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative px-4 my-6">
          <div className="h-px bg-gray-800 w-full"></div>
          <div className="absolute top-0 left-0 w-full">
            <div className="flex justify-between">
              {Array(30)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-2 w-px bg-gray-700"></div>
                ))}
            </div>
          </div>
        </div>

        {/* Bottom row - scrolling right */}
        <div
          ref={bottomRowRef}
          className="flex overflow-x-hidden"
          style={{ scrollbarWidth: "none" }}
          onMouseEnter={() => setIsAnimating(false)}
          onMouseLeave={() => setIsAnimating(true)}
        >
          <div className="flex space-x-16 px-4">
            {duplicatedSpeakers.map((speaker, index) => (
              <div key={`bottom-${index}`} className="flex-none w-64 md:w-80">
                <div className="relative h-80 bg-gray-900 overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale opacity-80"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="w-fit h-10 bg-gray-800 mb-3">LinkedIn</div>
                    <h3 className="text-xl font-bold">{speaker.name}</h3>
                    <p className="text-gray-400">{speaker.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
