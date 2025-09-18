import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Consultation from './Consultation';
import { Link } from 'react-router-dom';

const project = [
  {
    name: `TiCi Nature Aquarium`,
    location: 'Metro Cities',
    image: '/projects/Public-Aquarium.jpg',
    description:
      'We specialize in designing stunning public aquarium installations for metropolitan areas, creating captivating underwater worlds.',
  },
  {
    name: 'TiCi Indoor Rainforest',
    location: 'Luxury Resorts',
    image: '/projects/indoor rainforest.jpg',
    description:
      'Transform luxury resorts with lush indoor rainforest décor, bringing vibrant greenery and tropical ambience indoors.',
  },
  {
    name: 'TiCi Urban Green Wall',
    location: 'Urban Balconies',
    image: '/projects/vertical-farming.jpg',
    description:
      'Create sustainable vertical farming setups for urban balconies, helping city dwellers grow their own fresh produce.',
  },
  {
    name: 'TiCi Aqua',
    location: 'Schools',
    image: '/projects/3.avif',
    description:
      'Educational aquaponic demonstrations that help students understand eco-friendly, soil-less farming techniques.',
  },
];

const Projects = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] w-full flex items-center justify-start bg-cover bg-center bg-no-repeat px-6 mt-9"
        style={{ backgroundImage: `url('/projects/indoor rainforest.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-0"></div>
        <div className="relative z-10 text-white max-w-2xl space-y-6">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight drop-shadow-lg">
            Projects
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed drop-shadow">
            Featured Projects Across India
          </p>
          <Link
            to="/"
            className="bg-[#3B6029] hover:bg-[#2E4E1E] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:scale-105"
          >
            OUR SERVICES
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-20 px-4 md:px-20">
        <h2 className="text-gray-800 text-4xl md:text-5xl font-bold mb-12 text-center">
          Our Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {project.map(({ name, location, image, description }, idx) => (
            <div
  key={idx}
  className="relative overflow-hidden rounded-xl shadow-xl group h-80 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
>
  {/* Project Image */}
  <img
    src={image}
    alt={`Project: ${name} in ${location}`}
    loading="lazy"
    className="w-full h-full object-cover transition duration-500 group-hover:blur-[2px] scale-100 group-hover:scale-105"
  />

  {/* Bottom Info */}
  <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md text-gray-800 px-6 py-4 flex justify-between items-center z-10 rounded-b-xl">
    <div>
      <p className="text-xs uppercase tracking-wider opacity-70">Name</p>
      <p className="font-bold text-lg">{name}</p>
    </div>
    <div>
      <p className="text-xs uppercase tracking-wider opacity-70">Location</p>
      <p className="font-bold text-lg">{location}</p>
    </div>
    <FaArrowRight className="text-xl ml-4 group-hover:rotate-45 transition-transform duration-300" />
  </div>

  {/* Hover Overlay with Green Background */}
  <div className="absolute inset-0 bg-[#2E442F]/95 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex items-center justify-center text-sm leading-relaxed text-center z-20 rounded-xl">
    <p className="max-w-md">{description}</p>
  </div>
</div>

          ))}
        </div>
      </section>

      {/* Consultation Section */}
      <Consultation />
    </div>
  );
};

export default Projects;
