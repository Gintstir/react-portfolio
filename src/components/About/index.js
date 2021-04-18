import React from 'react';

import {Grommet, Box, Grid, Image, Paragraph, Text} from 'grommet';
import { grommet } from 'grommet/themes'
import background from '../../assets/images/forestbackdrop.jpg'

//import Multi from './Carousel';


function About () {
    return (
        <Grommet theme={grommet} background={{image:`url(${background})`,}}>
            <Box pad="large" >
                <Grid
                    pad= "large"
                    fill="horizontal"
                    responsive={true}                     
                    rows={["xxsmall", "medium", "small"]}
                    columns={['1/4', '3/4']}
                    areas={[
                        {name:'sidebar', start: [0, 1], end: [0, 1] },
                        {name: "main", start: [1, 1], end: [1, 1] },
                        {name: "footer", start: [0, 2], end: [1, 2]}
                    ]}                    
                    gap="medium">
                    {/* <Box height="medium" width="medium"  gridArea="sidebar" > */}
                    <Image
                    gridArea="sidebar"
                        elevation="large"
                        fill
                        a11yTitle="A really cool guy"
                        alignSelf="center"
                        fit="cover"
                        src={require("../../assets/images/profpic.JPG").default}
                    />
                    {/* </Box> */}
                    <Box elevation="xlarge"round={{size: "xsmall"}} margin={{right: "10px"}} height="medium" background={{color:"light-6", opacity: "strong"}} gridArea="main" alignContent="center" justify="center" overflow="auto">
                        <Paragraph margin="medium" alignSelf="stretch" fill >
                            <Text size="xlarge">About Me:</Text><br></br><br></br>
                            <Text size="large">Hi I'm Gintautas (Ghin•tow•tuss), </Text> 
                            <Text>but you can call me Gint!</Text> <br></br><br></br>
                            <Text>I am a full-stack web developer from Philadelphia, Pennsylvania. </Text>
                            <Text>I enjoy tackling complex problems with a holistic approach. Learning about all the interconnected aspects and moving parts of a project so I can deliver clean, performant code with a beautiful user interface. </Text>
                            <Text>I am just as comfortable working in the front end with HTML, CSS, JavaScipt, React as I am working in the back-end with GraqhQL, Apollo, MySQL, MongoDB, Node, and Express. </Text><br></br><br></br>
                            <Text>When I'm not at the computer working on a project or learning a new technology you'll find me playing outside with my son, hiking, crotcheting, cooking, or baking.</Text>
                        </Paragraph>
                    </Box>
                    <Box elevation="xlarge" round={{size: "xsmall"}} gridArea="footer" background={{color:"light-6", opacity: "strong"}}  margin={{top: "30px", right: "10px"}} direction="row">
                        <Box pad="small"><Image fit="contain"src={require("./Carousel/IMG_1835.JPG").default}></Image></Box>
                        <Box pad="small"><Image fit="contain"src={require("./Carousel/IMG_5169.JPG").default}></Image></Box>
                        <Box pad="small"><Image fit="contain"src={require("./Carousel/IMG_5813.JPG").default}></Image></Box>
                        <Box pad="small"><Image fit="contain"src={require("./Carousel/IMG_6060.JPG").default}></Image></Box>
                        <Box pad="small"><Image fit="contain"src={require("./Carousel/IMG_2032.JPG").default}></Image></Box>
                        <Box pad="small"><Image fit="contain"src={require("./Carousel/IMG_2452.JPG").default}></Image></Box>
                        <Box pad="small"><Image fit="contain"src={require("./Carousel/IMG_4185.JPG").default}></Image></Box>
                        {/* <Box pad="medium"><Image fit="contain"src={require("./Carousel/IMG_5375.JPG").default}></Image></Box> */}
                        {/* <Box pad="medium"><Image fit="contain"src={require("./Carousel/apptrailphoto.JPG").default}></Image></Box> */}
                    </Box>
                </Grid>
            </Box>
        </Grommet>
    )
}



export default About;