import React from 'react'
import { Container, Grid, Box } from '@mui/material'
import { Link } from 'react-router-dom'

function InstagramWidget() {
    return (

        <>
            <Container maxWidth='xl'>
                <Box sx={{ textAlign: 'center' }}>
                    <h2>
                        Follow us on Instagram
                    </h2>
                    <a href='https://www.instagram.com/cakeartbykanwal/' target='_black'>#cakeartbykanwal</a>
                </Box>
                <div className='inst--wrapper'>

                </div>
            </Container>

        </>
    )
}

export default InstagramWidget