import '../styles/basicStyle.css';
import '../styles/layoutStyle.css';
import '../styles/utilStyle.css';


export default function ButtonConfirm({title, icon, btnDisabled}){
	
	var disabled = btnDisabled ? 'btn-disabled' : '';
	
	return(
		<div className={"button-with-icon " + disabled}>
			<div className="icon-div">
				<img  src={icon} />
			</div>
			<div className="text-mid"><b>{title}</b></div>
		
		</div>
	
	);
}