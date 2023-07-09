import '../../styles/all.css';
import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Search from '@mui/icons-material/Search';
import Input from '@mui/joy/Input';



export function PageHeader1({title}){

    return(
        <div  className='card-b-shadow'>
            <div className='card-body pb-3 pl-4 pr-4'>
                <div>
                    <h4><b>{title}</b></h4>
                </div>
                <div className='container-between'>
                    <div>
                        <Select
                            defaultValue={"todaysoffer"}
                            // placeholder="Select a pet…"
                            indicator={<KeyboardArrowDown />}
                            size='sm'
                            variant='soft'
                            color='neutral'
                            sx={{
                                width: 200,
                                fontWeight: 700,
                                [`& .${selectClasses.indicator}`]: {
                                transition: '0.2s',
                                [`&.${selectClasses.expanded}`]: {
                                    transform: 'rotate(-180deg)',
                                },
                                },
                            }}
                            >
                            <Option value="todaysoffer" >Today's Offer</Option>
                            <Option value="foryou">For You</Option>
                            <Option value="specialOffers">Special Offers</Option>
                            <Option value="category1">Category 1</Option>
                        </Select>
                    </div>
                    <div>
                    <Input 
                        placeholder="Search" 
                        startDecorator={<Search fontSize='small' />}
                        variant="soft" 
                        size='sm'
                        sx={{
                            width: 100,
                            fontWeight: 600,
                            '&:focus-within': {
                                outline: '2px solid var(--Input-primary)',
                                outlineOffset: '2px',
                            },
                            
                        }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}