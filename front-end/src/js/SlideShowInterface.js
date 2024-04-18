import { useEffect, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../css/SlideShow.css';

function SlideShowInterface(props) {

    const [slides, setSlides] = useState([]);
    const [index, setIndex] = useState(0);

    function moveSlides() {
        Array.from(slides).reverse().forEach((slide, ind) => {
            if (ind === index) {
                slide.style['translate'] = 'transformX(0vw)'
                slide.style['animation'] = 'none'
                slide.style['z-index'] = '2'
            }
            else if (ind <= index) {
                slide.style['animation'] = 'backlashForward .8s ease-in forwards'
                slide.style['z-index'] = '3';
            }
            else {
                slide.style['animation'] = 'backlashBackward .8s ease-in forwards'
                slide.style['z-index'] = '3';
            }
        })
    }

    useEffect(() => {
        let slideElements = document.querySelectorAll(props.classifier);
        setSlides(slideElements);
    }, [props.classifier]);

    useEffect(() => {
        moveSlides()
    }, [index])

    return (
        <>
            <div className="SlideContainer">
                <button className="SlideButton" id="SlideButtonLeft" style={index > 0 ? { "opacity": '1' } : { "opacity": ".5" }} onClick={() => {
                    if (index > 0) {
                        setIndex(index - 1)
                    }
                }}><ArrowBackIosIcon /></button>
                <button className="SlideButton" id="SlideButtonRight" style={index < props.numslides - 1 ? { "opacity": '1' } : { "opacity": ".5" }} onClick={() => {
                    if (index < props.numslides - 1) {
                        setIndex(index + 1)
                    }
                }}><ArrowForwardIosIcon /></button>
            </div >
        </>
    )
}

export default SlideShowInterface;