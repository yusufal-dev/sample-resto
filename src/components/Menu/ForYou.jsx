import '../../styles/basicStyle.css';
import ForYouItem from './ForYouItem';
import AyamBakarKomplit from '../../static/menu-images/ayam-bakar-komplit.jpg';
import AyamPenyetKomplit from '../../static/menu-images/ayam-penyet-komplit.jpg';
import AyamBakar from '../../static/menu-images/ayam-bakar.jpg';
import AyamPenyet from '../../static/menu-images/ayam-penyet.jpg';
import NasiPutih from '../../static/menu-images/nasi-putih.jpg';
import EsTehManis from '../../static/menu-images/es-teh-manis.jpg';



export default function ForYou(){

    const menuData = [
        {
            key: 1,
            name: "Ayam Bakar Komplit",
            description: "ayam bakar + nasi + sambal + lalapan + tempe + es teh manis",
            price: 28990,
            image: {
                src:AyamBakarKomplit,
                alt: "ayam-bakar-komplit"
            }
        },
        {
            key: 2,
            name: "Paket Ayam Penyet Komplit",
            description: "ayam penyet + nasi + sambal + lalapan + tempe + es teh manis",
            price: 28990,
            image: {
                src:AyamPenyetKomplit,
                alt: "ayam-penyet-komplit"
            }
        },
        {
            key: 3,
            name: "Ayam Bakar ",
            description: "ayam bakar + nasi + sambal + lalapan",
            price: 15990,
            image: {
                src:AyamBakar,
                alt: "ayam-bakar"
            }
        },
        {
            key: 4,
            name: "Ayam Penyet",
            description: "ayam penyet + nasi + sambal + lalapan",
            price: 15990,
            image: {
                src:AyamPenyet,
                alt: "ayam-penyet"
            }
        },
        {
            key: 5,
            name: "Nasi putih",
            description: "",
            price: 6400,
            image: {
                src:NasiPutih,
                alt: "nasi-putih"
            }
        },
        {
            key: 6,
            name: "Es teh manis",
            description: "",
            price: 4900,
            image: {
                src:EsTehManis,
                alt: "es-teh-manis"
            }
        }
            
    ];

    return(
        <div className="for-you-container">
            
            {
                menuData.map(item =>  <ForYouItem key={item.name}  item={item} />)
                
            }
			
        </div>
    );
}