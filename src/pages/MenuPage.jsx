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

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function MenuPage() {

	const imgCover = require('../static/header_img.png');
	const gCart = useSelector((state) => state.cart)

	console.log(gCart)



  return (
	<>
		<PageHeader0 title="Coffee Supreme - Cempaka Putih" imgCover={imgCover} />
		{/* <PageHeader title="Coffee Supreme - Cempaka Putih" /> */}
		<div className="container ">
			
			<div className='container-between mt-1  text-big2 '>
				<div><h4 className='text-primary mt-0 '><b>Today's Offer</b></h4></div>
				<div><img src={NextArrow} className=' mt-0 ' width={25} height={25} /></div>
			</div>
			<div>
				<TodayOffer />
			</div>
			

			<div  className='mt-5 text-black2 text-big2'>
				<h4 className='mb-1'><b>For You</b></h4>
			</div>
			<div>
				<ForYou />
			</div>
			

			<div  className='text-black2 text-big2'>
				<h4><b>Special Offers</b></h4>
			</div>
			<div>
				<MenuList />
			</div>
			



			<div className="space-10"></div>
			
			
		</div>
		<div className="container-float btm-0 vw-100">

				<div className='container overflow-none'>
					<CheckoutItem  targetLink={'/cart'} />	
				</div>
			
			<div className=" bg-white w-100  card-t-shadow  ">
				
				<div >
					<div className="container-between pt-1 pb-1 ">
						<div className="flex-left  w-50 text-center">
							<Link to="/menu">
								<img src={Book} />
								
							</Link>
							<div  className="text-small1 ">Menu</div>
						</div>
						<div  className="flex-right w-50 text-center ">
							<Link to="/cart">
								<img src={Paper} />
								
							</Link>
							<div className="text-small1 text-primary">Order List</div>
						</div>
					</div>
				</div>
				
			</div>
				
		</div>
    </>
  );
}

export default MenuPage;
