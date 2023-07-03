import React from 'react'
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import Home from '../../pages/Home'
import Order from '../../pages/Category'

function Navbar() {

    const navigate = useNavigate()
    const location = useLocation()

    const navList = [
        {
            name: "Home",
            url: '/'
        },
        {
            name: "Order",
            url: '/category'
        },
        {
            name: "Contact",
            url: '/contact'
        }
    ]



    return (
        <>
            <nav className='navbar-list'>
                <ul>
                    {
                        navList.map((navItem, i) => (
                            <li onClick={() => navigate(navItem.url)} key={i} className={location.pathname === navItem.url ? 'active' : ''}>
                                <Link> {navItem.name} </Link>
                            </li>
                        ))}

                </ul>
            </nav>
        </>
    )
}

export default Navbar