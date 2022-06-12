import React from "react";
import styles from './SearchItem.module.scss'

export const SearchItem = ({ matchedItem, value }) => {
	let index = matchedItem.toLowerCase().indexOf(value.toLowerCase());

	return (
		<li
			className={styles.SearchItem}
			// onClick={() => {
			// 	addItem(data);
			// }}
		>
			<span>
				{matchedItem.slice(0, index)}
				<span className={styles.highlight}>{value}</span>
				{matchedItem.slice(index + value.length, matchedItem.length)}
			</span>
		</li>
	);
};
