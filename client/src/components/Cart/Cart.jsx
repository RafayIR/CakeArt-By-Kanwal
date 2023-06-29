import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom'


export default function TemporaryDrawer({ data, open, onClose, updateCartItemsLength, getCartItems }) {
    const [state, setState] = React.useState({
        right: false,
    });
    const [cartItems, setCartItems] = useState([]);
    updateCartItemsLength(cartItems.length);
    getCartItems(cartItems)

    useEffect(() => {
        setCartItems(prevItems => [...prevItems, ...data]);
    }, [data]);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
            role="presentation"

        >
            <div className='cart--wrapper'>
                <h2>My Order ({cartItems.length})</h2>
                {cartItems.map((d, i) => {
                    return (
                        <div className='cart--desc' key={i}>
                            <div className='row' style={{ display: 'flex', alignItems: 'flex-start' }}>
                                <div className='item--title'>
                                    <h4 style={{ margin: 0 }}>{d.name}</h4>
                                </div>

                                <div className='item--img' style={{ width: '50px', height: '50px', marginLeft: 'auto' }}>
                                    <img src={d.image} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='cart--btn'>
                <Link to={'/checkout'}>
                    <button className='btn' onClick={() => onClose(toggleDrawer(false))}>
                        Continue to Checkout
                    </button>
                </Link>

            </div>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={open}
                        onClose={onClose}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}




