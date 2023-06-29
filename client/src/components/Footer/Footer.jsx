import { Box, Container } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <>
        <div className='footer--wrapper' style={{ marginTop : '40px'}}>
            <Container maxWidth= 'xl'>
                <Box className='copyright-wrapper' sx={{ textAlign : 'center'}}>
                    <h4>
                        ©2023 All rights reserved
                    </h4>
                </Box>
            </Container>
        </div>
    </>
  )
}

export default Footer