import React from "react";
import { FiArrowRight } from "react-icons/fi";

const cardData = [
  {
    id: 1,
    name: "Garden Beauty",
    location: "Kanpur, Uttar Pradesh",
    image:
      "/Vertical garden/Kanpur.jpg",
    description:
      "A beautiful garden is more than a space—it's a living, breathing part of your home. But maintaining that beauty takes time and expertise.",
  },
  {
    id: 2,
    name: "Garden Beauty",
    location: "Barbil, Orissa",
    image: "/vertical-garden.jpg",
    description:
      "Discover serenity with elegant landscaping that connects nature and architecture seamlessly.",
  },
];

const LatestWorks = () => {
  return (
    <div className="bg-[#EEF3EC] min-h-screen px-6 py-16 text-[#2E442F]">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        LATEST <span className="font-light">WORKS</span>
      </h2>

      {/* Grid with 2 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center max-w-6xl mx-auto">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="relative w-full rounded-xl overflow-hidden shadow-lg group transition-transform duration-300 transform hover:scale-[1.01] h-[320px]"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-full object-cover"
            />

            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#2E442F]/70 backdrop-blur-md p-4 flex justify-between items-center z-20 text-white">
              <div className="flex gap-8">
                <div>
                  <p className="text-xs text-white/80">Name</p>
                  <p className="font-semibold">{card.name}</p>
                </div>
                <div>
                  <p className="text-xs text-white/80">Location</p>
                  <p className="font-semibold">{card.location}</p>
                </div>
              </div>
              <FiArrowRight className="text-2xl text-white" />
            </div>

            {/* Hover Description Overlay */}
            <div className="absolute inset-0 bg-[#374C37] text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex items-center justify-center text-sm leading-relaxed text-center">
              {card.description}
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="mt-12 text-center">
        <button className="bg-[#2E442F] border border-[#2E442F] text-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-[#2E442F] transition-colors duration-300">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default LatestWorks;
