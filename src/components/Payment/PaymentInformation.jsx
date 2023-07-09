import '../../styles/all.css';


import Input from '@mui/joy/Input';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { useEffect, useState } from 'react';


export function PaymentInformation({onFilling}){
    
    const [fullname, setFullname] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    useEffect( ()=>{
      
        if(fullname && email && phoneNumber){
            onFilling(true)

        }
        else{
            onFilling(false)
        }
    }, [fullname, email, phoneNumber])

    return(
        <div >
				<div className="container text-small1">
					<h4 className="mb-0 mt-0">Payment Information <small className="text-primary">*</small></h4>
					<div>
						<small className="text-gray">Please provide valid data for order processing. Appreciate it!</small>
					</div>
					<div className="mt-2">
						
                        <Input 
                            placeholder="Fullname" 
                            startDecorator={<PersonOutlineOutlinedIcon />}
                            sx={{

                                '&:focus-within': {
                                    outline: '2px solid var(--Input-primary)',
                                    outlineOffset: '2px',
                                },
                                
                            }}
                            onChange={(event) => setFullname(event.target.value)}
                            />
					</div>
					<div className="mt-2">
                        <Input 
                            placeholder="Email" 
                            startDecorator={<EmailOutlinedIcon />}
                            sx={{
                                '&:focus-within': {
                                    outline: '2px solid var(--Input-primary)',
                                    outlineOffset: '2px',
                                },
                                
                            }}
                            onChange={(event) => setEmail(event.target.value)}
                            />  
					</div>
					<div className="mt-2">
                        <Input 
                            placeholder="Phone number" 
                            startDecorator={<PhoneInTalkOutlinedIcon />}
                            sx={{
                                '&:focus-within': {
                                    outline: '2px solid var(--Input-primary)',
                                    outlineOffset: '2px',
                                },
                                
                            }}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                            />
					</div>
				</div>

			</div>
			
    );
}