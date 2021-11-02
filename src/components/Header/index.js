import React from "react";

function Header () {
    return (
        <header style={headerStyle}>
            <h1>Eminent Employee Directory</h1>
            <p style={ subStyle }>Eminently search for an Employee below</p>
        </header>
    )
}

const headerStyle ={
    background: "#005d4b",
    //borderBottom: '#092532',
    color: "#cdd1d5",
    textAlign: "center",
    padding: "10px",
    borderBottom: "10px solid #cdd1d5"
}

const subStyle ={
    color: "#cdd1d5"
}

export default Header;