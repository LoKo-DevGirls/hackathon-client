import React from "react";

export const SearchItem = ({ data, value }) => {
	let index = data.indexOf(value);

	return (
		<li
			className="SearchItem"
			data-zone={data}
			// onClick={() => {
			// 	addItem(data);
			// }}
		>
			<span className="listTimezone">
				{data.slice(0, index)}
				<span className="highlight">{value}</span>
				{data.slice(index + value.length, data.length)}
			</span>
		</li>
	);
};
