import { Link } from 'react-router-dom'
import './Product.css'
import bottle from './images/NewYork.png';


const Product = () => {
    return (
        <div className='product'>
            <img src={bottle} alt="perfume"></img>
            <div className='product__info'>
                <p className='item__name'>Perfume 1</p>
                <p className='item__description'>Some description will go here</p>
                <p className='item__price'>£45.99</p>
                <Link to={`/product/${1111}`}className='item__btn'>View</Link>
            </div>
            
        </div>
    )
}

export default Product;