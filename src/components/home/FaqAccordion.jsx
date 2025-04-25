// components/FaqAccordion.js
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "Who should attend the AI Expo?",
      answer:
        "The event is designed for AI researchers, business leaders, policymakers, entrepreneurs, students, and anyone interested in the future of AI and its impact on society.",
    },
    {
      question: "How do I register for the AI Expo?",
      answer:
        "You can register by clicking the 'Register Your Ticket' button at the top of the page. Follow the instructions to complete your registration and choose your preferred ticket option.",
    },
    {
      question: "What ticket options are available?",
      answer:
        "We offer three ticket tiers: Startup Pass ($299), General Admission ($499), and Premium Pass ($999). Each tier provides different benefits and access levels to suit your needs and budget.",
    },
    {
      question: "Are there discounts for students or groups?",
      answer:
        "Yes, we offer a 30% discount for students with valid ID and special group rates for organizations bringing 5 or more attendees. Contact our support team for details.",
    },
    {
      question: "Where and when is the AI Expo taking place?",
      answer:
        "The AI Expo will be held at the International Convention Center on May 15-17, 2026. Doors open at 8:00 AM each day, with sessions running until 6:00 PM.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq">
      <div className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-purple-800">
                <button
                  className="w-full text-left py-6 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-xl font-medium text-white">
                    {item.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-purple-400" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-purple-400" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
