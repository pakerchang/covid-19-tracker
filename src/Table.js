import numeral from "numeral";
import React from "react";
import "./Table.css";

function Table({ countries }) {
	return (
		<div className="table">
			{countries.map(({ country, cases }) => (
				<tr className="table__rows" >
					<td className="table__data">{country}</td>
					<td className="table__data">
						<strong>{numeral(cases).format("0,0")}</strong>
					</td>
				</tr>
			))}
		</div>
	);
}

export default Table;
