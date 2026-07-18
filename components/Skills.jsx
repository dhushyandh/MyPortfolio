'use client'
import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaAws,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiFirebase,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { icon: <FaHtml5 className="text-orange-600" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
      { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <SiExpress className="text-gray-300" />, name: "Express" },
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
      { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
      { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
      { icon: <FaGithub className="text-white" />, name: "GitHub" },
      { icon: <FaFigma className="text-pink-500" />, name: "Figma" },
      { icon: <FaAws className="text-orange-400" />, name: "AWS" },
    ],
  },
  {
    title: "Database",
    skills: [
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
      { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
      { icon: <SiPostgresql className="text-blue-300" />, name: "PostgreSQL" },
      { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
    ],
  },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-24 px-6 lg:px-[8%] bg-white dark:bg-darkTheme"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="text-center">
        <p className="font-Ovo text-lg mb-2">Tech I Use</p>

        <p className="text-5xl font-Ovo mb-16">My Skills</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            className="border border-gray-300 dark:border-gray-700 rounded-2xl p-8
            hover:-translate-y-2 duration-300 hover:shadow-xl"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-2xl font-bold mb-8">{group.title}</p>

            <div className="flex flex-wrap gap-4">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative group w-14 h-14 rounded-xl bg-[#23263a] flex items-center justify-center text-3xl hover:scale-110 duration-300"
                >
                  {skill.icon}
                  <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/80 px-2 py-1 text-[0.65rem] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;