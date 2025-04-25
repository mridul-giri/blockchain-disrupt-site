// src/components/home/TestimonialsSection.jsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "BlockchainDisrupt provided invaluable insights and connections that transformed my understanding of blockchain applications in finance.",
      name: "Sarah Johnson",
      title: "CTO, FinTech Innovations",
      avatar: "/images/avatar-placeholder.png" // Replace with actual images
    },
    {
      quote: "The most comprehensive blockchain event I've attended. The speaker lineup was exceptional and the networking opportunities were unmatched.",
      name: "Michael Chen",
      title: "Founder, DeFi Solutions",
      avatar: "/images/avatar-placeholder.png"
    },
    {
      quote: "As an investor, BlockchainDisrupt gave me a clear picture of where the industry is heading. I made several valuable connections that led to successful investments.",
      name: "Elena Rodriguez",
      title: "Partner, Blockchain Ventures",
      avatar: "/images/avatar-placeholder.png"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Attendees Say</h2>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
            Hear from industry professionals who have attended our previous blockchain events
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
            >
              <div className="text-4xl mb-6 text-indigo-300">"</div>
              <p className="text-xl md:text-2xl mb-8 italic">
                {testimonials[current].quote}
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
                  <div className="w-full h-full bg-indigo-400 flex items-center justify-center text-2xl font-bold">
                    {testimonials[current].name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                  <p className="text-indigo-300">{testimonials[current].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(i);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 bg-indigo-600 hover:bg-indigo-700 rounded-full p-2 transition-colors"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 bg-indigo-600 hover:bg-indigo-700 rounded-full p-2 transition-colors"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}