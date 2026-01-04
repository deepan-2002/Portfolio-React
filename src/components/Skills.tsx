"use client";

import { motion } from "framer-motion";
import {
    Code2, Database, Layout, Smartphone, Server, GitBranch, Globe, Terminal, Layers
} from "lucide-react";
import { SKILLS } from "@/lib/data";

// Using Lucide icons as placeholders for brand icons where possible, 
// normally one would use react-icons/fa or simple-icons for specific tech brands.
// Here we map skills to generic or close-match icons for the modern aesthetic.

const iconMap: Record<string, any> = {
    "React.js": Code2,
    "React Native": Smartphone,
    "TypeScript": Code2,
    "JavaScript": Code2,
    "Node.js": Server,
    "NestJS": Server,
    "PostgreSQL": Database,
    "Redis": Database,
    "Redux": Layers,
    "Prisma": Database,
    "TypeORM": Database,
    "Tailwind CSS": Layout,
    "Material UI": Layout,
    "Docker": Globe,
    "Git": GitBranch,
    "HTML/CSS": Layout,
    "Expo": Smartphone,
    "REST APIs": Globe,
    "Languages": Terminal,
    "SQl": Database,
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Skills</h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400"> Technologies I work with to build robust applications.</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {SKILLS.map((skill, index) => {
                        const Icon = iconMap[skill.name] || Terminal;
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-3 group"
                            >
                                <Icon className="w-10 h-10 text-slate-500 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-blue-400 transition-colors" />
                                <span className="font-medium text-slate-900 dark:text-slate-200">{skill.name}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
