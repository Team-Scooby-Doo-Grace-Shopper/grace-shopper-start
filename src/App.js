import React from 'react';
import Nav from './components/nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Cards from './features/cards/Cards';
import SingleCard from './features/cards/singleCard';
import Cart from './features/cart/Cart';
import Profile from './features/profile/Profile';
import Login from './features/login/Login';
import SignUp from './features/signUp/SignUp';
import ViewOrders from './features/admin/ViewOrders';
import ViewUsers from './features/admin/ViewUsers';
import CreateCard from './features/admin/CreateCard'

export default function App() {
	return (
		<div className="App">

			{/* <Nav /> */}
	
				<Routes>
					<Route index path="/cards" element={<Cards />} />
					<Route index path="/cards/:id" element={<SingleCard />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route exact path="/cart" element={<Cart />} />
					<Route path = '/login' element = {<Login/>}/>
					<Route path = '/signUp' element={<SignUp/>}/>
					<Route path = '/admin/viewOrders' element = {<ViewOrders/>}/>
					<Route path = '/admin/viewUsers' element ={<ViewUsers/>}/>
					<Route path = '/admin/createCard' element ={<CreateCard/>}/>
				</Routes>

		</div>
	);
}
