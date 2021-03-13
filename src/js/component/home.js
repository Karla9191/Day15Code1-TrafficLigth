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
        }
    }
	return (
		
        

        <div className="text-center mt-5">
		</div>
	);
}
