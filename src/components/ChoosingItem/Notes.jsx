import '../../styles/all.css';
import { rupiah } from '../../Helpers';
import { useDispatch } from 'react-redux';
import { setSelectedItemAddPrice, setSelectedItemNote, setSelectedItemSubPrice } from '../../redux/features/selectedItem/selectedItem';
import Input from '@mui/joy/Input';
import { useState } from 'react';

export function Notes({itemNote}){

    const dispatch = useDispatch()

    function onChangeInput(event){
        dispatch(setSelectedItemNote(event.target.value))
    }
    
    return(
        <div className='card w-100 bg-white pt-1 pb-0 '>
            <div className='card-body px-2'>
                <div className='flex-container'>
                    <div>
                        <h4 className='mt-1 mb-1'>{"Notes"}</h4>
                    </div>
                    <div className='text-gray text-small1 pl-1'>
                        <h4  className='mt-1 mb-1'><small>Optional</small></h4>
                    </div>
                </div>
                
                    <Input 
                        value={itemNote}
                        placeholder="Add your request" 
                        sx={{
                            '&:focus-within': {
                                outline: '2px solid var(--Input-primary)',
                                outlineOffset: '2px',
                            },
                        }}

                        onChange={onChangeInput}
                        />
           
            </div>
           
        </div>
    );
}