import React from 'react';

import {Grommet, Box, Grid, Card, Image, Paragraph, Text, CardBody, CardHeader} from 'grommet';
import { grommet } from 'grommet/themes'
import background from '../../assets/images/forestbackdrop.jpg'

function About () {
    

    return (
        <Grommet theme={grommet} background={{opacity: "strong"}} >
            <Box pad="medium" >
                <Grid responsive columns={{count:"fit", size:'small'}} >
                    
                    <Box margin={{top:"70px"}} justify="center"pad="medium"  gap="medium" wrap responsive direction="row-responsive" >
                        <Card background={{color: "white", opacity:"strong"}} justify="center" height="medium" width="medium"round="medium">
                            <CardHeader justify="center">
                                <Text > This is me:</Text>
                            </CardHeader>
                            <CardBody>
                                <Image fit="cover" src={require("../../assets/images/profpic.JPG").default} />                            
                            </CardBody>
                        </Card>
                        <Card background={{color: "white", opacity:"strong"}}height="medium" width="large">
                            <CardBody overflow="auto">
                                <Paragraph margin="medium" alignSelf="stretch" fill >
                                    <Text size="xlarge">About Me:</Text><br></br><br></br>
                                    <Text size="large">Hi I'm Gintautas (Ghin•tow•tuss), </Text> 
                                    <Text>but you can call me Gint!</Text> <br></br><br></br>
                                    <Text>I am a full-stack web developer from Philadelphia, Pennsylvania. </Text>
                                    <Text>I enjoy tackling complex problems with a holistic approach. Learning about all the interconnected aspects and moving parts of a project so I can deliver clean, performant code with a beautiful user interface. </Text>
                                    <Text>I am just as comfortable working in the front end with HTML, CSS, JavaScipt, React as I am working in the back-end with GraqhQL, Apollo, MySQL, MongoDB, Node, and Express. </Text><br></br><br></br>
                                    <Text>When I'm not at the computer working on a project or learning a new technology you'll find me playing outside with my son, hiking, crotcheting, cooking, or baking.</Text>
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </Box>
                </Grid>
            </Box>
        </Grommet>
    )
}



export default About;