"use client"
import React from 'react'
import { motion } from 'framer-motion'

const FormContainer = ({ children ,onSubmit}) => {
    return (
        <>
            <motion.form
                onSubmit={onSubmit}
                dir="rtl"
                className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-md w-full max-w-md"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {children}
            </motion.form>
        </>
    )
}

export default FormContainer