import { Link } from 'react-router-dom'
import './Product.css'



const Product = ({imageUrl, name, price, description, productId}) => {
    return (
        <div className='product'>
            <img src={imageUrl} alt={name}></img>
            <div className='product__info'>
                <p className='item__name'>{name} </p>
                <p className='item__description'>{description.substring(0, 100)}...</p>
                <p className='item__price'>£{price}</p>
                <Link to={`/product/${productId}`} className='item__btn'>View</Link>
            </div>
            
        </div>
    )
}

export default Product;