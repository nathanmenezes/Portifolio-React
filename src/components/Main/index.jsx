import React from 'react';
import "./Main.css"
import Eu from "../../images/Main-Image.png"

function Main() {
    return(
        <main>
            <div className="main-content">
                <div className="main-texts">
                    <h1>Nathan, <br/><span>Full Stack Developer</span></h1>
                    <p>
                        Trabalho no desenvolvimento de websites desde do front-end até o back-end.
                    </p>
                    <button>Me Contate !!</button>
                </div>
                <img src={Eu} alt="" />
            </div>
            <div className="phrase">
                <h3>
                    "Nós só podemos ver um pouco do futuro, mas o suficiente para perceber que há muito a fazer."
                </h3>
                <p>Alan Turing</p>
            </div>
        </main>
    )
}

export default Main;