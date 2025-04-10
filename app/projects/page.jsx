"use client";

import { motion } from "framer-motion";

const projects = [
  {
    date: "7/2024 – 9/2024",
    client: "Accenture / Inventory Steering Cockpit – Bayer",
    title: "Full-Stack Developer",
    description:
      "I was responsible for the frontend development of the ISC, utilizing React JS for the frontend. It’s a tool to track the amount of medicines on Bayer's warehouses around the world. The project incorporated AWS services (AWS Step Functions) for ETL processes and PostgreSQL as the database.",
  },
  {
    date: "1/2024 – 5/2024",
    client: "Accenture / Carbon insight tool – Rabobank",
    title: "Full-Stack Developer",
    description:
      "I was responsible for developing the backend in a carbon insight tool for Rabobank. This tool provides granular insights into the carbon emissions of individual software features. Using TypeScript, Azure Functions, and Cosmos DB NoSQL, I contributed to the development of this crucial tool for sustainability analysis.",
  },
  {
    date: "5/2022 – 10-2023",
    client: "Accenture / Optimus – Bayer",
    title: "Full-Stack Developer",
    description:
      "As a Full Stack Developer at Accenture working on the Optimus - Bayer project, I played a pivotal role in developing a comprehensive web application encompassing both frontend and backend components. This application featured a wide range of functionalities, including trending analysis, template management, and the creation and editing of reports. To achieve this, I leveraged a robust technology stack that included React, NodeJS, TypeScript, Next.js, Nest.js, Docker, and GitLab.",
  },
  {
    date: "10/2021 - 5/2022",
    client: "Accenture / Stedin",
    title: "Test Automation Engineer ",
    description:
      "As a Test Automation Engineer, my role primarily involved executing tests on various environments, including SAP, and addressing identified errors. I utilized VBScript to develop and implement automated test scripts for efficient testing processes.",
  },
];
const Projects = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start"
        >
          {projects.map((projects, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group "
              >
                <div className=" border-t border-white/20 w-full"></div>

                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {projects.date}
                  </div>
                </div>
                <h2 className="text-1xl group-hover:text-outline-hover">
                  {projects.client}
                </h2>
                <h2>{projects.title}</h2>
                <p>{projects.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
