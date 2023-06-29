import React from 'react'
import Header from '../components/Header/Header'
import ImageWidget from '../components/ImageWidget/ImageWidget'
import InstagramWidget from '../components/InstagramWidget/InstagramWidget'
import Footer from '../components/Footer/Footer'
import ProductCard from '../components/ProductCard/ProductCard'
import FeatureCake from '../components/FeatureCake/FeatureCake'
import { Box } from '@mui/material'



function Home() {
    return (
        <>
            <Header />
            <Box sx={{marginBottom :'130px'}}></Box>
            <ImageWidget />
            <FeatureCake />
            <ProductCard />
            <InstagramWidget />
            <Footer />
        </>
    )
}

export default Home