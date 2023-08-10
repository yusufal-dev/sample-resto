import logo from '../logo.svg';
import '../App.css';
import '../styles/basicStyle.css';
import '../styles/layoutStyle.css';
import '../styles/utilStyle.css';

import NextArrow from '../static/icons/next_arrow.png';
import Book from '../static/icons/Book.png';
import Paper from '../static/icons/Paper.png';

import MenuList from '../components/Menu/MenuList';
import MenuItem from '../components/Menu/MenuItem';
import TodayOffer from '../components/Menu/TodayOffer';
import ForYou from '../components/Menu/ForYou';
import CheckoutItem from '../components/CheckoutItem';

import { PageHeader0 } from '../components/PageHeader/PageHeader0';
import { PageHeader1 as PageHeader } from '../components/PageHeader/PageHeader1';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PageBottom from '../components/PageBottom/PageBottom';
import useCheckOrder from '../hooks/useCheckOrder';

function MenuPage() {

	useCheckOrder();

	const restaurantInfo = useSelector((state)=>state.restaurantInfo)
	const menus = useSelector((state) => state.menusList)
	console.log(menus.menuList)

	const imgCover = require('../static/header_img.png');
	const gCart = useSelector((state) => state.cart)

	
  return (
	<>
		<PageHeader0 title={restaurantInfo.restaInfo.name} imgCover={imgCover} />
		{/* <PageHeader title="Coffee Supreme - Cempaka Putih" /> */}
		<div className="container ">
			{menus?.menuTodayOffer?.items?.length > 0  ? 
			<>
				<div className='container-between mt-1  text-big2 '>
					<div><h4 className='text-primary mt-0 '><b>Today's Offer</b></h4></div>
					<div><img src={NextArrow} className=' mt-0 ' width={25} height={25} /></div>
				</div>
			
				<div>
					<TodayOffer   menuData={menus.menuTodayOffer.items}  />
				</div>
			
			</>
			
			: 
			<div></div>
			}
			
			{menus?.menuForYou?.items?.length > 0  ? 
			<>
				<div  className='mt-5 text-black2 text-big2'>
					<h4 className='mb-1'><b>For You</b></h4>
				</div>
			
				<div>
					<ForYou  menuData={menus.menuForYou.items} />
				</div>
			
			</>
			
			: 
			<div></div>
			}
			
			{
				menus.menuList?.map(categList =>
					<>
						<div key={"title-menu-list"+categList.categ_id}  className='text-black2 text-big2'>
							<h4><b>{categList.name}</b></h4>
						</div>
						<div key={"menu-list"+categList.categ_id} >
							<MenuList   menuData={categList.items}  />
						</div>
					
					</>
				)
			}




			<div className="space-10"></div>
			<div className="space-10"></div>
			
			
		</div>

		<PageBottom
			extraComponent={<CheckoutItem  targetLink={'/cart'} />	}
		/>

		
    </>
  );
}

export default MenuPage;
