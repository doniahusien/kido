"use client";
import React from "react";
import { Star, Rocket, Handshake } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className="min-h-screen bg-red-50 p-8" dir="rtl">
            <motion.div
                className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-4xl font-extrabold text-red-600 mb-6"
                    variants={itemVariants}
                >
                    من نحن
                </motion.h1>

                {[
                    "مرحبًا بكم في متجر الأطفال الخاص بنا! نحن شغوفون بتوفير تجربة تسوق ممتعة ومميزة للعائلات. هدفنا هو تقديم منتجات عالية الجودة تجلب الفرح والراحة والإبداع لأطفالكم الصغار.",
                    "سواء كنتم تبحثون عن ملابس عصرية، ألعاب تعليمية، أو مستلزمات يومية، نحن هنا لتلبية احتياجاتكم. مجموعاتنا مختارة بعناية لضمان أعلى معايير السلامة والأناقة والمتانة.",
                    "شكرًا لاختياركم لنا كشريك في رحلة عائلتكم. نتطلع إلى مساعدتكم في صنع لحظات لا تُنسى مع أطفالكم."
                ].map((text, i) => (
                    <motion.p
                        key={i}
                        className="text-gray-800 text-lg leading-relaxed mt-6"
                        variants={itemVariants}
                    >
                        {text}
                    </motion.p>
                ))}

                <motion.div
                    className="mt-10 bg-red-100 p-6 rounded-lg"
                    variants={itemVariants}
                >
                    <motion.h2
                        className="text-2xl font-bold text-red-600"
                        variants={itemVariants}
                    >
                        قيمنا الأساسية
                    </motion.h2>
                    <motion.ul
                        className="mt-4 space-y-4 text-gray-800 text-lg"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {[
                            { icon: Star, color: "text-yellow-500", title: "الجودة", desc: "تقديم الأفضل لأطفالكم." },
                            { icon: Rocket, color: "text-red-500", title: "الابتكار", desc: "تحويل الأفكار الجديدة إلى واقع." },
                            { icon: Handshake, color: "text-blue-500", title: "رضا العملاء", desc: "رضاكم هو أولويتنا." },
                        ].map((val, index) => (
                            <motion.li
                                key={index}
                                className="flex items-center gap-3"
                                variants={itemVariants}
                            >
                                <val.icon className={`${val.color} w-6 h-6`} />
                                <span><strong>{val.title}:</strong> {val.desc}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </div>
    );
}
