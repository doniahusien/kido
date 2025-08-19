"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Logo = () => (
    <div className="flex items-center space-x-3 sm:space-x-4">
        <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="cursor-pointer"
        >
            <Image
                src="https://res.cloudinary.com/dikmcl1b6/image/upload/v1755439466/logo_oikak8.png"
                alt="الشعار"
                width={80}
                height={80}
            />
        </motion.div>
        <Link
            href="/"
            className="text-3xl sm:text-4xl font-extrabold text-yellow-200 hover:text-yellow-300 transition-colors duration-300"
        >
            Kiddo Kingdom
        </Link>
    </div>
);

export default Logo;
