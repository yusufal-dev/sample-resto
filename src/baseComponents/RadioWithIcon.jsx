import '../styles/basicStyle.css';
import '../styles/layoutStyle.css';
import '../styles/utilStyle.css';


export default function RadioWithIcon({title, id, name, icon, btnDisabled}){
	
	var disabled = btnDisabled ? 'btn-disabled' : '';
	
	return(
		<div class="input-container">
			
			<input  type="radio" id={id} name={name} />
			<label>
				<div className="container-between">
					<div className=" pl-2">
						<img  src={icon} />
					</div>
					<div className=" pl-3">
						<b>{title}</b>
					</div>
				</div>
				
				
				
			</label>
		</div>
	
	);
}