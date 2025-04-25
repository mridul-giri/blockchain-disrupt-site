// pages/events.js
import { useState } from "react";
import Head from "next/head";

export default function EventSessions() {
  const [activeDay, setActiveDay] = useState(1);
  const [activeFilter, setActiveFilter] = useState("All Topics");

  const filters = [
    "All Topics",
    "Business",
    "Engineering",
    "Growth",
    "Platform",
    "Software",
  ];
  const days = [1, 2, 3, 4, 5];

  const sessions = [
    {
      time: "08:00 - 09:00",
      title: "Grand Opening",
      speaker: "Elexa Chase",
      role: "Chairman Tesla",
      day: 1,
      category: "Business",
      speakerImage: "/speaker-placeholder.jpg",
    },
    // Add more sessions here
  ];

  const filteredSessions = sessions.filter((session) => {
    if (activeFilter === "All Topics") return session.day === activeDay;
    return session.day === activeDay && session.category === activeFilter;
  });

  return (
    <section id="sessions">
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <Head>
          <title>Event Sessions</title>
          <meta name="description" content="Event Sessions Page" />
        </Head>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-8">Event Sessions</h1>
          </div>

          {/* Topic Filters */}
          <div className="flex flex-wrap items-center justify-between mb-16">
            <div className="flex flex-wrap gap-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-gray-800 text-white"
                      : "bg-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <button className="px-4 py-2 text-sm font-medium">
              Expand All +
            </button>
          </div>

          {/* Day Tabs */}
          <div className="mb-8">
            <div className="flex mb-2">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`flex-1 text-center py-4 text-xl font-medium ${
                    activeDay === day
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  Day {day}
                </button>
              ))}
            </div>
            <div className="w-full h-1 bg-gray-800 relative">
              <div
                className="absolute h-1 bg-purple-500 transition-all duration-300"
                style={{
                  width: `${100 / days.length}%`,
                  left: `${((activeDay - 1) / days.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Sessions */}
          <div className="space-y-8 mt-12">
            {filteredSessions.map((session, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/api/placeholder/64/64"
                    alt={session.speaker}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-gray-400 mb-1">{session.time}</div>
                  <h3 className="text-2xl font-bold mb-1">{session.title}</h3>
                  <div className="flex items-center gap-2">
                    <span>By</span>
                    <span className="text-purple-400">{session.speaker}</span>
                    <span>{session.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
