import Header from '../components/Header/Header'
import OrderTab from '../components/OrderTab/OrderTab'
import { Box, Container } from '@mui/material'
import Footer from '../components/Footer/Footer'

function Order({sendData , setdrawer, cartItemsLength}) {

    return (
        <div>
            <Header />
            <Box sx={{ marginBottom: '130px' }}></Box>
            <div className='banner--wrapper'>
                <Container maxWidth="xl">
                    <Box className='banner-img'>

                    </Box>
                </Container>
            </div>


            <OrderTab sendData={sendData}  cartItemsLength={cartItemsLength} toggleDrawer={setdrawer}/>

            <Footer />
        </div>


    )
}

export default Order