import '../../App.css';
import '../../styles/basicStyle.css';
import '../../styles/layoutStyle.css';
import '../../styles/utilStyle.css';
import ArrowLeft from '../../static/icons/Arrow_alt_left_alt.png';
import Refresher from '../../static/icons/Refresh.png';

import { Link } from 'react-router-dom';


export  function PageHeader2({title, backTo}){
	
	return(
		<div className="card-b-shadow">
			<div className="card-body px-1 ">
				<div className="container-between h-inherit pt-2 ">
					<div className='w-10 text-center'>
						
							<Link to={backTo} >
								<img  src={ArrowLeft}  />
							</Link>
						
					</div>
					<div className=' text-center'>
						<h3 className='mt-1 mb-1'>{title}</h3>
					</div>
					<div  className='w-10 text-center'>
						<img src={Refresher}  className='mt-1 mb-1' />
					</div>
			
			</div>
			
			</div>
			
			
		
		</div>
	
	);
	
}