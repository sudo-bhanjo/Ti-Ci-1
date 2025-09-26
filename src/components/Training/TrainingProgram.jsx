import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TrainingProgram = () => {
  const curriculum = [
    {
      title: "Month-1 Fundamentals",
      points: [
        "Rainforest, terrarium, pond & insect culture basics",
        "Hardscaping, misting, plumbing, electrical systems",
        "Plant care, propagation & substrates",
        "Pond filtration & insect breeding cycles",
      ],
    },
            {
      title: "Month-2 Advanced Hands-On training",
      points: [
        "Rainforest & vertical garden training",
        "Nature pond maintenance",
        "Biotope enclosures for reptiles & amphibians",
        "Mass Insect Culture techniques",
        "Tissue Culture Training",
      ],
    },
            {
      title: "Month-3 Projects & Specialization",
      points: [
        "Specialization (rainforest/pond/terrarium/insects)",
        "Real project execution at TiCi",
        "Final project assessment",
        "Selection of future trainers",
      ],
    },
  ];

  const benefits = [
"Science students (Biology/Botany/Biotech)",
"Business or engineering students (for project/business roles)",
"Creative students with interest in aquascaping or design",
"Passionate learners (even 10+2) with skills or interest in green industries",
         {
      title: "How to apply",
      points: [
        "Send your resume to [contact.tici@gmail.com] or contact [+91 90511 91982] for details.",
        " You can also apply through our website www.ticinaturelab.com"
      ],
    },
  ];

  const eligibility = [     
    "₹15000 stipend (5000/month, total amount will be given only after completion)",
    "Free accommodation & meals for outstation candidates",
    "Real-world project experience",
    "Certification upon completion",
    "Direct job opportunities for Top performers.",
         {
      title: "Carrer Prospectus",
      points: [
 "Tissue Culture & Lab Operations",
 "Nursery & Greenhouse Management",
 "Aquascaping & Terrarium Artist",
 "R&D and Quality Control",
 "Product Management & Sales",
 "Top Performer become trainer and lead future TiCi projects.",
      ],
    },
  ];

  return (
    <section
      className="relative min-h-screen bg-[#EEF3EC] py-20 px-6 bg-cover bg-center mt-8"
      style={{ backgroundImage: "url('/images/leaf-bg.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2E442F]/80 z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto text-white">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Banner Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-12 w-full h-[60vh] rounded-xl shadow-lg bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/NATURE EDUCATION PROGRAM.png')" }}
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[#EEF3EC]/90 text-base sm:text-lg max-w-3xl mx-auto"
          >
            Turn Your Passion for Plants into a Green Career
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[ 
            { title: "Curriculum", content: curriculum },
            { title: "Training Benefits", content: eligibility },
            { title: "Eligibility", content: benefits },
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.2 }}
              className="bg-[#c6d4c6] text-[#2E442F] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <ul className="pl-5 list-disc space-y-2 text-sm text-[#2E442F]/90">
                {Array.isArray(section.content)
                  ? section.content.map((item, idx) =>
                      typeof item === "string" ? (
                        <li key={idx}>{item}</li>
                      ) : (
                        <li key={idx}>
                          <strong>{item.title}</strong>
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            {item.points.map((p, j) => (
                              <li key={j}>{p}</li>
                            ))}
                          </ul>
                        </li>
                      )
                    )
                  : null}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <a
            href="https://forms.gle/JW3R5DR6azrp57da6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#90A48B] text-[#2E442F] font-semibold px-8 py-3 rounded-full hover:bg-white transition-colors shadow-lg"
          >
            Apply Now
          </a>
          <Link
            to="/"
            className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#2E442F] transition-colors"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingProgram;
