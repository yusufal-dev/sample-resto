import '../../styles/basicStyle.css';
import MenuItem from './MenuItem';
import AyamBakarKomplit from '../../static/menu-images/ayam-bakar-komplit.jpg';
import AyamPenyetKomplit from '../../static/menu-images/ayam-penyet-komplit.jpg';
import AyamBakar from '../../static/menu-images/ayam-bakar.jpg';
import AyamPenyet from '../../static/menu-images/ayam-penyet.jpg';
import NasiPutih from '../../static/menu-images/nasi-putih.jpg';
import EsTehManis from '../../static/menu-images/es-teh-manis.jpg';


export default function MenuList({menuData}){
	
	
	return (
		<div className='menu-list-container'>
		{
			menuData.map(item =>  <MenuItem key={item.name}  item={item} />)
			
		}
			
		
		</div>
		
	);
}