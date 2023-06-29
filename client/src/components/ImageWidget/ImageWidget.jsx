import { Container, Grid, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import img1 from '../../assets/images/cake-img-1.jpg'
import img2 from '../../assets/images/cake-img-5.jpg'

function ImageWidget() {


    return (

        <>
            <Box className='image--widget' sx={{ marginTop: '30px', lineHeight : 0}} >
                <Container maxWidth='xl'>
                    <Grid container spacing={2} sx={{ marginTop: 0, alignItems: 'center', width: '100%', marginLeft: 0, backgroundColor: '#f7e9e4' }}>
                        <Grid xs={4} >
                            <div className='img--wrapper'>
                                <img src={img1} alt="" />
                            </div>
                        </Grid>


                        <Grid xs={4} >

                            <Box className='cakes--heading' sx={{ width: '60%', margin: 'auto' }}>
                                <h2>
                                    Designer Cakes Delivered to Your Doorstep
                                </h2>
                            </Box>
                            <div className='order--btn'>
                                <Link to={'/category'}>
                                    <button className='btn'>Order Here</button>
                                </Link>
                            </div>
                        </Grid>


                        <Grid xs={4} >
                            <div className='img--wrapper'>
                                <img src={img2} alt="" />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default ImageWidget