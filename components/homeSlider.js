import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import styled from "styled-components";
import Button from "../components/Button"

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className={"Slider"}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
           <h5>Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
            </Carousel.Item>
            <Carousel.Item>
                <h5>Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
            </Carousel.Item>
            <Carousel.Item>
                <h5>Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
            </Carousel.Item>
        </Carousel>
            <Button>JOIN US</Button>

            <style jsx>{`
                    h5{
                        padding:60px;     
                         font-size: 15px;  
                    } 
                    
                    .Slider{
                          color:#fff;
                          padding 0px;
                          font-size:13px;
                          background-color:#5CBDD0;
                          font-family: 'Raisonne DemiBold';  
                          text-align:center;
                    }
                    
            `}</style>
        </div>
    );
};
export  default ControlledCarousel