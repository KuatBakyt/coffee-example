import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import type { HeaderProps } from "../../config/HeaderProps"
import { FaShoppingBasket } from "react-icons/fa";
import Order from '../Order/Order';
import { clearCart, deleteFromCart } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const Header: React.FC<HeaderProps> = ({ cart }) => {
    let [cartOpen, setCartOpen] = useState(false)

    const total = Array.isArray(cart) ? cart.reduce((sum, item) => sum + (item.price || 0), 0) : 0

    const dispatch = useDispatch()

    const deleteOrder = (id: number) => {
        dispatch(deleteFromCart(id))
    }

    const resetOrder = () => {
        dispatch(clearCart())
    }

    const ShowOrders = () => {
        return (

            <div className='order-menu'>
                {cart.map((item) => (
                    <Order key={item.id} item={item} deleteOrder={deleteOrder} />
                ))}
                <div className='details-pay'>
                    <p className='sum'>Итого: {total.toFixed(2)} $ T </p>
                    <button className='btn-primary' onClick={resetOrder}>Очистить корзину</button>
                    {/* {
                        currentUser !== null
                            ? (
                                <div className='btn-next-pay' onClick={redirectDescription}>
                                    Перейти к оплате
                                </div>
                            )
                            :
                            <div className='btn-next-pay' onClick={handleShow}>
                                Перейти к оплате
                            </div>
                    } */}

                </div>

            </div>
        )
    }

    const showNothing = () => {
        return (
            <div className="empty">
                <h2>Пусто</h2>
            </div>
        )
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Coffee-Like</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/reviews">Reviews</NavLink>
                        <NavLink to="/addreview">Оставить отзыв</NavLink>
                    </Nav>
                    <div className='basket-profile'>
                        <Nav>
                            <div className={`basket  ${cartOpen && 'active'}`} onClick={() => setCartOpen(!cartOpen)}>
                                <FaShoppingBasket
                                    size={30} />
                                <i>{cart.length}</i>
                            </div>

                            <NavLink to="/login">login</NavLink>
                            <NavLink to="/profile">Profile</NavLink>
                        </Nav>
                    </div>

                    {
                        cartOpen && (
                            <div>
                                {cartOpen && <div className='shop-menu'>
                                    {cart.length > 0 ?
                                        ShowOrders() : showNothing()
                                    }
                                </div>}
                            </div>
                        )
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header