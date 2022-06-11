import React from "react";
//import styles from './SearchItem.module.css'
import {SearchItem} from "../SearchItem/SearchItem";

export const SearchList = ({ matchArray, value }) => {
	let list = "";
	if (matchArray && matchArray.length > 0) {
		list = matchArray.map((matchedItem) => {
			return <SearchItem matchedItem={matchedItem.itemName} key={matchedItem.itemId} value={value} />;
		});
	}
	return <ul className="searchList">{list}</ul>;
};
