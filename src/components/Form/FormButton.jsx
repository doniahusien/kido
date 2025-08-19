"use client"
import React from 'react'
import { motion } from 'framer-motion'
const FormButton = ({loading,text,textLoading}) => {
    return (
        <>
            
                <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full px-4 py-2 text-white font-semibold rounded-lg flex justify-center items-center gap-2 transition-colors duration-300 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-400 hover:bg-yellow-500"
                        }`}
                >
                    {loading && (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                    )}
                    {loading ? textLoading : text}
                </motion.button>
        </>
    )
}

export default FormButton