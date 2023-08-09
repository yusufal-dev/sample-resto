import { isDisabled } from '@testing-library/user-event/dist/utils';
import '../styles/basicStyle.css';
import '../styles/layoutStyle.css';
import '../styles/utilStyle.css';


export default function ButtonConfirm({title, disabled}){
	
	const isDisabled = disabled ? ' disabled' : '';

	return(
		<div className={"button-pay pointer " + isDisabled}>
			<div className="text-mid mt-1 mb-1"><b>{title}</b></div>
		
		</div>
	
	);
}