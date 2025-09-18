// ProductSection.jsx
import React from "react";
import { motion as FramerMotion } from "framer-motion";
import { Link } from "react-router-dom";

// Define animation variants for product cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const products = [
  {
    title: "TiCi Urban Green Wall",
    image: "/vertical-garden.jpg",
    description: "Beautiful living walls to transform any space with greenery."
  },
  {
    title: "TiCi Nature Aquarium",
    image: "/nature-aquarium.jpg",
    description: "Complete aquascaping solutions for stunning underwater landscapes."
  },
  {
    title: "TiCi Nature Pond",
    image: "/Nature-pond/IMG_0451.JPG",
    description: "Create your own natural water feature with our pond solutions."
  },
  {
    title: "TiCi Terra",
    image: "/Terrarium/1.jpg",
    description: "Self-contained miniature ecosystems in beautiful glass containers."
  },
  {
    title: "Tissue Cultured Aquatic Plants",
    image: "/Ammania-Senegalensia.jpg",
    description: "Lab-grown, disease-free aquatic plants for your aquarium."
  },
   { title: "Terrestrial Plants",
    image: "/plant2.jpeg",
    description: "Quality indoor and outdoor plants for your home and garden."
  }
];

const ProductSection = () => {
  return (
    <section className="bg-[#EEF3EC] py-5 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2E442F] py-0">Our Products</h2>
        <p className="text-[#2E442F]/70 mt-2 max-w-xl mx-auto">
          Explore our range of premium gardening and aquascaping products — thoughtfully crafted to inspire green living.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product, i) => (
          <FramerMotion.div
            key={i}
            className="bg-white border border-[#2E442F]/10 rounded-xl overflow-hidden shadow-lg group"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="h-48 bg-center bg-cover"
              style={{ backgroundImage: `url(${product.image})` }}
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#2E442F] mb-2">{product.title}</h3>
              <p className="text-[#2E442F]/70 text-sm mb-4">{product.description}</p>
              {product.title === "Vertical Garden" ? (
                <Link
                  to="/products/vertical-garden"
                  className="inline-block bg-[#2E442F] text-white px-4 py-2 rounded-full text-sm hover:bg-[#90A48B] transition"
                >
                  See Products
                </Link>
              ) : product.title === "Nature Aquarium" ? (
                <Link
                  to="/products/nature-aquarium"
                  className="inline-block bg-[#2E442F] text-white px-4 py-2 rounded-full text-sm hover:bg-[#90A48B] transition"
                >
                  See Products
                </Link>
              ) : product.title === "Nature Pond" ? (
                <Link
                  to="/products/natural-pond"
                  className="inline-block bg-[#2E442F] text-white px-4 py-2 rounded-full text-sm hover:bg-[#90A48B] transition"
                >
                  See Products
                </Link>
              ) : product.title === "Terrarium" ? (
                <Link
                  to="/products/terrarium"
                  className="inline-block bg-[#2E442F] text-white px-4 py-2 rounded-full text-sm hover:bg-[#90A48B] transition"
                >
                  See Products
                </Link>
              ) : product.title === "Terrestrial Plants" ? (
                <Link
                  to="/products/terrestrialplants" 
                  className="inline-block bg-[#2E442F] text-white px-4 py-2 rounded-full text-sm hover:bg-[#90A48B] transition"
                >
                  See Products
                </Link>
              ) : product.title === "Nutrient Booster" ? (
                <Link
                  to="/products/nutrient-booster" 
                  className="inline-block bg-[#2E442F] text-white px-4 py-2 rounded-full text-sm hover:bg-[#90A48B] transition"
                >
                  See Products
                </Link>
              ) : (
                <Link
                  to="/products"
                  className="inline-block bg-[#2E442F] text-white px-4 py-2 rounded-full text-sm hover:bg-[#90A48B] transition"
                >
                  See Products
                </Link>
              )}
            </div>
          </FramerMotion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
