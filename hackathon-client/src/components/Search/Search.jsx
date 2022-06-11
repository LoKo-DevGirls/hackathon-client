import React, { useState } from "react";
import { SearchList } from "../SearchList/SearchList";

export const Search = ({ data }) => {
	const [inputValue, setInputValue] = useState("");
	const [matchValue, setMatchValue] = useState([]);

	const inputChange = (e) => {
		setInputValue(e.target.value);
		if (e.target.value.length > 0) {
			findMatches(e.target.value);
		}
	};

	const findMatches = (typedWord) => {
		const regex = new RegExp(typedWord, "gi");
		// console.log(data.filter((item) => item.itemName.match(regex)))
		let matchArray = data.filter((item) => item.itemName.match(regex));
		setMatchValue(matchArray);
	};

	return (
		<div className="search">
			<input
				type="text"
				name="searchInput"
				className="searchInput"
				value={inputValue}
				onChange={inputChange}
				autoComplete="off"
			/>
			<input type="submit" name="submit" value="search" />
			{inputValue && <SearchList matchArray={matchValue} value={inputValue} />}
		</div>
	);
};
