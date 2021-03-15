import React, { useState } from "react";

//create your first component
export function TrafficLight() {
	const [count, setCount] = useState(0);

	let [option1, setOption1] = useState("Apagado");
	let [option2, setOption2] = useState("Apagado");
	let [option3, setOption3] = useState("Apagado");

	function optionA() {
		if (option1 == "Apagado") {
			setOption1("Encendido");
			setOption2("Apagado");
			setOption3("Apagado");
		}
	}

	function optionB() {
		if (option2 == "Apagado") {
			setOption1("Apagado");
			setOption2("Encendido");
			setOption3("Pagado");
		}
	}

	function optionC() {
		if (option3 == "Apagado") {
			setOption1("Apagado");
			setOption2("Apagado");
			setOption3("Encendido");
		}
	}

	return (
		<div className="button text-center mt-5">
			<div className="btnAll">
				<button className="btn-1 btn-sm" onClick={}></button>
				<button className="btn-2 btn-sm" onClick={}></button>
				<button className="btn-3 btn-sm" onClick={}></button>
			</div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}
