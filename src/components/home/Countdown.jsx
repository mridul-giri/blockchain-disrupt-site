// components/HeroSection.js
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    weeks: 138,
    days: 3,
    hours: 22,
    minutes: 23,
    seconds: 48,
  });

  useEffect(() => {
    // Set your target date here - this is just an example based on the numbers in the image
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 138 * 7 + 3); // 138 weeks and 3 days from now
    targetDate.setHours(targetDate.getHours() + 22);
    targetDate.setMinutes(targetDate.getMinutes() + 23);
    targetDate.setSeconds(targetDate.getSeconds() + 48);

    const calculateTimeLeft = () => {
      const difference = targetDate - new Date();

      if (difference > 0) {
        const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 7);
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ weeks, days, hours, minutes, seconds });
      }
    };

    // Initial calculation
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up
    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <div className="relative min-h-screen bg-purple-900 overflow-hidden">
        {/* Background with circles effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-purple-800 opacity-90"></div>
          <div className="absolute inset-0 grid grid-cols-10 gap-4 opacity-20">
            {Array(100)
              .fill()
              .map((_, i) => (
                <div
                  key={i}
                  className="rounded-full border border-white aspect-square"
                ></div>
              ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-12 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Hurry up.
                <br />
                Register Today!
              </h1>
            </div>

            {/* Countdown Timer */}
            <div className="flex flex-wrap justify-center gap-3">
              <CountdownBox value={timeLeft.weeks} label="weeks" />
              <CountdownBox value={timeLeft.days} label="days" />
              <CountdownBox value={timeLeft.hours} label="hours" />
              <CountdownBox value={timeLeft.minutes} label="minutes" />
              <CountdownBox value={timeLeft.seconds} label="seconds" />
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button className="fixed bottom-8 right-8 bg-pink-600 text-white p-4 rounded-full shadow-lg z-20 hover:bg-pink-700 transition duration-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}

// Countdown Box Component
function CountdownBox({ value, label }) {
  return (
    <div className="bg-pink-600 rounded-lg w-24 h-24 flex flex-col items-center justify-center text-white">
      <span className="text-4xl font-bold">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-sm">{label}</span>
    </div>
  );
}
