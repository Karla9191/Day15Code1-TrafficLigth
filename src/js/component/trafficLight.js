import React, { useState } from "react";

document.title = "Traffic Light";

//create your first component
export function TrafficLight() {
	let [color1, setColor1] = useState(false);
	let [color2, setColor2] = useState(false);
	let [color3, setColor3] = useState(false);

	function change1() {
		if (color1 == false) {
			setColor1(true);
			setColor2(false);
			setColor3(false);
		} else {
			setColor1(false);
		}
	}
	function change2() {
		if (color2 == false) {
			setColor1(false);
			setColor2(true);
			setColor3(false);
		} else {
			setColor2(false);
		}
	}
	function change3() {
		if (color3 == false) {
			setColor1(false);
			setColor2(false);
			setColor3(true);
		} else {
			setColor3(false);
		}
	}

	return (
		<div className="container">
			<div className={"btn-R"} onClick={change1}></div>
			<div className={"btn-Y"} onClick={change3}></div>
			<div className={"btn-G"} onClick={change3}></div>
		</div>
	);
	/*
    {color1 ? <ShowColor /> : null}
	function ShowColor() {}
    */
}
