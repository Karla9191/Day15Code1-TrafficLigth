import React from "react";

document.title = "Traffic Light";

export default class TrafficLight extends React.Component {
	render() {
		return <div>Hello World</div>;
	}
}

/*
//create your first component
export function TrafficLight() {
	let [colorRed, setColorRed] = useState(false);
	let [colorYellow, setColorYellow] = useState(false);
	let [colorGreen, setColorGreen] = useState(false);

	function changeRed() {
		if (colorRed == false) {
			setColorRed(true);
			setColorYellow(false);
			setColorGreen(false);
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
*/
