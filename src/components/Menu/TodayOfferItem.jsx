import '../../styles/basicStyle.css';
import AyamBakarKomplit from '../../static/menu-images/ayam-bakar-komplit.jpg';
import PriceIcon from '../../static/icons/LablePrice.png';
import NoImage from '../../static/no_product_image.jpg';
import { rupiah } from '../../Helpers';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedItem } from '../../redux/features/selectedItem/selectedItem';


export default function TodayOfferItem({item}){

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const gSelectedItem = useSelector((state) => state.selectedItem)

	function onClickSelectItem(){
		
		dispatch(setSelectedItem(item))
		navigate('/choosing')
	}


    const originalPrice = item.item_prices ? item.item_prices.amount : 0;
	let discount;
    if(item.discounts){
        discount = item.discounts?.type == "a" ? item.discounts.amount : parseFloat(item.discounts.percent)/100 * originalPrice;
    }else{
        discount = 0;
    }
	const actualPrice = parseInt(originalPrice - discount);
    const image = item.image ?  require("../../static"+item.image)  : NoImage;

    return(

        <div className='card-b-shadow'>
			{/* <Link to={'/choosing'} className='pointer no-text-decoration text-black2'> */}
				<div className="flex-container pointer" onClick={onClickSelectItem}> 
					<img src={image} className="thumbnail" />
					<div className="description-box text-small2">
						<p className='mt-0 mb-0 text-big2'>{item.name}</p>
						<p className='text-gray'><small>{item.description}</small></p>
						{/* <p ><b>{rupiah(price)}</b> </p> */}
						
						<p ><b>{rupiah(actualPrice)} </b> 
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
			{/* </Link> */}
        </div>
    );
}