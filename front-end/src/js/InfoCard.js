import headshot from '../images/headshot.jpg'
import { useEffect, useState } from "react";

function InfoCard() {

    useEffect(() => {
        let degree = 0;
        let headshotContainer = document.getElementById("HeadshotContainer");
        setInterval(() => {
            degree = (degree + 1) % 360;
            headshotContainer.style.background = `conic-gradient(from ${degree}deg, MediumSpringGreen, MediumSpringGreen, seagreen, teal, teal, seagreen, MediumSpringGreen, MediumSpringGreen  )`;
        }, 10);
    }, [])

    return <div id='InfoCardMain'>
        <div id='HeadshotContainer'>
            <img id='Headshot' src={headshot}></img>
        </div>
        <div className='DescriptorSegment'>
            <h2 class="section-title">Education</h2>
            <h1 class="section-content">Computer Science @ Virginia Tech (August 2022 to December 2025)</h1>
            <p>Currently pursuing a degree in computer science from Virginia Tech. Maintained a consistent 3.0+ GPA while simultaneously holding a greek life role as a brother of ΣN, ΘΞ691.</p>
            <h1 class="section-content">Computer Science @ Baylor University (August 2021 to May 2022)</h1>
            <p>Previously pursued a degree in computer science from Baylor University. Underwent freshman year of study and began transfer process to Virginia Tech.</p>

            <h2 class="section-title">Previous Employment</h2>
            <h1 class="section-content">Software Engineering Co-Op (Full-Stack) @ Peraton (May 2023 - December 2023)</h1>
            <p class="section-content">Performed under the role of Software Engineering Co-Op as a full-time employee from May, 2023 to December, 2023. Responsibilities included tasks such as user experience design, endpoint and API development, database architecture and development, data handling, responsive web design and device porting, regression testing, and many more full-stack duties.</p>

            <h2 class="section-title">My Software Development Story</h2>
            <h1 class="section-content">A Lifelong Love for Building and Creating</h1>
            <p class="section-content">From a young age, I have been deeply passionate about all areas of computer programming and science, a field that has continuously fueled my curiosity and drive for innovation. My journey began at the age of 12 when I took my first coding class, and from that moment, I was hooked. I devoted countless hours to personal education, diving into a variety of programming languages and frameworks, and eagerly pursued formal coding classes throughout high school to expand my skill set. My interests span the entire spectrum of the field, from artificial intelligence and machine learning to front-end and back-end development, as well as user experience, user interface design, and graphic design. Every aspect of creating and improving software captivates me and gives me a profound sense of purpose. Programming isn’t just a skill or a career path for me—it’s the core of what drives me, challenges me, and inspires me to push boundaries. It’s my passion, my motivation, and what truly makes me tick.</p>
        </div>
    </div>
}

export default InfoCard;