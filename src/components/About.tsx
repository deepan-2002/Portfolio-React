"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/data";

export default function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-slate-900 dark:text-white mb-8"
                >
                    About Me
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                >
                    {PERSONAL_INFO.about}
                </motion.p>
            </div>
        </section>
    );
}
