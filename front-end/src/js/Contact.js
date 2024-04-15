import "../css/Contact.css"
import useMedia from 'use-media'

function Contact() {

    const isMobile = !useMedia({ "hover": "hover" })

    return (
        <>
            <div id="ContactDiv">
                <p className="ContactItem">Phone: {isMobile ? <a className="ContactItem" href="tel:+16179915993">617-991-5993</a> : "617-991-5993"}</p>
                <p className="ContactItem">Email: <a className="ContactItem" href="mailto:michaelphillips@vt.edu">MichaelPhillips@vt.edu</a></p>
                <a className="ContactItem" href="https://www.linkedin.com/in/michael-phillips-71101b28b/"> Linkedin</a>
            </div >
        </>
    )
}

export default Contact;