import React, { useState } from "react";
import { SearchList } from "../SearchList/SearchList";
import { MainSelect } from "../MainSelect/MainSelect";
import styles from './Search.module.scss'

export const Search = ({ data, type, handleInputValue }) => {
	const [inputValue, setInputValue] = useState("");
	const [matchValue, setMatchValue] = useState([]);

	const inputChange = (e) => {
		setInputValue(e.target.value);
		if (e.target.value.length > 0) {
			findMatches(e.target.value);
		}
		handleInputValue(e.target.value)
	};

	const findMatches = (typedWord) => {
		const regex = new RegExp(typedWord, "gi");
		let matchArray = type === 'item'? data.filter((item) => item.itemName.match(regex)) : data.filter((item) => item.councilName.match(regex));
		console.log(matchArray);
		setMatchValue(matchArray);
	};

	return (
		<div className={styles.search}>
			<div className={styles.searchInputWrapper}>
				<input
					className={styles.searchInput}
					type="text"
					name="searchInput"
					value={inputValue}
					onChange={inputChange}
					autoComplete="off"
				/>
				{inputValue && <SearchList matchArray={matchValue} value={inputValue} type={type}/>}
			</div>
		</div>
	);
};
