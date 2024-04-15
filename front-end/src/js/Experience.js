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
                            <p className="ExperienceCompanyText">Role: Full-Time Software Engineering Co-Op </p>
                            <p className="ExperienceCompanyText">Employment Period: May, 2023 - December, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Experience;