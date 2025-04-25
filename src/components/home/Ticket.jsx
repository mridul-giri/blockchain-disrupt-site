// components/PricingCards.js
import { CheckIcon } from "lucide-react";

export default function Ticket() {
  const pricingOptions = [
    {
      title: "Startup Pass",
      price: "$299",
      features: [
        "Access to all summit sessions and networking events.",
        "Opportunity to showcase your startup in the exhibition hall (additional fee applies).",
        "Exclusive startup pitch sessions and investor meetups.",
      ],
    },
    {
      title: "General Admission",
      price: "$499",
      features: [
        "Access to all keynote sessions, panel discussions, and main stage presentations.",
        "Entry to the exhibition hall and startup showcase.",
        "Networking opportunities with attendees and speakers.",
      ],
    },
    {
      title: "Premium Pass",
      price: "$999",
      features: [
        "All General Admission benefits.",
        "Exclusive access to VIP networking lounges and receptions.",
        "Priority seating at keynote sessions.",
        "Complimentary access to workshops and hands-on demos.",
      ],
    },
  ];

  return (
    <section id="ticket">
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Ticket Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className="bg-purple-900 bg-opacity-60 rounded-lg p-8 border border-purple-700 flex flex-col"
              >
                <h3 className="text-xl font-medium text-purple-300">
                  {option.title}
                </h3>
                <p className="text-6xl font-bold text-white my-6">
                  {option.price}
                </p>

                <div className="h-px bg-purple-700 w-full my-6"></div>

                <div className="flex-grow">
                  <p className="font-medium text-white mb-6">
                    What's Included:
                  </p>

                  <ul className="space-y-4">
                    {option.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckIcon className="h-6 w-6 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span className="text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-md font-medium transition duration-300">
                  Select {option.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
