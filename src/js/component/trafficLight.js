import React, { useState, useEffect } from "react";

//create your first component
export function TrafficLight() {
	let [color1, setColor1] = useState("off");
	let [color2, setColor2] = useState("off");
	let [color3, setColor3] = useState("off");

	function change1() {
		if (color1 == "off") {
			setColor1("on");
			setColor2("off");
			setColor3("off");
		} else {
			setColor1("off");
		}
	}
	function change2() {
		if (color2 == "off") {
			setColor1("off");
			setColor2("on");
			setColor3("off");
		} else {
			setColor2("off");
		}
	}
	function change3() {
		if (color3 == "off") {
			setColor1("off");
			setColor2("off");
			setColor3("on");
		} else {
			setColor3("off");
		}
	}

	return (
		<div className="button text-center mt-5">
			<div className="btnAll">
				<div>
					<button className={"btn-1"} onClick={change1}></button>
				</div>
				<div>
					<button className={"btn-2"} onClick={change2}></button>
				</div>
				<div>
					<button className={"btn-3"} onClick={change3}></button>
				</div>
			</div>
		</div>
	);
}
