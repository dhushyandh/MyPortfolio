'use client'
import { motion } from 'framer-motion'
import {
    Globe,
    ServerCog,
    MonitorSmartphone,
    Rocket,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Full-Stack Web Development",
        description:
            "I build complete web applications using the MERN stack, from responsive frontend interfaces to secure backend APIs.",
    },
    {
        icon: ServerCog,
        title: "Backend & API Development",
        description:
            "Develop scalable backend systems with Node.js, Express.js, MongoDB, authentication, and RESTful APIs.",
    },
    {
        icon: MonitorSmartphone,
        title: "Frontend Development",
        description:
            "Create modern, responsive, and user-friendly interfaces using React, Tailwind CSS, and JavaScript.",
    },
    {
        icon: Rocket,
        title: "Deployment & Optimization",
        description:
            "Deploy, optimize, and maintain applications for speed, SEO, security, and production readiness.",
    },
];

const Services = () => {
    return (
        <motion.section
            id="services"
            className="w-full px-6 lg:px-[8%] py-24 bg-white dark:bg-darkTheme"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className="text-center">
                <p className="font-Ovo text-lg mb-2">What I Offer</p>

                <p className="text-5xl font-Ovo mb-6">
                    My Services
                </p>

                <p className="max-w-2xl mx-auto text-black mb-16">
                    I help businesses and individuals build modern,
                    scalable, and high-performance web applications
                    using the MERN Stack and the latest web technologies.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {services.map((service, index) => {
                    const Icon = service.icon;

                    return (
                        <motion.div
                            key={index}
                            className="
                border border-gray-300 dark:border-gray-700
                rounded-2xl
                p-8
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-purple-500
                bg-white dark:bg-darkHover
                flex flex-col
              "
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div
                                className="
                  w-14 h-14
                  rounded-xl
                  bg-purple-100 dark:bg-purple-900/30
                  flex items-center justify-center
                  mb-6
                "
                            >
                                <Icon
                                    size={28}
                                    className="text-purple-600"
                                />
                            </div>

                            <p className="text-xl font-semibold mb-4">
                                {service.title}
                            </p>

                            <p className="text-white dark:text-black text-sm leading-7 grow">
                                {service.description}
                            </p>

                            <button
                                className="
                  mt-8
                  flex items-center gap-2
                  font-medium
                 text-white
                  dark:text-black
                  hover:gap-3
                  transition-all
                "
                            >
                                Read More
                                <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default Services;