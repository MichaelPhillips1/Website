import { useEffect, useState } from "react";

function BackgroundDots() {

    useEffect(() => {
        function createDot() {
            //Declare the container
            let container = document.getElementById("BackgroundDotsContainer");

            //Create a new div and assign it the class for a dot
            let newDot = document.createElement("div");
            newDot.classList.add("BackgroundDot");

            //Set the width and the height aspects of this element
            const size = Math.random() * 8 + 2;
            newDot.style.width = `${size}px`;
            newDot.style.height = `${size}px`;

            //Set the top and left positioning to be random
            newDot.style.top = `${Math.random() * 100}%`;
            newDot.style.left = `${Math.random() * 100}%`;

            //Declare the blue value for these dots in the background
            let b = Math.floor(Math.random() * 150 + 105);

            //Assign these values to the background and to the box shadow
            newDot.style.backgroundColor = `rgba(0, 0, ${b})`;
            newDot.style.boxShadow = `0 0 ${size * 4}px ${size * 1.5}px rgba(0, 0, ${b}, 1), 0 0 ${size * 8}px rgba(0, 0, ${b}, 0.8)`;
            newDot.style.opacity = "0";

            //Assign the animation and a random duration for the animation
            let animationDuration = Math.random() * 5 + 5;
            newDot.style.animation = `twinkle ${animationDuration}s ease-in-out`;
            newDot.style.animationDelay = `${Math.random() * 5}s`;

            //Assign an animaiton end property to remove the dot when animation is over
            newDot.addEventListener("animationend", () => {
                container.removeChild(newDot);
                createDot();
            })

            //Append the dot to the container element
            container.appendChild(newDot);
        }

        //Create initial dots for rendering
        for (let i = 0; i < 100; i++) {
            createDot();
        }

    }, [])

    return <div id="BackgroundDotsContainer"></div>

}

export default BackgroundDots;