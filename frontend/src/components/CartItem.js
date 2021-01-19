import './CartItem.css';
import bottle from '../components/images/NewYork.png';
import { Link } from 'react-router-dom';

const CartItem = () => {
    return <div className="cartitem">
                <div className="cartitem__image">
                    <img src={bottle} alt="perfume"></img>
                </div>
                <Link to={`/product/${111}`} className="cartitem__name">
                    <p>Product 1</p>
                </Link>
                <p className="carditem__price">£45.99</p>
                <select className="cartitem__select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button className="cartitem__deletebtn">
                    <i className="fas fa-trash"></i>
                </button>

            
        </div>
       
    
}

export default CartItem;