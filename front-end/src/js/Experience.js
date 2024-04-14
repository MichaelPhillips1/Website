import '../css/Experience.css'
import PeratonLogo from "../Images/PeratonLogo.jpg"

function Experience() {

    return (
        <>
            <div id="ExperienceSegment">
                <div id="ExperienceSegmentInnerDiv">
                    <p id="ExperienceHeaderText">Professional Experience</p>
                    <div className="ExperienceDescriptionSegment">
                        <img src={PeratonLogo} className="ExperienceCompanyLogo"></img>
                        <div className="ExperienceDescription">
                            <p className="ExperienceCompanyText">Description: Full-time co-op serving the role of a full-stack software developer at Peraton. Whatever else we want to say and all that stuff</p>
                            <p className="ExperienceCompanyText">May, 2023 - December, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Experience;