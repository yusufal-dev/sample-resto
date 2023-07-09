import '../../styles/all.css';
import PriceIcon from '../../static/icons/Lable.png'
import CloseIcon from '../../static/icons/close_button.png'

import { rupiah } from "../../Helpers";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../redux/features/selectedItem/selectedItem';

export function Header({title, imgHeader, description, price, discount}){

    const gSelectedItem = useSelector((state) => state.selectedItem)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onClickClose(){
        dispatch(reset());
        navigate('/menu');
    }

   
    return(
        <div className='card'>

                <div className='float-absolute    pl-2 pt-2 pointer' onClick={onClickClose}>
                    <img src={CloseIcon} />
                </div>

            <img src={gSelectedItem.image.src} className='w-100' />
            <div className='card-body  pl-3 pr-3 pt-2  text-black2'>
                <div className="container-between">
                    <div>
                        <h3 className='mt-0 mb-0 '><b>{gSelectedItem.name}</b></h3>
                        {
                            gSelectedItem.discount && gSelectedItem.discount > 0 ?
                                <p className='mt-1 text-small2'>
                                    <img className="icon-discount " src={PriceIcon}  /> { rupiah(gSelectedItem.discount) } off
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
                        <b>{rupiah(gSelectedItem.price)}</b><br/>
                        {
                            gSelectedItem.discount ? 
                            <small className='text-gray stroke-text'>
                            <b>{rupiah(gSelectedItem.price + gSelectedItem.discount)}</b>
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