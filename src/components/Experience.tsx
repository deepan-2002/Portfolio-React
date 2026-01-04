"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Experience</h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">My professional journey.</p>
                </motion.div>

                <div className="relative border-l border-slate-200 dark:border-slate-700 ml-4 space-y-12">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="ml-8 relative"
                        >
                            <span className="absolute -left-11 top-1 flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-300 dark:border-slate-600 ring-4 ring-white dark:ring-slate-950">
                                <Briefcase className="w-3 h-3 text-slate-500" />
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company} <span className="text-slate-400 dark:text-slate-500 text-sm font-normal">• {exp.period}</span></p>
                            <ul className="mt-4 space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-slate-600 dark:text-slate-300 list-disc list-inside">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
