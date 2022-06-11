import React from "react";

export const SearchItem = ({ matchedItem, value }) => {
	let index = matchedItem.indexOf(value);

	return (
		<li
			className="SearchItem"
			// onClick={() => {
			// 	addItem(data);
			// }}
		>
			<span className="listTimezone">
				{matchedItem.slice(0, index)}
				<span className="highlight">{value}</span>
				{matchedItem.slice(index + value.length, matchedItem.length)}
			</span>
		</li>
	);
};
