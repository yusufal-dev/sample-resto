import '../../styles/all.css';
import { rupiah } from '../../Helpers';
import { useDispatch } from 'react-redux';
import { setSelectedItemAddPrice, setSelectedItemSubPrice } from '../../redux/features/selectedItem/selectedItem';

export function MultipleChoosing({
    title, dataItem, radioName,
    addSelectedItem, subSelectedItem
    }){
    const dispatch = useDispatch();

    function functAddOpt(item, event){
        const isChecked = event.target.checked;
        if(isChecked){
            dispatch(setSelectedItemAddPrice(item.add_price))
            addSelectedItem(item)
        }else{
            dispatch(setSelectedItemSubPrice(item.add_price))
            subSelectedItem(item)
        }
        
    }

    return(
        <div className='card w-100 bg-white pt-1 pb-0 '>
            <div className='card-body px-2'>
                <div className='flex-container'>
                    <div>
                        <h4 className='mt-1 mb-1'>{title}</h4>
                    </div>
                    <div className='text-gray text-small1 pl-1'>
                        <h4  className='mt-1 mb-1'><small>Optional, Max 2</small></h4>
                    </div>
                </div>
                
            {
                dataItem.map((item) => {
                    return(
                        <div key={item.opt_id} className="container-between border-btm pt-2 pb-2 text-gray text-small2 " >
                            <div className='w-40 pl-4'>
                                <input  type="checkbox" id={item.opt_id} name={radioName} onClick={e => functAddOpt(item,e)}/>
                                <label className='pl-2'>
                                    {item.description}
                                </label>
                            </div>
                            <div>
                                {rupiah(item.add_price)}
                           </div>
                            
                            
                        </div>
                    );

                })
            }
            </div>
           
        </div>
    );
}