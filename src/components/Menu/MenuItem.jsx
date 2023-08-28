
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

    const originalPrice = item.item_prices ? item.item_prices.amount : 0;
    let discount;
    if(item.discounts){
        discount = item.discounts?.type == "a" ? item.discounts.amount : parseFloat(item.discounts.percent)/100 * originalPrice;
    }else{
        discount = 0;
    }
	const actualPrice = parseInt(originalPrice - discount);
    const image = item.image ?  require("../../static"+item.image) : NoImage;
    function onClickSelectItem(){
		
		dispatch(setSelectedItem(item))
		navigate('/choosing')
	}
	
    return(

        <div className='card-menu'>
			<div className="flex-container pointer" onClick={onClickSelectItem}> 
					<img src={image} className="thumbnail" />
					<div className="description-box text-small1">
						<p className='mt-0 mb-0 text-big1'>{item.name}</p>
						<p className='text-gray mt-0 mb-0'><small>{item.description}</small></p>
						<p className='mt-1 text-small2'><b>{rupiah(actualPrice)} </b> 
                        {
							item.discounts && discount > 0 ? 
							<>
								<small className="text-gray stroke-text">{rupiah(originalPrice)}</small><img className="icon-discount" src={PriceIcon} />
							</>
							
							:
							<></>
						}
                        </p>
					</div>
			</div>
			
        </div>
	);
}

