import '../../styles/basicStyle.css';
import AyamBakarKomplit from '../../static/menu-images/ayam-bakar-komplit.jpg';
import PriceIcon from '../../static/icons/LablePrice.png';
import NoImage from '../../static/no_product_image.jpg';
import { rupiah } from '../../Helpers';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedItem } from '../../redux/features/selectedItem/selectedItem';


export default function ForYouItem({item}){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const price = item.item_prices ? item.item_prices.amount : 0;
    const image = item.image ? process.env.REACT_APP_BE_URL + item.image : NoImage;
    function onClickSelectItem(){
		
		dispatch(setSelectedItem(item))
		navigate('/choosing')
	}

    var originalPrice = rupiah(parseInt((price + (price*12/100))/100) * 100);
    return(

        <div className='card-menu w-50'>
            <div className="flex-container pointer" onClick={onClickSelectItem}> 
                <div className="container pl-0">
                    <img src={image} className="thumbnail " />
                    
                        <p className='mt-1 mb-0'>{item.name}</p>
                        <p className='mt-1 text-small2'><b>{rupiah(price)}</b></p>

                        {/* FOR DISCOUNT */}
                        {/* <p className='mt-1 text-small2'><b>{rupiah(price)}</b> <small className="text-gray stroke-text">{originalPrice}</small><img className="icon-discount" src={PriceIcon} /></p> */}


                </div>
            
            </div>
           
        </div>  
    );
}