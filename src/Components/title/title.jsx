import React from "react"
import "./title.css"
import letterP from "../../images/titleLetters/Vector-P.svg"
import letterA from "../../images/titleLetters/Vector-A.svg"
import letterL from "../../images/titleLetters/Vector-L.svg"
import letterO from "../../images/titleLetters/Vector-O.svg"
import letterM from "../../images/titleLetters/Vector-M.svg"



const TitleComponent = () => {
    return (
        <div className="title-container">
            <div className="letter-container">
                <img src={letterA} alt="A" className="letter" />
            </div>

            <div className="letter-container">
                <img src={letterM} alt="M" className="letter" />
            </div>

            <div className="letter-container">
                <img src={letterO} alt="O" className="letter" />
            </div>

            <div className="letter-container">
                <img src={letterL} alt="L" className="letter" />
            </div>

            <div className="letter-container">
                <img src={letterA} alt="A" className="letter" />
            </div>

            <div className="letter-container">
                <img src={letterP} alt="P" className="letter" />
            </div>

        </div>
    )
}

export default TitleComponent