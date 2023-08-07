import '../../styles/basicStyle.css';
import OrderItem from './OrderItem';


export default function OrderList({item}){
	console.log(item)
	return(
		<div>
		{
			item.map((item, index) =>  <OrderItem key={index}  item={item} />)
		}
		</div>
	
	);
	
}