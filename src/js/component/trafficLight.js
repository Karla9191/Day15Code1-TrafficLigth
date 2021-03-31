import React, { useState, useEffect } from "react";

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
		<div className="button text-center mt-5">
			<div className="btnAll">
				<div>
					<button className={"btn-1"} onClick={change1}></button>
					{color1 ? <ShowColor /> : "red"}
				</div>
				<div>
					<button className={"btn-2"} onClick={change3}></button>
				</div>
				<div>
					<button className={"btn-3"} onClick={change3}></button>
				</div>
			</div>
		</div>
	);

	function ShowColor() {}
}
