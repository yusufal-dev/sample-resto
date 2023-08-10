
import '../../styles/basicStyle.css';
import PriceIcon from '../../static/icons/LablePrice.png';
import NoImage from '../../static/no_product_image.jpg';
import { rupiah } from '../../Helpers';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedItem } from '../../redux/features/selectedItem/selectedItem';


export default function MenuItem({item}){
	const navigate = useNavigate();
    const dispatch = useDispatch();

    const price = item.item_prices ? item.item_prices.amount : 0;
    const image = item.image ? process.env.REACT_APP_BE_URL + item.image : NoImage;
    function onClickSelectItem(){
		
		dispatch(setSelectedItem(item))
		navigate('/choosing')
	}
	var originalPrice = rupiah(parseInt((item.price + (item.price*12/100))/100) * 100);
    return(

        <div className='card-menu'>
			<div className="flex-container pointer" onClick={onClickSelectItem}> 
					<img src={image} className="thumbnail" />
					<div className="description-box text-small1">
						<p className='mt-0 mb-0 text-big1'>{item.name}</p>
						<p className='text-gray mt-0 mb-0'><small>{item.description}</small></p>
						<p ><b>{rupiah(price)}</b> 
							{/* <small className="text-gray stroke-text">{}</small><img className="icon-discount" src={PriceIcon} /> */}
						</p>
					</div>
			</div>
			
        </div>
	);
}

