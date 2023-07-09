import '../../styles/all.css';
import { rupiah } from '../../Helpers';

export function MultipleChoosing({title, dataItem, radioName}){


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
                        <div className="container-between border-btm pt-2 pb-2 text-gray text-small2 ">
                            <div className='w-40'>
                                <input  type="checkbox" id={item.key} name={radioName} />
                                <label className='pl-2'>
                                    {item.name}
                                </label>
                            </div>
                            <div>
                                {rupiah(item.price)}
                           </div>
                            
                            
                        </div>
                    );

                })
            }
            </div>
           
        </div>
    );
}