import React from "react";
const Contenedor = () => {
    return(
        <div>
            <main className="Card">
                <img src="https://github.com/makeitrealcamp/top-v30/blob/main/challenges/qr-code-component/images/image-qr-code.png?raw=true"
                 alt="QR" 
                 className = "Card__Img"
                 />
                <div className="Card__Text">
                    <h1 className="Card_Text_Subtitle">Improve your front-end skills by building projects</h1>
                    <p className="Card__Text_Parrafo">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div> 
                 
            </main>
        </div>
    );
};
 
export default Contenedor;

