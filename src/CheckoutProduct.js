import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider'



function CheckoutProduct({id, title, image, price, rating}) {

    const [{ basket },dispatch] = useStateValue();

    console.log(id, title, image, price, rating)

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        });
    }

    return (
        <div className="checkoutProduct">
            <img src={image} className="checkoutProduct__image" alt=""/>
            <div className="checkoutProduct__info">
            <p className="checkOutProduct__title">{title}</p>
            <p className="checkOutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon/>
                    ))
                    }
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
