import '../../styles/basicStyle.css';
import AyamBakarKomplit from '../../static/menu-images/ayam-bakar-komplit.jpg';
import PriceIcon from '../../static/icons/LablePrice.png';
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


    var originalPrice = rupiah(parseInt(item.price + item.discount));
    return(

        <div className='card-b-shadow'>
			{/* <Link to={'/choosing'} className='pointer no-text-decoration text-black2'> */}
				<div className="flex-container pointer" onClick={onClickSelectItem}> 
					<img src={item.image.src} className="thumbnail" />
					<div className="description-box text-small2">
						<p className='mt-0 mb-0 text-big2'>{item.name}</p>
						<p className='text-gray'><small>{item.description}</small></p>
						
						<p ><b>{rupiah(item.price)}</b> 
						{
							item.discount && item.discount > 0 ? 
							<>
								<small className="text-gray stroke-text">{originalPrice}</small><img className="icon-discount" src={PriceIcon} />
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