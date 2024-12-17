import { Badge, IconButton } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBarComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand" href="#">Carrito Demo</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className='navbar-nav'>
                            <NavLink to='/' className="nav-link active" aria-current="page" href="#">Productos</NavLink>
                        </div>
                        <NavLink>
                            <Badge badgeContent={4} color="primary">
                                <MailIcon color="action" />
                            </Badge>
                        </NavLink>
                        <NavLink to='/carrito'>
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={4} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}
