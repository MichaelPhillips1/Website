import { useState } from "react";
import '../css/HeaderNavBar.css'

function HeaderNavBar(props) {

    function scrollToClicked(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth", });
    }

    return (
        <>
            <div id='HeaderNavBar'>
                <button className="navBarButton" onClick={() => {
                    scrollToClicked("HeaderBanner")
                }}>Home</button>
                <button className="navBarButton" onClick={() => {
                    scrollToClicked("EducationHeader")
                }}>Education</button>
                <button className="navBarButton" onClick={() => {
                    scrollToClicked("ExperienceSegmentHeader")
                }}>Experience</button>
                <button className="navBarButton" onClick={() => {
                    scrollToClicked("ContactDiv")
                }}>Contact</button>
            </div>
        </>
    )
}

export default HeaderNavBar;