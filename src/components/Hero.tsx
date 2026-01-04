"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PERSONAL_INFO } from "@/lib/data";

export default function Hero() {
    return (
        <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm">
                        Welcome to my portfolio
                    </span>
                    <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
                        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">{PERSONAL_INFO.name}</span>
                    </h1>
                    <p className="mt-4 text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium">
                        {PERSONAL_INFO.title}
                    </p>
                    <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto md:mx-0">
                        {PERSONAL_INFO.about}
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            View My Work
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        {PERSONAL_INFO.resume && (
                            <a
                                href={PERSONAL_INFO.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 dark:border-slate-700 text-base font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
                            >
                                Resume
                                <FileText className="ml-2 w-5 h-5" />
                            </a>
                        )}
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 dark:border-slate-700 text-base font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 flex justify-center md:justify-end relative"
            >
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-3xl absolute -z-10 blur-3xl animate-pulse" />
                <div className="w-64 h-64 sm:w-80 sm:h-80 relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex items-center justify-center">
                    {PERSONAL_INFO.profilePic ? (
                        <Image
                            src={PERSONAL_INFO.profilePic}
                            alt={PERSONAL_INFO.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    ) : (
                        <div className="text-slate-300 text-6xl font-bold">
                            DY
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
}
