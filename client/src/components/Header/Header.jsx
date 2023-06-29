import React from 'react'
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Navbar from './navbar';
import Social from './Social';
import logo from '../../assets/images/logo/logo.jpg'
import { Link } from 'react-router-dom';


function Header() {


	return (
		<>
			<div className='header--wrapper'>
				<Container maxWidth="xl">
					<div className='app--bar'>
						<Grid container spacing={2} sx={{ marginTop: 0, alignItems: 'center', width: '100%', marginLeft: 0 }}>
							<Grid xs={4}>
								<div className='app--logo'>
									<Link to={'/'}>
										<img src={logo} alt='logo' />
									</Link>
								</div>
							</Grid>

							<Grid xs={4}>
								<Navbar />
							</Grid>

							<Grid xs={4} sx={{ textAlign: 'end' }}>
								<Social />
							</Grid>
						</Grid>
					</div>
				</Container>
			</div>
		</>
	)
}

export default Header