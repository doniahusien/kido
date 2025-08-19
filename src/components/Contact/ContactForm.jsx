"use client";
import { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    Box,
    CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("⏳ جاري الإرسال...");
        try {
            const res = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus(" تم إرسال رسالتك بنجاح");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("❌ فشل الإرسال، حاول مرة أخرى");
            }
        } catch {
            setStatus("⚠️ حدث خطأ، تحقق من الاتصال");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <Box component="form" onSubmit={handleSubmit} mt={6} display="flex" flexDirection="column" gap={3}>
                <TextField label="الاسم الكامل" name="name" value={form.name} onChange={handleChange} fullWidth required />
                <TextField label="البريد الإلكتروني" name="email" type="email" value={form.email} onChange={handleChange} fullWidth required />
                <TextField label="رسالتك" name="message" value={form.message} onChange={handleChange} fullWidth required multiline rows={5} />

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button type="submit" variant="contained" color="error" fullWidth size="large" disabled={loading}>
                        {loading ? <CircularProgress size={24} color="inherit" /> : "إرسال"}
                    </Button>
                </motion.div>

                {status && (
                    <Typography align="center" fontWeight="bold" mt={2}>
                        {status}
                    </Typography>
                )}
            </Box>
        </motion.div>
    );
}
