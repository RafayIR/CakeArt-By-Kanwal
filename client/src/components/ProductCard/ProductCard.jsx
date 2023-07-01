import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Grid, Box } from '@mui/material';
import cardData from './data';
import Button from '@mui/material/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

function ProductCard() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <Box className="product--card-wrapper">
                <Container maxWidth="xl" sx={{ marginBottom: '40px', marginTop: '40px' }}>
                    <Box className="card--heading" sx={{ textAlign: 'center' }}>
                        <h2>Our Products</h2>
                    </Box>

                    <Slider {...settings}>
                        {
                            cardData.map((product, i) => {
                                return (
                                    <Grid item xs={3} key={i} >
                                        <Card sx={{ margin: '0 10px' }}>

                                            <div className='card--img'>
                                                <CardMedia
                                                    component="img"
                                                    image={`${product.image}`}
                                                    alt="cake image"
                                                />
                                            </div>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {product.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {product.desc}
                                                </Typography>
                                                <Link to={'/category'}>
                                                    <Button className='btn btn-primary' variant="outlined" sx={{ marginTop: '20px' }} size="medium">
                                                        Order
                                                    </Button>
                                                </Link>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }

                    </Slider>
                </Container>
            </Box >

        </>
    )
}

export default ProductCard
