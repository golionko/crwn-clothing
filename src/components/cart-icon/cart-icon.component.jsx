import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggeleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggeleCartHidden }) => (
    <div className='cart-icon' onClick={toggeleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggeleCartHidden: () => dispatch(toggeleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);