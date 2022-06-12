import React from "react";
import styles from './SearchList.module.scss'
import {SearchItem} from "../SearchItem/SearchItem";

export const SearchList = ({ matchArray, value, type, setInputValue, setShowSuggestion }) => {
	let list = "";
	if (matchArray && matchArray.length > 0) {
		if(type === 'item') {
		list = matchArray.map((matchedItem) => {
			return <SearchItem setShowSuggestion={setShowSuggestion} setInputValue={setInputValue} matchedItem={matchedItem.itemName} key={matchedItem.itemId} value={value} />;
		});
	}
	else{
		list = matchArray.map((matchedItem) => {
			return <SearchItem setShowSuggestion={setShowSuggestion} setInputValue={setInputValue} matchedItem={matchedItem.councilName} key={matchedItem.councilId} value={value} />;
		});
	}
	}
	return <ul className={styles.searchList}>{list}</ul>;
};
