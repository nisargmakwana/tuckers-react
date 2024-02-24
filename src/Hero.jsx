function Hero() {
	return (
		<>
			<section className="section-hero grid">
				<div className="hero-text-box">
					<h1 className="heading-hero heading-primary padding-b-20 h1-scaled">
						REAL, GOOD FOOD FOR DOGS
					</h1>
					<p className="text-hero">
						Our nutrient-packed recipes were meticulously formulated by
						board-certified veterinary nutritionists with quality, flavor and
						texture in mind. It’s what we like to call delicious science. And
						what all the furry folks go bonkers over.
					</p>
					<div>
						<a href="#" className="btn">
							Start trial!
						</a>
					</div>
				</div>
				<div className="hero-image-box">
					<img
						className="hero-image h-element"
						src="./src/assets/img/dog_eating_tuckers_at_counter.jpg"
						alt="dog eating tucker's food"
					/>
				</div>
			</section>
		</>
	);
}

export default Hero;
