import React, { useState } from "react";

document.title = "Traffic Light";

//create your first component
export function TrafficLight() {
	let [colorRed, setColorRed] = useState("red");
	let [colorYellow, setColorYellow] = useState("yellow");
	let [colorGreen, setColorGreen] = useState("green");

	function changeRed() {
		if (colorRed == false) {
			setColorRed(true);
			setColorYellow(false);
			setColorGreen(true);
		} else {
			setColorRed(false);
		}
	}

	function changeYellow() {
		if (colorYellow == false) {
			setColorRed(false);
			setColorYellow(true);
			setColorGreen(false);
		} else {
			setColorYellow(false);
		}
	}
	function changeGreen() {
		if (colorGreen == false) {
			setColorRed(false);
			setColorYellow(false);
			setColorGreen(true);
		} else {
			setColorGreen(false);
		}
	}

	return (
		<div className="container">
			<div className={"red btnRYG"} onClick={changeRed}></div>
			<div className={"yellow btnRYG "} onClick={changeYellow}></div>
			<div className={"green btnRYG "} onClick={changeGreen}></div>
		</div>
	);
}
