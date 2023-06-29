import React, { useEffect, useState } from 'react'
import { Box, Container, Grid } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import cakeData from './cakeData';
import cupCakeData from './cupCakeData';
import { CardActionArea } from '@mui/material';
import { Modal } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <>
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}>
                {value === index && (
                    <Box className="order--wrapper-main" sx={{ paddingTop: '40px' }}>
                        <div>{children}</div>
                    </Box>
                )}
            </div >

        </>
    )
}



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



export default function BasicTabs({ sendData, toggleDrawer, cartItemsLength }) {
    const [value, setValue] = React.useState(0);
    const [selectedCake, setSelectedCake] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [cartValue, setCartValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const dataaray = []

    const handleClick = (cdata) => {
        setSelectedCake(cdata);
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    };


    const orderDetail = (selectedCake) => {
        dataaray.push(selectedCake)
        sendData(dataaray)
        setOpenModal(false);
    }

    const handleOpenCart = () => {
        toggleDrawer(true);
    };

    useEffect(() => {
        setCartValue(cartItemsLength)
    }, [cartItemsLength])


    return (
        <div className='order--tab'>
            <Container sx={{ padding: 0 }} maxWidth="xl">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} className='tab-wrapper' aria-label="basic tabs example">
                            <Tab label="Cakes" {...a11yProps(0)} />
                            <Tab label="Cup Cakes" {...a11yProps(1)} />
                            <div className='view--cart-btn' style={{ marginLeft: 'auto' }}>
                                <button className='btn' onClick={handleOpenCart}>
                                    <span>View Cart</span>   <span>{cartValue} </span>

                                </button>
                            </div>
                        </Tabs>

                    </Box>
                    <TabPanel value={value} index={0}>

                        <Grid container className='order--wrapper'>
                            {
                                cakeData.map((cdata, i) => {
                                    return (
                                        <Grid item xs={6} key={i} sx={{ padding: '0 15px' }}>
                                            {
                                                <CardActionArea sx={{ height: '100%' }} onClick={() => handleClick(cdata)}>
                                                    <Grid className="order--card" container sx={{ justifyContent: 'space-between', alignItems: 'center', height: '100%' }} >

                                                        <Grid item xs={6} className='card--desc' spacing={2} container sx={{ flexDirection: 'column', height: '100%', justifyContent: 'space-between', margin: 0 }}>
                                                            <Grid className='card--title'>
                                                                {cdata.name}
                                                            </Grid>
                                                            <Grid className='order--price'>
                                                                {cdata.price} RS
                                                            </Grid>
                                                        </Grid>

                                                        <Grid item xs={6} className='card-img' spacing={2}>
                                                            <CardMedia
                                                                component="img"
                                                                image={`${cdata.image}`}
                                                                alt="cake image"
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </CardActionArea>
                                            }
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>

                    </TabPanel>



                    <TabPanel value={value} index={1}>
                        <Grid container className='order--wrapper'>
                            {
                                cupCakeData.map((cdata, i) => {
                                    return (
                                        <Grid item xs={6} key={i} sx={{ padding: '0 15px' }}>
                                            {
                                                <CardActionArea onClick={() => handleClick(cdata)} sx={{ height: '100%' }}>
                                                    <Grid className="order--card" container sx={{ justifyContent: 'space-between', alignItems: 'center', height: '100%' }} >

                                                        <Grid item xs={6} className='card--desc' spacing={2} container sx={{ flexDirection: 'column', height: '100%', justifyContent: 'space-between', margin: 0 }}>
                                                            <Grid className='card--title'>
                                                                {cdata.name}
                                                            </Grid>
                                                            <Grid className='order--price'>
                                                                {cdata.price} RS
                                                            </Grid>
                                                        </Grid>

                                                        <Grid item xs={6} className='card-img' spacing={2}>
                                                            <CardMedia
                                                                component="img"
                                                                image={`${cdata.image}`}
                                                                alt="cake image"
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </CardActionArea>
                                            }
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </TabPanel>


                    <Modal className='modal--wrapper' open={openModal} sx={{ top: '45px' }} onClose={handleCloseModal}>
                        <div className="modal-content" style={{
                            maxWidth: '500px', margin: 'auto',
                            height: '450px', overflowY: 'scroll', background: '#fff'
                        }}>
                            {selectedCake && (
                                <div className='modal--container'>
                                    <div className='modal--img'>
                                        <img src={selectedCake.image} alt="Cake" />
                                    </div>
                                    <div className='modal--desc'>
                                        <h2>{selectedCake.name}</h2>
                                        <p>Price : {selectedCake.price} RS</p>

                                        <div className='modal--btn'>
                                            <button onClick={() => orderDetail(selectedCake)}>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Modal>
                </Box>
            </Container >
        </div>

    );
}