import { rupiah } from '../../Helpers';
import '../../styles/basicStyle.css';
import { useSelector } from 'react-redux';


export default function OrderSummary({item}){

	const gCart = useSelector((state) => state.cart)
	const restaurantInfo = useSelector((state) => state.restaurantInfo)
	const condPricing = restaurantInfo.condPricing;

	console.log(condPricing)

	const subTotal = gCart.items.reduce((prev, {total_price}) => {
		return prev + total_price
	}, 0)

	const otherFees = condPricing.reduce((prev, item) =>{
		let amount = item.type == "a" ? item.amount : parseFloat(item.percent)/100 * subTotal;
		return parseInt(prev) + parseInt(amount)
	}, 0) ; 
	const totalPrice = subTotal + otherFees;
	
	return(
		<div className="card-box bg-white  text-small2 px-1 py-1">
			<div className="card-body">
				<div className="text-center">
					<h4 className='mt-1 mb-2'>Order Summary</h4>
				</div>
				<div className="container-between pb-1 pt-1">
					<div>SubTotal</div>
					<div>{rupiah(subTotal)}</div>
				</div>
				<div className="hr-dotted" />
				<div className="container-between pb-1 pt-1">
					<div>Other Fees</div>
					<div>{rupiah(otherFees)}</div>
				</div>
				<div className='pl-3'>
						{
							condPricing.length > 0 && condPricing.map(item => 
								<>
									<div className="container-between text-gray text-small1">
										<div>{item.description}</div>
										<div>{rupiah(item.type == "a" ? item.amount : parseInt(parseFloat(item.percent)/100 * subTotal))}</div>
									</div>
								</>
							)
						}
				</div>
				<div className="hr-dotted" />
				<div className="container-between pb-1 pt-1">
					<div><b>Total</b></div>
					<div><b>{rupiah(totalPrice)}</b></div>
				</div>
				
			
			</div>
			
		
		</div>
	
	);
	
}