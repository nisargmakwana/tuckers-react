import { useState } from "react";
function Quotes() {
	const [quote, setQuote] = useState(
		"My dog jumps with excitement at meal time."
	);
	function changingQuote() {}

	return (
		<>
			<section class="section-quotes">
				<h1 class="quotes" id="changingText">
					"My dog jumps with excitement at meal time."
				</h1>
			</section>
		</>
	);
}

export default Quotes;
