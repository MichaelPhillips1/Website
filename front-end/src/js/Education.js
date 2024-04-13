import "../css/Education.css"

function Education() {

    return (
        <>
            <div id="EducationHeader">
                <div id="EducationHeaderInnerDiv">
                    <p id="EducationHeaderInnerText">Education</p>
                </div>
            </div>
            <div id="EducationVirginiaTech">
                <div className="EducationInnerDiv">
                    <p className="EducationalInstitutionName">Virginia Tech</p>
                    <p className="EducationalInstitutionSubField">Attended: August 2021 - Present</p>
                    <p className="EducationalInstitutionSubField">Major: Computer Science</p>
                    <p className="EducationalInstitutionSubField">College: College of Engineering</p>
                    <p className="EducationalInstitutionSubField">Degree: BS in Computer Science</p>
                </div>
            </div>
            <div id="EducationBaylor">
                <div className="EducationInnerDiv">
                    <p className="EducationalInstitutionName">Baylor University</p>
                    <p className="EducationalInstitutionSubField">Attended: August 2021 - May 2023</p>
                    <p className="EducationalInstitutionSubField">Major: Computer Science</p>
                    <p className="EducationalInstitutionSubField">College: School of Engineering and Computer Science</p>
                    <p className="EducationalInstitutionSubField">Degree: BS in Computer Science</p>
                </div>
            </div>
        </>
    )
}

export default Education;