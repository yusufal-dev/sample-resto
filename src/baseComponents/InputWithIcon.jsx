import '../styles/basicStyle.css';
import '../styles/layoutStyle.css';
import '../styles/utilStyle.css';


export default function InputWithIcon({title, icon, btnDisabled}){
	
	var disabled = btnDisabled ? 'btn-disabled' : '';
	
	return(
		<div class="input-container">
			<div className="icon-div">
				<img  src={icon} />
			</div>
			<input className="input-with-icon" type="text" placeholder={title} />
		</div>
	
	);
}