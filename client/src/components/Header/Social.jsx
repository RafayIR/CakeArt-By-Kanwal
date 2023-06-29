import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

function Social() {


    return (
        <>
            <ul className='header--social-list'>
                <li>
                    <a href="https://www.facebook.com/CakeArtisan1?mibextid=ZbWKwL" target='_blank'>
                        <span>
                            <FacebookOutlinedIcon sx={{ color: 'black' }} />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/cakeartbykanwal/" target='_blank'>
                        <span>
                            <InstagramIcon sx={{ color: 'black' }} />
                        </span>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Social