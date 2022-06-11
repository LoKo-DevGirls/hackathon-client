import React from "react";
//import styles from './SearchItem.module.css'
import {SearchItem} from "../SearchItem/SearchItem";

export const SearchList = ({ matchArray, value }) => {
	let list = "";
	if (matchArray && matchArray.length > 0) {
		list = matchArray.map((data) => {
			return <SearchItem data={data} key={data} value={value} />;
		});
	}
	return <ul className="searchList">{list}</ul>;
};
