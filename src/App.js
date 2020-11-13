import {
	Card,
	CardContent,
	FormControl,
	MenuItem,
	Select,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import InfoBox from "./InfoBox";
import LineGraph from "./LineGraph";
import Map from "./Map";
import Table from "./Table";
import { prettyPrintStat, sortData } from "./util";
import "leaflet/dist/leaflet.css";

function App() {
	// API = https://disease.sh/v3/covid-19/countries
	const [countries, setCountries] = useState([]);
	const [country, setCountry] = useState("Select Country");
	const [countryInfo, setCountryInfo] = useState({});
	const [tableData, setTableData] = useState([]);
	const [mapCountries, setMapCountries] = useState([]);
	const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
	const [mapZoom, setMapZoom] = useState(3);
	const [casesType, setCasesType] = useState("cases");

	useEffect(() => {
		// 在未選取國家時，顯示全球統計資料
		fetch("https://disease.sh/v3/covid-19/all")
			.then((response) => response.json())
			.then((data) => {
				setCountryInfo(data);
			});
	}, []);

	useEffect(() => {
		const getCountriesData = async () => {
			await fetch("https://disease.sh/v3/covid-19/countries")
				.then((respons) => respons.json())
				.then((data) => {
					const countries = data.map((country) => ({
						name: country.country, // get country name
						value: country.countryInfo.iso2, // get country short name  exsample: TW UK JP USA
					}));
					const sortedData = sortData(data);
					setTableData(sortedData);
					setCountries(countries);
					setMapCountries(data);
				});
		};
		getCountriesData();
	}, []);

	const onCountryChange = async (e) => {
		// 顯示選取國家的統計資料
		const countryCode = e.target.value;
		const url =
			countryCode === "Select Country"
				? "https://disease.sh/v3/covid-19/all"
				: `https://disease.sh/v3/covid-19/countries/${countryCode}`;
		await fetch(url)
			.then((response) => response.json())
			.then((data) => {
				// get country short name
				setCountry(countryCode);
				setCountryInfo(data);
				setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
				setMapZoom(4);
			});
	};

	return (
		<div className="app">
			<div className="app__left">
				<div className="app__header">
					<h1>COVID-19 Tracker</h1>
					<FormControl className="app__dropDown">
						<Select
							variant="outlined"
							value={country}
							onChange={onCountryChange}>
							<MenuItem value="Select Country">Select Country</MenuItem>
							{countries.map((country) => (
								<MenuItem value={country.value}>{country.name}</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>

				<div className="app__stats">
					<InfoBox
						isRed
						active={casesType === "cases"}
						onClick={(e) => setCasesType("cases")}
						title="CoronaVirus Cases"
						cases={prettyPrintStat(countryInfo.todayCases)}
						total={countryInfo.cases}
					/>
					<InfoBox
						isGreenYellow
						active={casesType === "recovered"}
						onClick={(e) => setCasesType("recovered")}
						title="Recovered"
						cases={prettyPrintStat(countryInfo.todayRecovered)}
						total={countryInfo.recovered}
					/>
					<InfoBox
						isBlack
						active={casesType === "deaths"}
						onClick={(e) => setCasesType("deaths")}
						title="Deaths"
						cases={prettyPrintStat(countryInfo.todayDeaths)}
						total={countryInfo.deaths}
					/>
				</div>
				<Map
					countries={mapCountries}
					casesType={casesType}
					center={mapCenter}
					zoom={mapZoom}
				/>
			</div>

			<Card className="app__right">
				<CardContent>
					<h3>Live Case by Country</h3>
					<Table countries={tableData} />
					<h3 className="app__graphTitle">Worldwide New {casesType}</h3>
					<LineGraph className="app__graph" casesType={casesType} />
				</CardContent>
			</Card>
		</div>
	);
}

export default App;
