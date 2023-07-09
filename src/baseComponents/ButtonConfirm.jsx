import '../styles/basicStyle.css';
import '../styles/layoutStyle.css';
import '../styles/utilStyle.css';


export default function ButtonCancel({title, onClick}){
	
	return(
		<div className="button-confirm pointer pt-1 pb-1" onClick={onClick}>
			<div className="text-mid h-inherit"><b>{title}</b></div>
		
		</div>
	
	);
}