
import '../App.css';
import '../styles/basicStyle.css';
import '../styles/layoutStyle.css';
import '../styles/utilStyle.css';
import BasketIcon from '../static/icons/Basket.png';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { rupiah } from '../Helpers';


export default function CheckoutItem({targetLink}){
	
	const gCart = useSelector((state) => state.cart)
	// let totalCart = 0;

	// if(gCart.items.length > 0){
	// 	totalCart = gCart.items.reduce((prev, curr) => {
	// 		return prev + curr.total
	// 	})
	// }


	const totalCart = gCart.items.reduce((prev, {total}) => {
		return prev + total
	}, 0)

	const totalPrice = gCart.items.reduce((prev, {total_price}) => {
		return prev + total_price
	}, 0)
	

	
	return(
	
		<div >
			<Link to={targetLink} className="no-text-decoration" >
				
				<div className=" button-confirm container-flex">
					
					<div className="basket-div  justify-middle">
						<div className='flex-container'>
							<img className="icon-pembayaran" src={BasketIcon} />
							<div className='text-black2 '>{totalCart}</div>
						</div>
						
					</div>
					<div className='total-pembayaran-div w-100 px-2 container-between justify-middle'>
						<div className="">
							<p>Total<br/><b>{rupiah(totalPrice)}</b></p>
							
						</div>
						<div className="checkout-div">
							<b>CHECKOUT({totalCart})</b>
						</div>
					</div>
					
				
				</div>
			</Link>
		</div>
	
	);
	
}