import '../styles/basicStyle.css';
import '../styles/layoutStyle.css';
import '../styles/utilStyle.css';


export default function ButtonCancel({title, onClick, disabled}){
	
	const pointer = disabled ? " btn-disabled" : " pointer"
	const forClick = disabled ? null : onClick

	return(
		<div className={"button-confirm pt-1 pb-1"+pointer} onClick={forClick}>
			<div className="text-mid h-inherit"><b>{title}</b></div>
		
		</div>
	
	);
}