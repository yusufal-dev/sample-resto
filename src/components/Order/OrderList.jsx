import '../../styles/basicStyle.css';
import OrderItem from './OrderItem';


export default function OrderList({item}){




	const orderData = [
	{
		name: "Ayam Bakar Komplit",
		description: "ayam bakar + nasi + sambal + lalapan + tempe + es teh manis",
		note: "pedes sedang",
		price: 28990,
		total: 2
		
	},
	{
		name: "Ayam Bakar Komplit",
		description: "ayam bakar + nasi + sambal + lalapan + tempe + es teh manis",
		note: "pedes extra",
		price: 28990,
		total: 1
		
	},
	{
		name: "Paket Ayam Penyet Komplit",
		description: "ayam penyet + nasi + sambal + lalapan + tempe + es teh manis",
		note: "pedes banget",
		price: 28990,
		total: 3
		
	},
	{
		name: "Paket Ayam Penyet Komplit",
		description: "ayam penyet + nasi + sambal + lalapan + tempe + es teh manis",
		note: "tidak pedas",
		price: 28990,
		total: 1
		
	}
		
	];
	
	return(
		<div>
		
		{
			item.map((item, index) =>  <OrderItem key={index}  item={item} />)
			
		}
			
		
		</div>
	
	);
	
}