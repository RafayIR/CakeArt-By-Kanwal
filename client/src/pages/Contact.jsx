import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Box } from '@mui/material'
import ContactForm from '../components/Contact/ContactForm'

function Contact() {
    return (
        <>
            <Header />
            <Box sx={{ marginBottom: '130px' }}></Box>
            <ContactForm />

        <Footer />

        </>
    )
}

export default Contact