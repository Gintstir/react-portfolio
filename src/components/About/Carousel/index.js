import React from 'react';

import {Grommet, Carousel, Box, Image } from 'grommet';

const data = [
    './IMG_1835.JPG',
    './IMG_2113.JPG',
    './IMG_5169.JPG',
    './IMG_5813.JPG',
    './IMG_6060.JPG'
]

function View1() {
    const imgs = data.slice(0, 2);
    return(
        <Box direction="row">
            {imgs.map(img => (
                <Image key={img} src={img} fit="contain" />
            ))}
        </Box>
    )
}
function View2() {
    const imgs = data.slice(1, 3);
    return(
        <Box direction="row">
            {imgs.map(img => (
                <Image key={img} src={img} fit="contain" />
            ))}
        </Box>
    )
}
function View3() {
    const imgs = data.slice(2, 4);
    return(
        <Box direction="row">
            {imgs.map(img => (
                <Image key={img} src={img} fit="contain" />
            ))}
        </Box>
    )
}

function Multi() {
    
    return(
        <Grommet>
            <Carousel>
                <View1 />
                <View2 />
                <View3 />
            </Carousel>
        </Grommet>

    )
}

export default Multi;