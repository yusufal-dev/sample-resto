import '../../styles/basicStyle.css';
import ForYouItem from './ForYouItem';
import AyamBakarKomplit from '../../static/menu-images/ayam-bakar-komplit.jpg';
import AyamPenyetKomplit from '../../static/menu-images/ayam-penyet-komplit.jpg';
import AyamBakar from '../../static/menu-images/ayam-bakar.jpg';
import AyamPenyet from '../../static/menu-images/ayam-penyet.jpg';
import NasiPutih from '../../static/menu-images/nasi-putih.jpg';
import EsTehManis from '../../static/menu-images/es-teh-manis.jpg';



export default function ForYou({menuData}){

  

    return(
        <div className="for-you-container">
            
            {
                menuData.map(item =>  <ForYouItem key={item.item_id}  item={item} />)
                
            }
			
        </div>
    );
}