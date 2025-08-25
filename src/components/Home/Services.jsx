"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
    { title: "شحن مجاني", desc: "على جميع الطلبات التي تتجاوز 2000 جنيه مصري" },
    { title: "دعم 24/7", desc: "نحن هنا لمساعدتك في أي وقت" },
    { title: "إرجاع سهل", desc: "إرجاع بدون متاعب خلال 30 يومًا" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
    return (
        <section className="py-12 bg-white">
            <motion.div
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        variants={itemVariants}
                    >
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Services;
