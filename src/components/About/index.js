import React from 'react';

import {Grommet, Box, Grid, Card, Image, Paragraph, Text, CardBody, CardHeader} from 'grommet';
// import { grommet } from 'grommet/themes'
// import background from '../../assets/images/forestbackdrop.jpg'

function About () {
    

    return (
        <Grommet >
            <Box pad="medium" >
                <Grid responsive columns={{count:"fit", size:'small'}} >
                    
                    <Box margin={{top:"100px"}} justify="center"pad="medium"  gap="medium" wrap responsive direction="row-responsive" >
                        <Card alignSelf="center" background={{color: "white", opacity:"strong"}} margin={{bottom:"40px"}} justify="center" height="medium" width="medium"round="small">
                            <CardHeader height="xxsmall" justify="center">
                                <Text size="xlarge"> This is me:</Text>
                            </CardHeader>
                            <CardBody>
                                <Image fit="cover" src={require("../../assets/images/profpic.JPG").default} />                            
                            </CardBody>
                        </Card>
                        <Card background={{color: "white", opacity:"strong"}}height="medium" width="large">
                            <CardHeader height="xxsmall" justify="center">
                                <Text size="xlarge"> About Me:</Text>
                            </CardHeader>
                            <CardBody overflow="auto">
                                <Paragraph margin="medium" alignSelf="stretch" fill >                                    
                                    <Text >Hi I'm</Text><Text size="large" weight="bold"> Gintautas</Text><Text size="small"> (Ghin•tow•tuss), </Text> 
                                    <Text>but you can call me </Text><Text weight="bold">Gint!</Text> <br></br><br></br>
                                    <Text>I'm a full-stack web developer from Philadelphia, Pennsylvania. </Text>
                                    <Text>I enjoy tackling complex problems with a holistic approach. Learning about all the interconnected aspects and moving parts of a project so I can deliver clean, performant code with a beautiful user interface. </Text>
                                    <Text>I'm just as comfortable working in the front-end with HTML, CSS, JavaScript, React as I am working in the back-end with GraqhQL, Apollo, MySQL, MongoDB, Node, and Express. </Text><br></br><br></br>
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