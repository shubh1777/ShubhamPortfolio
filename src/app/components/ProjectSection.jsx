"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Portfolio Website made using Next.js",
    image: "/images/Projects/port.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shubh1777/ShubhamPortfolio",
    previewUrl: "https://shubham-portfolio-6egn.vercel.app/",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "Frontend of an E-Commerce website",
    image: "/images/Projects/Ecom.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shubh1777/ShubhMart-Ecommerce-website",
    previewUrl: "https://shubh1777.github.io/ShubhMart-Ecommerce-website/",
  },
  {
    id: 3,
    title: "To-Do List",
    description: "Interactive To-Do List",
    image: "/images/Projects/TODO.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shubh1777/To-Do-List",
    previewUrl: "https://shubh1777.github.io/To-Do-List/",
  },
  {
    id: 4,
    title: "Food Ordering ChatBot",
    description: "Chatbot for food ordering using DialogFlow",
    image: "/images/Projects/Food.png",
    tag: ["All", "AI/ML,Web"],
    gitUrl: "https://github.com/shubh1777/Food-Ordering-Chatbot",
    previewUrl: "https://shubh1777.github.io/Food-Ordering-Chatbot/",
  },
  {
    id: 5,
    title: "Heart Disease Prediction",
    description: "Primary Heart Disease Prediction using ML",
    image: "/images/Projects/heart.jpg",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/shubh1777/Heart-Disease-Prediction",
    previewUrl: "https://github.com/shubh1777/Heart-Disease-Prediction",
  },
  {
    id: 6,
    title: "readLites",
    description: "AI based Reading Assistant using OpenAI",
    image: "/images/Projects/read.jpg",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/shubh1777/readLites",
    previewUrl: "https://readlites-deepsolv.streamlit.app/",
  },
  {
    id: 7,
    title: "UpDown",
    description: "File Sharing App Using MERN",
    image: "/images/Projects/File.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shubh1777/File-Upload",
    previewUrl: "https://github.com/shubh1777/File-Upload",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/ML"
          isSelected={tag === "AI/ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;