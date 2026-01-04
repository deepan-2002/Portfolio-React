"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "@/lib/data";

export default function Education() {
    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education & Certifications</h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">My academic background and professional certifications.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Education Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <GraduationCap className="text-blue-600 dark:text-blue-400" />
                            Education
                        </h3>
                        <div className="space-y-6">
                            {EDUCATION.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700"
                                >
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{edu.institution}</h4>
                                    <p className="text-blue-600 dark:text-blue-400">{edu.degree}</p>
                                    <div className="flex justify-between items-center mt-2 text-sm text-slate-500 dark:text-slate-400">
                                        <span>{edu.location}</span>
                                        <span>{edu.period}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <Award className="text-blue-600 dark:text-blue-400" />
                            Certifications
                        </h3>
                        <div className="space-y-6">
                            {CERTIFICATIONS.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700"
                                >
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{cert.name}</h4>
                                    <p className="text-blue-600 dark:text-blue-400">{cert.issuer}</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{cert.date}</p>

                                    <ul className="mt-3 space-y-1 mb-4">
                                        {cert.description.map((desc, i) => (
                                            <li key={i} className="text-slate-600 dark:text-slate-300 text-sm list-disc list-inside">{desc}</li>
                                        ))}
                                    </ul>

                                    {cert.link && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                                        >
                                            View Certificate <ExternalLink className="w-3 h-3 ml-1" />
                                        </a>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
