import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import { Box, Container, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

function CheckOut({ data, cartItemsLength }) {

	const [checkoutData, setCheckOutData] = useState([])
	const [deliveryInfo, setdeliveryInfo] = useState('')
	const [userComments, setUserComments] = useState('')
	const navigate = useNavigate();

	const handleTextDelivery = (e) => {
		setdeliveryInfo(e.target.value)
	}

	const handleTextComments = (e) => {
		setUserComments(e.target.value)
	}


	useEffect(() => {
		setCheckOutData(data)
	}, [data])

	const formatOrderDetails = (checkoutData) => {
		const formattedDetails = `Order Details: 
		${checkoutData.map((d) => {
			return `Name: ${d.name}, Price: ${d.price}`;
		}).join('\n')}

		
		Delivery Address: ${deliveryInfo},

		Additional Info : ${userComments}
		
		`;
		return formattedDetails;
	};


	const placeOrder = (checkoutData) => {
		if (checkoutData == 0) {
			alert('your cart is empty')
			return navigate('/category')
		}
		if (deliveryInfo == '') {
			alert('kindly add your address')
			return;
		}
		const phoneNumber = '+923022730392';
		const formattedOrderDetails = formatOrderDetails(checkoutData);
		const message = encodeURIComponent(formattedOrderDetails);
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
		window.open(whatsappUrl, '_blank');


	};


	return (
		<>
			<Header />
			<Box sx={{ marginBottom: '130px' }}></Box>
			<Container maxWidth="xl">
				<div className='banner--wrapper'>
					<Box className='banner-img'>

					</Box>
				</div>

				<Box>
					<h2>
						Checkout
					</h2>
				</Box>

				<Grid container>
					<Grid lg={8} sm={6} xs={12}>
						<div className='delivery--wrapper'>
							<h3>Delivery Details</h3>

							<label>
								Add Your Home Address
							</label>

							<Box>
								<textarea value={deliveryInfo} onChange={handleTextDelivery} style={{ height: '100px', width: '100%', marginBottom: '40px', marginTop: '20px' }} ></textarea>
							</Box>

							<h3>
								Additional requiements
							</h3>

							<Box>
								<textarea value={userComments} onChange={handleTextComments} style={{ height: '100px', width: '100%', marginBottom: '40px' }} ></textarea>
							</Box>
							<box className='view--cart-btn'>
								<button className='btn ' onClick={() => placeOrder(checkoutData)} >
									Place Order
								</button>
							</box>
						</div>
					</Grid>


					<Grid lg={4} sm={6} xs={12}>
						<div className='checkout--wrapper'>
							<div className='checkout--border'>
								<h4 >
									Your Order ({cartItemsLength})
								</h4>
								<div>

									{
										checkoutData && checkoutData.length > 0 ?

											checkoutData.map((d, i) => (
												<React.Fragment key={i}>
													<Box>
														<h2>{d.name}</h2>
													</Box>
												</React.Fragment>
											)) :
											<h2 style={{ textAlign: 'center', fontSize: '16px' }}>You haven't selected any item</h2>
									}

								</div>
								<Box className="total--wrapper">
									Total Items : {cartItemsLength}
								</Box>
							</div>
						</div>
					</Grid>
				</Grid>
			</Container >

			<Footer />
		</>
	)
}

export default CheckOut
