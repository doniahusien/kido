"use client"
import { motion } from 'framer-motion'
import React from 'react'

const FormInput = ({ type, placeholder, name, validation, label ,register,errors}) => {
    return (
        <>
            <div>
                <label
                    htmlFor={name}
                    className="block text-gray-700 font-medium mb-2"
                >
                    {label}
                </label>
                <motion.input
                    type={type}
                    {...register( name , validation)}
                    className={`w-full px-4 text-black py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 ${errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                    whileFocus={{ scale: 1.03, boxShadow: "0 0 5px #fbbf24" }}
                    whileHover={{ scale: 1.02 }}
                    placeholder={placeholder}
                />
                {errors.name && (
                    <span className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                    </span>
                )}
            </div>
        </>
    )
}

export default FormInput