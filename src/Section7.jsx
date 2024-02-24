function Section7() {
	return (
		<>
			<section className="section-7">
				<div className="section--7-left">
					<h1 className="h-element">SEE WHAT THEY’RE BARKING ABOUT</h1>
				</div>
				<div className="section--7-right">
					<p>Get on our list for special offers and more.</p>

					<input
						type="email"
						name="name"
						id="input-email"
						placeholder="Enter email address"
						size="40"
					/>
					<input type="submit" value="Sign up" id="sign-up" />
					<p>
						By continuing, you agree to receive special offers, product updates,
						news, and other marketing emails from Nom Nom and its Mars Petcare
						affiliates in accordance with our Privacy Policy. You may
						unsubscribe at any time.
					</p>
				</div>
			</section>
		</>
	);
}

export default Section7;
