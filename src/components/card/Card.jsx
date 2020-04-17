import React from "react";
import "./Card.css";

function Card(props) {
	return (
		<section className="card">
			<span className="emoji" role="img" aria-labelledby="emoji">
				{props.emoji}
			</span>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</section>
	);
}

export default Card;
