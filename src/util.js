import React from "react";
import numeral from "numeral";
import { Circle, Popup, Marker } from "react-leaflet";
import { AwesomeMarkers, icon } from "leaflet";


const casesTypeColors = {
	cases: {
		hex: "#CC1034",
		rgb: "rgb(204, 16, 52)",
		multiplier: 800,
	},
	recovered: {
		hex: "#7dd71d",
		rgb: "rgb(125, 215, 29)",
		multiplier: 1200,
	},
	deaths: {
		hex: "#aaaaa",
		rgb: "rgb(0, 0, 0)",
		multiplier: 2000,
	},
};

export const sortData = (data) => {
	const sortedData = [...data];

	return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));

	// sortedData.sort((a, b) => {
	// 	if (a.cases > b.case) {
	// 		return -1;
	// 	} else {
	// 		return 1;
	// 	}
	// });
	// return sortedData;
};

export const prettyPrintStat = (stat) =>
	stat ? `+${numeral(stat).format("0,0a")}` : "+0";

export const showDataOnMap = (data, casesType = "cases") =>
	data.map((country) => (
		<Marker position={[country.countryInfo.lat, country.countryInfo.long]} >
			<Popup>
				<div className="info__container">
					<div
						className="info__flag"
						style={{
							backgroundImage: `url(${country.countryInfo.flag})`,
						}}
					/>
					<div className="info__countryName">{country.country}</div>
					<div className="info__confirmed">
						Case: {numeral(country.cases).format("0,0")}
					</div>
					<div className="info__recovered">
						Recovered: {numeral(country.recovered).format("0,0")}
					</div>
					<div className="info__deaths">
						Deaths: {numeral(country.deaths).format("0,0")}
					</div>
				</div>
			</Popup>
		</Marker>

		// <Circle
		// 	center={[country.countryInfo.lat, country.countryInfo.long]}
		// 	color={casesTypeColors[casesType].hex}
		// 	fillColor={casesTypeColors[casesType].hex}
		// 	fillOpacity={0.4}
		// 	radius={
		// 		Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
		// 	}>
		// 	<Popup>
		// 		<div className="info__container">
		// 			<div
		// 				className="info__flag"
		// 				style={{
		// 					backgroundImage: `url(${country.countryInfo.flag})`,
		// 				}}
		// 			/>
		// 			<div className="info__countryName">{country.country}</div>
		// 			<div className="info__confirmed">
		// 				Case: {numeral(country.cases).format("0,0")}
		// 			</div>
		// 			<div className="info__recovered">
		// 				Recovered: {numeral(country.recovered).format("0,0")}
		// 			</div>
		// 			<div className="info__deaths">
		// 				Deaths: {numeral(country.deaths).format("0,0")}
		// 			</div>
		// 		</div>
		// 	</Popup>
		// </Circle>
	));
