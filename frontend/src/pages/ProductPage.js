import './ProductPage.css'
import bottle from '../components/images/NewYork.png';

const ProductPage = () => {
    return <div className ="productpage">
                <div className="productpage__left">
                    <div className="left__image">
                        <img src={bottle} alt="perfume"></img>
                    </div>                       
                    <div className="left__info">
                        <p className="left__name">Perfume 1</p>
                        <p>Price: £45.99</p>
                        <p>Desccription: Some description will go here</p>  
                </div>
            </div>
            <div className="productpage__right">
                <div className='right__info'>
                    <p>Price: <span>£45.99</span></p>
                    <p>Status: <span>In Stock</span> </p>
                    <p>Qty 
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    </p>
                    <p>
                        <button type="button">Add to cart</button>
                    </p>
                
            </div>
            </div> 
        </div>
        



};


export default ProductPage;
