import { Container, Grid, Typography , Box } from '@mui/material'
import React from 'react'
import img1 from '../../../src/assets/images/feature-img/feature-img-2.jpg'
import img2 from '../../../src/assets/images/feature-img/feature-img-1.jpg'

function FeatureCake() {
  return (
    <>
        <div className='feature--cake-wrapper' style={{marginTop :'40px'}}>
            <Container  maxWidth='xl'>
                <Box sx={{ textAlign : 'center' , marginBottom : '40px'}}>
                    <h2>
                        Cutomized Cake at Reasonable Price 
                    </h2>
                    <Typography>
                        Your idea our expertise 
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item className='feature--img-wrapper' xs={6}>
                        <div className='feature--img img1' style={{ backgroundImage :`url(${img1})` ,backgroundPosition : 'center'}}>
                            <div className='overlay'></div>
                        </div>
                    </Grid>
                    <Grid item className='feature--img-wrapper' xs={6}>
                        <div className='feature--img img2'  style={{ backgroundImage :`url(${img2})`}}>
                        <div className='overlay'></div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>

    </>
  )
}

export default FeatureCake