import '../../styles/all.css';
import PriceIcon from '../../static/icons/Lable.png'
import CloseIcon from '../../static/icons/close_button.png'
import NoImage from '../../static/no_product_image.jpg';
import { rupiah } from "../../Helpers";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../redux/features/selectedItem/selectedItem';

export function Header(){

    const gSelectedItem = useSelector((state) => state.selectedItem)
    const image = gSelectedItem.image ? require("../../static"+ gSelectedItem.image ) : NoImage;

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const originalPrice = gSelectedItem.price ;
	let discount;
    if(gSelectedItem.discounts){
        discount = gSelectedItem.discounts.type == "a" ? gSelectedItem.discounts.amount : parseFloat(gSelectedItem.discounts.percent)/100 * originalPrice;
    }else{
        discount = 0;
    }
	const actualPrice = parseInt(originalPrice - discount);


    function onClickClose(){
        dispatch(reset());
        navigate('/menu');
    }

   
    return(
        <div className='card'>

                <div className='float-absolute    pl-2 pt-2 pointer' onClick={onClickClose}>
                    <img src={CloseIcon} />
                </div>

            <img src={image} className='w-100' />
            <div className='card-body  pl-3 pr-3 pt-2  text-black2'>
                <div className="container-between">
                    <div>
                        <h3 className='mt-0 mb-0 '><b>{gSelectedItem.name}</b></h3>
                        {
                            gSelectedItem.discounts && discount > 0 ?
                                <p className='mt-1 text-small2'>
                                    <img className="icon-discount " src={PriceIcon}  /> { rupiah(discount) } off
                                </p>
                                :
                                <></>
                        }

                        {
                            gSelectedItem.description ?
                                <p  className='mt-1 text-small1 text-gray'><small>{ gSelectedItem.description }</small></p>
                            :
                            <></>
                        }
                        
                    </div>
                    <div className='text-end'>
                        <b>{rupiah(actualPrice)}</b><br/>
                        {
                            gSelectedItem.discounts ? 
                            <small className='text-gray stroke-text'>
                            <b>{rupiah(originalPrice)}</b>
                        </small>
                            :
                            <></>
                        }

                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}