import React from "react";

function Footer () {
    return (
        <footer style={footerStyle}>
            <h5>Eminent Employee Directory</h5>
        </footer>
    )
}
const footerStyle ={
    background: "#005d4b",
    color: "#cdd1d5",
    textAlign: "center",
    padding: "10px",
    position: "sticky",
    left: "0",
    bottom: "0",
    width: "100%",
    borderTop: "10px solid #cdd1d5"
}

export default Footer;