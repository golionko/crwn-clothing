import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggeleCartHidden } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import { createStructuredSelector} from 'reselect';

const CartIcon = ({ toggeleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggeleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
<span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggeleCartHidden: () => dispatch(toggeleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);