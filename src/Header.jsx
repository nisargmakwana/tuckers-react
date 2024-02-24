function Header() {
	return (
		<>
			<header className="header sticky">
				<a className="logo-link" href="#">
					<img
						className="logo"
						src="./src/assets/img/logo.png"
						alt="Tucker's logo"
					/>
				</a>
				<nav className="main-nav">
					<ul className="main-nav-list">
						<li className="main-nav-item">
							<a href="" className="main-nav-link">
								HOW IT WORKS
							</a>
						</li>
						<li className="main-nav-item">
							<a href="" className="main-nav-link">
								RECIPES
							</a>
						</li>
						<li className="main-nav-item">
							<a href="" className="main-nav-link">
								HEALTH
							</a>
						</li>
						<li className="main-nav-item">
							<a href="" className="main-nav-link">
								REVIEWS
							</a>
						</li>
						<li className="main-nav-item">
							<a href="" className="main-nav-link">
								LOG IN
							</a>
						</li>
						<li className="main-nav-item">
							<a href="#" className="btn" id="nav-cta-link">
								Start trial
							</a>
						</li>
					</ul>
				</nav>
				<button className="btn-mobile-nav">
					<ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
					<ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
				</button>
			</header>
		</>
	);
}

export default Header;
