import { useState } from "react";
import '../css/HeaderNavBar.css'

function HeaderNavBar(props) {

    return (
        <>
            <div id='HeaderNavBar'>
                <button className="navBarButton">About Me</button>
                <button className="navBarButton">Education</button>
                <button className="navBarButton">Experience</button>
                <button className="navBarButton">Contact</button>
            </div>
        </>
    )
}

export default HeaderNavBar;