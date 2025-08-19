"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
    { href: "/toys", label: "الألعاب" },
    { href: "/categories", label: "التصنيفات" },
    { href: "/about", label: "من نحن" },
    { href: "/contact", label: "تواصل معنا" },
];

const NavLinks = ({ isMobile = false, user }) => {
    const linkVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        hover: { scale: 1.1, color: "#facc15" },
    };

    return (
        <>
            {navItems.map((item, index) => (
                <motion.div
                    key={item.href}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                    className={isMobile ? "py-2" : ""}
                >
                    <Link
                        href={item.href}
                        className="text-lg font-medium transition-colors duration-300"
                    >
                        {item.label}
                    </Link>
                </motion.div>
            ))}
            {user?.role === "admin" && (
                <motion.div
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: navItems.length * 0.1 }}
                    className={isMobile ? "py-2" : ""}
                >
                    <Link
                        href="/admin"
                        className="text-lg font-medium transition-colors duration-300"
                    >
                        ادمن
                    </Link>
                </motion.div>
            )}
        </>
    );
};

export default NavLinks;
