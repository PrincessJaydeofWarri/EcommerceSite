import { Link } from 'react-router-dom';
import './SideMenu.css'

const SideMenu = ({show, click}) => {
    const sideMenuClass = ['sidemenu'];

    if(show) {
        sideMenuClass.push('show')

    }
    return <div className={sideMenuClass.join(' ')}>
        <ul className='sidemenu__links' onClick={click}>
            <li>
                <Link to='/cart'>
                <i className="fas fa-shopping-cart"></i>
                <span>
                    Cart <span className="sidemenu__cartbadge">0</span>
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