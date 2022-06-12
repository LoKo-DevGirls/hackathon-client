import React from "react";
import styles from './SearchList.module.scss'
import {SearchItem} from "../SearchItem/SearchItem";

export const SearchList = ({ matchArray, value }) => {
	let list = "";
	if (matchArray && matchArray.length > 0) {
		list = matchArray.map((matchedItem) => {
			return <SearchItem matchedItem={matchedItem.itemName} key={matchedItem.itemId} value={value} />;
		});
	}
	return <ul className={styles.searchList}>{list}</ul>;
};
