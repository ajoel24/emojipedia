import React from "react";
import Card from "../card/Card";
import "./Cards.css";
import emojiData from "../data/emojiData";

function createCards(card) {
	return (
		<Card
			key={card.id}
			emoji={card.emoji}
			title={card.title}
			description={card.description}
		/>
	);
}

function Cards() {
	return <main>{emojiData.map(createCards)}</main>;
}

export default Cards;
