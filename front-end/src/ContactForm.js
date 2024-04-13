import { useState } from "react";
import "./index.css"

function ContactForm() {

    const [organizationName, setOrganizationName] = useState('')
    const [fillerName, setFillerName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [linkedIn, setLinkedIn] = useState('')
    const [contactReason, setContactReason] = useState('')
    const [contactSent, setContactSent] = useState(false)

    function resetForm() {
        setOrganizationName('')
        setFillerName('')
        setPhone('')
        setEmail('')
        setLinkedIn('')
        setContactReason('')
    }


    return (
        <>
            <div className="formContainerDiV">
                {!contactSent ? <>
                    <p className="formLabelText">Please enter your organization name: *</p>
                    <input className="formInputLine" placeholder="Your Organization Name" id="OrganizationName" onChange={(e) => {
                        setOrganizationName(e.target.value)
                    }}></input>
                    <p className="formLabelText">Please enter your name: *</p>
                    <input className="formInputLine" placeholder="Your Name" id="FillerName" onChange={(e) => {
                        setFillerName(e.target.value)
                    }}></input>
                    <p className="formLabelText">Please provide a phone number to best reach you at: *</p>
                    <input className="formInputLine" placeholder="Your Phone Number" id="Phone" onChange={(e) => {
                        setPhone(e.target.value)
                    }}></input>
                    <p className="formLabelText">Please provide an email to best reach you at: *</p>
                    <input className="formInputLine" placeholder="Your Email" id="Email" onChange={(e) => {
                        setEmail(e.target.value)
                    }}></input>
                    <p className="formLabelText">Please provide your linkedIn:</p>
                    <input className="formInputLine" placeholder="Your linkedIn" id="LinkedIn" onChange={(e) => {
                        setLinkedIn(e.target.value)
                    }}></input>
                    <p className="formLabelText">In a few words, describe your reason for contact:</p>
                    <textarea className="formInputTextArea" placeholder="Your Contact Reason" id="ContactReason" onChange={(e) => {
                        setContactReason(e.target.value)
                    }}></textarea>
                    <button className="formSubmitButton" onClick={() => {
                        let formFillValues = { "OrganizationName": organizationName.length === 0, "FillerName": fillerName.length === 0, "Phone": phone.length === 0, "Email": email.length === 0 }
                        for (const [key, value] of Object.entries(formFillValues)) {
                            console.log(key, value);
                            if (value === true) {
                                alert("All fields marked with (*) are required to be filled.")
                                document.getElementById(key).scrollIntoView({ block: "center" });
                                return
                            }
                        }
                        setContactSent(true);
                        resetForm();
                    }}>Submit Form</button>
                    <p className="formLabelTextInfo">Before submitting this form please note all fields marked with (*) are required.</p>
                </>
                    : <>
                        <p className="formLabelText" style={{ marginBottom: '5%' }}>Your contact form has been sent! Thank you for reaching out.</p>
                    </>}
            </div>
        </>
    )
}

export default ContactForm;