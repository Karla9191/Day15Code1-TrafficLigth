import React from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}

	render() {
		let redNewClass = "";
		if (this.state.clickedLight == "red") redNewClass = "selected";
		let yellowNewClass = "";
		if (this.state.clickedLight == "yellow") yellowNewClass = "selected";
		let greenNewClass = "";
		if (this.state.clickedLight == "green") greenNewClass = "selected";

		return (
			<div>
				<div id="trafficTop"></div>
				<div id="contenedor">
					<div
						className={"red light " + redNewClass}
						onClick={() =>
							this.setState({ clickedLight: "red" })
						}></div>
					<div
						className={"yellow light " + yellowNewClass}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}></div>
					<div
						className={"green light " + greenNewClass}
						onClick={() =>
							this.setState({ clickedLight: "green" })
						}></div>
				</div>
			</div>
		);
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
