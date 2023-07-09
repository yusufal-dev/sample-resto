
import '../../styles/basicStyle.css';
import AyamBakarKomplit from '../../static/menu-images/ayam-bakar-komplit.jpg';
import PriceIcon from '../../static/icons/LablePrice.png';
import { rupiah } from '../../Helpers';
import { Link } from 'react-router-dom';


export default function MenuItem({item}){
	
	var originalPrice = rupiah(parseInt((item.price + (item.price*12/100))/100) * 100);
    return(

        <div className='card-menu'>
			<Link to={'/choosing'} className='pointer no-text-decoration text-black2'>
				<div className="flex-container">
					<img src={item.image.src} className="thumbnail" />
					<div className="description-box text-small1">
						<p className='mt-0 mb-0 text-big1'>{item.name}</p>
						<p className='text-gray mt-0 mb-0'><small>{item.description}</small></p>
						<p ><b>{rupiah(item.price)}</b> <small className="text-gray stroke-text">{originalPrice}</small><img className="icon-discount" src={PriceIcon} /></p>
					</div>
				</div>
			</Link>
            
        </div>
	);
}

