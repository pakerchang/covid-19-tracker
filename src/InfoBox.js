import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import numeral from "numeral";
import "./InfoBox.css";

function InfoBox({
	title,
	cases,
	isRed,
	isBlack,
	isGreenYellow,
	total,
	active,
	...props
}) {
	return (
		<Card
			onClick={props.onClick}
			className={`infoBox ${active && "infoBox--selected"} ${
				isRed && "infoBox--isRed"
			} ${isBlack && "infoBox--isBlack"}`}>
			<CardContent>
				<Typography className="infoBox__title" color="textSecondary">
					<strong>{title}</strong>
				</Typography>
				<h2
					className={`infoBox__cases ${
						isGreenYellow && "infoBox__cases--greenyellow"
					} ${isBlack && "infoBox__cases--black"}`}>
					{cases}
				</h2>
				<Typography className="infoBOx__total" color="textSecondary">
					{numeral(total).format("0,0")} Total
				</Typography>
			</CardContent>
		</Card>
	);
}

export default InfoBox;
