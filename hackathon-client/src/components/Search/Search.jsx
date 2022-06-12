import React, { useState } from "react";
import { SearchList } from "../SearchList/SearchList";
import { MainSelect } from "../MainSelect/MainSelect";
import styles from './Search.module.scss'

export const Search = ({ data, councilList }) => {
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
		<div className={styles.search}>
			<MainSelect optionList={councilList} placeHolder={'Select Your Council'}/>
			<div className={styles.searchInputWrapper}>
				<input
					className={styles.searchInput}
					type="text"
					name="searchInput"
					value={inputValue}
					onChange={inputChange}
					autoComplete="off"
				/>
				<input className={styles.submitInput} type="submit" name="submit" value="search" />
				{inputValue && <SearchList matchArray={matchValue} value={inputValue} />}
			</div>
		</div>
	);
};
