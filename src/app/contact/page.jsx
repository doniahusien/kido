"use client";
import { Typography, Container, Paper } from "@mui/material";
import { motion } from "framer-motion";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";

export default function ContactPage() {
    return (
        <Container maxWidth="lg" sx={{ py: 6 }} dir="rtl">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <Paper elevation={4} sx={{ p: 6, borderRadius: 4 }}>
                    <Typography variant="h3" fontWeight="bold" color="error" gutterBottom>
                        تواصل معنا
                    </Typography>
                    <Typography variant="body1" color="text.primary" sx={{ mb: 4 }}>
                        هل لديك أسئلة أو تحتاج إلى مساعدة؟ لا تتردد في التواصل معنا، وسنرد عليك في أقرب وقت ممكن.
                    </Typography>

                    <ContactInfo />
                    <ContactForm />
                </Paper>
            </motion.div>
        </Container>
    );
}
