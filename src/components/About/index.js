import React from 'react';

import {Grommet, Box, Grid, Image, Paragraph, Text} from 'grommet';
import { grommet } from 'grommet/themes'

import Multi from './Carousel';


function About () {
    return (
        <Grommet theme={grommet}>
            <Box pad="small">
                <Grid                     
                    rows={["xxsmall", "medium", "small"]}
                    columns={['1/4', '3/4']}
                    areas={[
                        {name:'sidebar', start: [0, 1], end: [0, 1] },
                        {name: "main", start: [1, 1], end: [1, 1] },
                        {name: "footer", start: [0, 2], end: [1, 2]}
                    ]}                    
                    gap="small">
                    <Box  gridArea="sidebar" >
                        <Image
                            a11yTitle="A really cool guy"
                            alignSelf="center"
                            fit="contain"
                            src={require("../../assets/images/profpic.JPG").default}
                        />
                    </Box>
                    <Box background="light-6" gridArea="main" alignContent="center" justify="center">
                        <Paragraph margin="medium" alignSelf="stretch" fill >
                            <Text size="xlarge">About Me:</Text><br></br><br></br>
                            <Text size="large">Hi I'm Gintautas (Gin•tow•tuss), </Text> 
                            <Text>but you can call me Gint!</Text> <br></br><br></br>
                            <Text>I am a full-stack web developer from Philadelphia, Pennsylvania.</Text>
                            <Text>I enjoy tackling complex problems with a holistic approach. Learning about all the interconnected aspects and moving parts of a project so I can deliver clean, performant code with a beautiful user interface.</Text>
                            <Text>I am just as comfortable working in the front end with HTML, CSS, JavaScipt, React as I am working in the back-end with GraqhQL, Apollo, MySQL, MongoDB, Node, and Express.</Text><br></br><br></br>
                            <Text>When I'm not at the computer working on a project or learning a new technology you'll find me playing outside with my son, hiking, crotcheting, cooking, or baking</Text>
                        </Paragraph>
                    </Box>
                    <Box gridArea="footer"background="light-6" margin={{top: "30px"}}>
                        hello
                        <Multi />
                    </Box>
                </Grid>
            </Box>
        </Grommet>
    )
}



export default About;