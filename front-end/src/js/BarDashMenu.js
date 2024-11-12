import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function BarDashMenu() {
    return <div style={{ zIndex: '1' }}>
        <div id="BackgroundBarDashDivider"></div>
        <div id="MenuBarContainer">
            <a className='MenuBarItem' href='https://www.linkedin.com/in/michael-phillips-71101b28b/'><LinkedInIcon></LinkedInIcon></a>
            <a className='MenuBarItem' href='https://github.com/MichaelPhillips1'><GitHubIcon></GitHubIcon></a>
            <div className='MenuBarItem' href='tel:+16179915993'><PhoneIcon></PhoneIcon>(617) - 991 - 5993</div>
            <a className='MenuBarItem' href='mailto:michaelphillips@vt.edu'><EmailIcon></EmailIcon></a>
        </div>
    </div >
}

export default BarDashMenu;