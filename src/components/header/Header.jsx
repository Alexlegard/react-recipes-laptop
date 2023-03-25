import React from 'react';

function Header() {
	return (<div className="Header">
		<div className="logo">React Recipes Logo</div>
		<nav className="navbar">
			<ul>
				<li><a href="#">Create</a></li>
				<li><a href="#">Edit</a></li>
				<li><a href="#">Delete</a></li>
			</ul>
		</nav>
	</div>)
}

export default Header;