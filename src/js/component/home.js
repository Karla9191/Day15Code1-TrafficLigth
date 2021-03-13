import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {

    let [option1, setOption1] = useState ("Apagado");
    let [option2, setOption2] = useState ("Apagado");
    let [option3, setOption3] = useState ("Apagado");

    function optionA(){
        if (option1 == "Apagado"){
            setOption1("Encendido");
            setOption2("Apagado");
            setOption3("Apagado");
        }
    }

    function optionB(){
        if (option2 == "Apagado"){
            setOption1("Apagado");
            setOption2("Encendido");
            setOption3("Pagado");
        }
    }

    function optionC(){
        if (option2 == "Apagado"){
            setOption1("Apagado");
            setOption2("Apagado");
            setOption3("Encendido");
        }
    }


	return (
        <div className="text-center mt-5">
            <button onClick={option1}>{option1}</button>
            <button onClick={option2}>{option2}</button>
            <button onClick={option3}>{option3}</button>
		</div>
	);
}
