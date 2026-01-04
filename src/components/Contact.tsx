"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Get in Touch</h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">Feel free to reach out for collaborations or just a friendly hello.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Contact Information</h3>

                        <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 group">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full group-hover:scale-110 transition-transform">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                                <p className="text-slate-900 dark:text-white font-medium">{PERSONAL_INFO.email}</p>
                            </div>
                        </a>

                        <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 group">
                            <div className="p-3 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full group-hover:scale-110 transition-transform">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                                <p className="text-slate-900 dark:text-white font-medium">{PERSONAL_INFO.phone}</p>
                            </div>
                        </a>

                        <div className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="p-3 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                                <p className="text-slate-900 dark:text-white font-medium">{PERSONAL_INFO.location}</p>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a href={PERSONAL_INFO.social.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700"
                        onSubmit={handleSubmit}
                    >
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Send a Message</h3>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                                placeholder="Hello..."
                                required
                            />
                        </div>
                        <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                            Send Message <Send className="w-4 h-4" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
