import { Link } from 'react-router-dom';
import './SideMenu.css'
import {useSelector} from 'react-redux'

const SideMenu = ({show, click}) => {
    const sideMenuClass = ['sidemenu'];

    if(show) {
        sideMenuClass.push('show')

    }

    const cart = useSelector(state => state.cart);

    const {cartItems} = cart;

    const getCartCount = ()=> {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return <div className={sideMenuClass.join(' ')}>
        <ul className='sidemenu__links' onClick={click}>
            <li>
                <Link to='/cart'>
                <i className="fas fa-shopping-cart"></i>
                <span>
                    Cart <span className="sidemenu__cartbadge">{getCartCount()}</span>
                </span>
                
                </Link>
            </li>
            <li>
                <Link to="/">Shop</Link>
            </li>
        </ul>



    </div>

}

export default SideMenu;