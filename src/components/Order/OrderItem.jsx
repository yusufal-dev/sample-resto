import '../../styles/basicStyle.css';
import PriceIcon from '../../static/icons/LablePrice.png';
import { rupiah } from '../../Helpers';


import { Link } from 'react-router-dom';

export default function OrderItem({item}){
	console.log("CHECK ITEM OPTS")
	console.log(item?.item_opts)
	
	return(
		<div className="card-list pt-3 pb-2">
			<div className="container-between">
				<div className="text-primary pr-3">
					<h5 className='mt-2'><b>{item.total}x</b></h5>
				</div>
				
				<div className="text-small1 w-75">
					<h4 className='mt-0 mb-1'>{item.name}</h4>
					{/* <p className='mt-0 mb-1 text-black2'>{item.description}</p> */}
					{
						item?.item_opts?.map(opt => 
							<p key={opt.opt_id} className='mt-0 mb-1'>{opt.description }</p>
							)
					}
				
					<p className='mt-0 mb-1 text-gray'><small>{item.notes}</small></p>
					<b><Link to="#" className="no-text-decoration">Edit</Link></b>
				</div>
				<div >
					<h5 className='mt-0'>{rupiah(item.total_price)} </h5>
				</div>
			</div>
		</div>
	
	);
	
}