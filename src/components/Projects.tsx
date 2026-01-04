"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">Some of the key projects I've worked on.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col"
                        >
                            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 relative group">
                                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold select-none">
                                    <Folder />
                                </div>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-10">
                                    {Object.entries(project.links).map(([key, link], i) => (
                                        <a key={i} href={link} target="_blank" rel="noreferrer" className="relative group/link px-4 py-2 bg-white text-slate-900 rounded-full text-sm font-bold hover:scale-105 transition-transform flex items-center gap-2">
                                            View <ExternalLink className="w-4 h-4" />
                                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover/link:opacity-100 transition-opacity whitespace-nowrap pointer-events-none capitalize shadow-lg">
                                                {key}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4 flex-1">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
