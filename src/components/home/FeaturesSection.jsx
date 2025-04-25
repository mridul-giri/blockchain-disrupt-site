// // src/components/home/FeaturesSection.jsx
"use client";

import { cn } from "@/lib/utils";
import React from "react";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      icon: "🔗",
      title: "Blockchain Innovation",
      description:
        "Discover cutting-edge blockchain technologies transforming industries worldwide.",
    },
    {
      icon: "💡",
      title: "Expert Insights",
      description:
        "Learn from industry leaders sharing their vision for the future of decentralized systems.",
    },
    {
      icon: "🚀",
      title: "Startup Showcase",
      description:
        "Connect with emerging startups revolutionizing the blockchain ecosystem.",
    },
    {
      icon: "🌐",
      title: "Global Networking",
      description:
        "Build valuable connections with blockchain professionals from around the world.",
    },
    {
      icon: "🔒",
      title: "Security Focus",
      description:
        "Deep dive into the latest security protocols and best practices in blockchain.",
    },
    {
      icon: "💼",
      title: "Investment Opportunities",
      description:
        "Explore funding options and investment strategies in the blockchain space.",
    },
  ];

  const containerRef = useRef(null);

  //   // Staggered card appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  //   return (
  //     <section className="py-24 bg-gray-50">
  //       <div className="container mx-auto px-6">
  //         <div className="text-center mb-16">
  //           <motion.h2
  //             initial={{ opacity: 0, y: -20 }}
  //             whileInView={{ opacity: 1, y: 0 }}
  //             transition={{ duration: 0.6 }}
  //             viewport={{ once: true }}
  //             className="text-4xl font-bold mb-4 text-gray-900"
  //           >
  //             Why Attend BlockchainDisrupt 2025
  //           </motion.h2>
  //           <motion.p
  //             initial={{ opacity: 0 }}
  //             whileInView={{ opacity: 1 }}
  //             transition={{ duration: 0.6, delay: 0.2 }}
  //             viewport={{ once: true }}
  //             className="text-xl text-gray-600 max-w-2xl mx-auto"
  //           >
  //             Experience the most innovative blockchain conference designed for pioneers and visionaries
  //           </motion.p>
  //         </div>

  //         <motion.div
  //           ref={containerRef}
  //           variants={containerVariants}
  //           initial="hidden"
  //           whileInView="visible"
  //           viewport={{ once: true, amount: 0.2 }}
  //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  //         >
  //           {features.map((feature, index) => (
  //             <motion.div
  //               key={index}
  //               variants={cardVariants}
  //               className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
  //             >
  //               <div className="text-4xl mb-4">{feature.icon}</div>
  //               <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
  //               <p className="text-gray-600">{feature.description}</p>
  //             </motion.div>
  //           ))}
  //         </motion.div>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-[#0a0c18]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}
      <section className="py-24 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Why Attend BlockchainDisrupt 2025
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl max-w-2xl mx-auto"
            >
              Experience the most innovative blockchain conference designed for
              pioneers and visionaries
            </motion.p>
          </div>

          <motion.div
            ref={containerRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-[#211b2f] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4 text-white">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
