import '../../styles/basicStyle.css';
import AyamBakarKomplit from '../../static/menu-images/ayam-bakar-komplit.jpg';
import PriceIcon from '../../static/icons/LablePrice.png';
import { rupiah } from '../../Helpers';
import { Link } from 'react-router-dom';



export default function ForYouItem({item}){

    var originalPrice = rupiah(parseInt((item.price + (item.price*12/100))/100) * 100);
    return(

        <div className='card-menu w-50'>
            <Link to={'/choosing'} className='pointer no-text-decoration text-black2'>
                <div className="container pl-0">
                    <img src={item.image.src} className="thumbnail " />
                    
                        <p className='mt-1 mb-0'>{item.name}</p>
                        
                        <p className='mt-1 text-small2'><b>{rupiah(item.price)}</b> <small className="text-gray stroke-text">{originalPrice}</small><img className="icon-discount" src={PriceIcon} /></p>

                </div>
            
            </Link>
           
        </div>  
    );
}