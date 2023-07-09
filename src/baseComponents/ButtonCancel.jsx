import '../styles/basicStyle.css';
import '../styles/layoutStyle.css';
import '../styles/utilStyle.css';


export default function ButtonConfirm({title, onClick}){
	
	return(
		<div className="button-confirm button-cancel pt-1 pb-1" onClick={onClick}>
			<div className="text-mid h-inherit"><b>{title}</b></div>
		
		</div>
	
	);
}