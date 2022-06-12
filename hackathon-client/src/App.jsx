import { useState, useEffect } from "react";
import "./App.scss";
import fonts from "./style/fonts.module.scss";
import styles from "./style/mainPage.module.scss";
import { Search } from "./components/Search/Search";
import { Link, useNavigate } from "react-router-dom";

function App() {
	const [items, setItems] = useState([]);
	const [councils, setCouncils] = useState([]);
	const [keywords, setKeywords] = useState();
	const [councilName, setCouncilName] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		const loadItems = async () => {
			try {
				const response = await fetch("https://on-the-ground-api.herokuapp.com/allitem", {
					headers: { "Content-Type": "application/json" },
					method: "GET"
				});
				const data = await response.json();
				console.log(data);
				setItems(data);
			} catch (err) {
				console.error(err);
			}
		};
		const loadCouncils = async () => {
			try {
				const response = await fetch("https://on-the-ground-api.herokuapp.com/councils", {
					headers: { "Content-Type": "application/json" },
					method: "GET"
				});
				const data = await response.json();
				console.log(data);
				setCouncils(data);
			} catch (err) {
				console.error(err);
			}
		};
		loadItems();
		loadCouncils();
		console.log(councils);
	}, []);

	const getCouncilId = () => (councilName === "hackney" ? "2" : "1");

	const handleSearchButton = () => {
		navigate(`/search-result/${getCouncilId()}/${keywords}`);
	};

	return (
		<div className={["App", styles.mainPage].join(" ")}>
			<section className={styles.wrapper}>
				<header className="App-header">
					<img className={styles.logo} src="./assets/Logos/Logo-03.png" alt="on the ground main logo" />
				</header>
				<Search data={councils} type="council" handleInputValue={setCouncilName} />
				<Search data={items} type="item" handleInputValue={setKeywords} />
				<div className={styles.buttonWrapper}>
					<Link to="/add-item">
						<button className={styles.addItemButton}>
							<img src="./assets/Icons/plus.svg" />
							<span>Add New Item</span>
						</button>
					</Link>
					<button className={styles.searchButton} onClick={() => handleSearchButton()}>
						Search
					</button>
				</div>
			</section>
		</div>
	);
}

export default App;
