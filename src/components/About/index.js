import React from 'react';

import {Grommet, Box, Grid, Image, Paragraph, Text, Button, Layer} from 'grommet';
import { grommet } from 'grommet/themes'
import background from '../../assets/images/forestbackdrop.jpg'

//import Multi from './Carousel';
const data =[
   {
        image: require("./Carousel/IMG_1835.JPG").default,
        caption: "Summiting Katahdin.  Oct, 2011"
   },
   {
       image: require("./Carousel/IMG_5169.JPG").default,
       caption: "Freshly baked sandwich bread.  Sept, 2020"
   },
   {
        image: require("./Carousel/IMG_5813.JPG").default,
        caption: "Alfie throwing rocks.  Aug, 2020"
   },
   {
        image: require("./Carousel/IMG_6060.JPG").default,
        caption: "Three-cheese pizza.  Jan, 2021"
   },
   {
       image: require("./Carousel/IMG_2032.JPG").default,
       caption: "Hundred Mile Wilderness.  Oct, 2011"
   },
   {
       image: require("./Carousel/IMG_2452.JPG").default,
       caption: "Crochet hat for Jamie, Feb, 2019"
   },
   {
       image: require("./Carousel/IMG_4185.JPG").default,
       caption: "Flatbread off the grill.  June, 2018"
   }
]

const data2 =[
    {
         image: require("./Carousel/IMG_1835.JPG").default,
         caption: "Summiting Katahdin.  Oct, 2011"
    },
    {
        image: require("./Carousel/IMG_5169.JPG").default,
        caption: "Freshly baked sandwich bread.  Sept, 2020"
    },
    {
         image: require("./Carousel/IMG_5813.JPG").default,
         caption: "Alfie throwing rocks.  Aug, 2020"
    },
    {
         image: require("./Carousel/IMG_6060.JPG").default,
         caption: "Three-cheese pizza.  Jan, 2021"
    },
    {
        image: require("./Carousel/IMG_2032.JPG").default,
        caption: "Hundred Mile Wilderness.  Oct, 2011"
    },
    {
        image: require("./Carousel/IMG_2452.JPG").default,
        caption: "Crochet hat for Jamie, Feb, 2019"
    },
    {
        image: require("./Carousel/IMG_4185.JPG").default,
        caption: "Flatbread off the grill.  June, 2018"
    }
 ]

function About () {
    const [open, setOpen] = React.useState();

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(undefined)

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
                    <Box elevation="xlarge" round={{size: "xsmall"}} gridArea="footer"  height="small" background={{color:"light-6", opacity: "strong"}}  margin={{top: "30px", right: "10px"}} >
                     
                        <Box  direction="row"  gap="small" justify="evenly">
                        {data.map((item) => (                            
                            <Button  onClick={onOpen}>
                                                               
                                    <Box alignContent="center" item={item} key={item.image} height="small" width="small"  justify="center" >                                   
                                        <Image fit="cover"  src={item.image}></Image>                                   
                                    </Box>
                                
                            </Button>
                            ))}                           
                        </Box> 
                                              
                           { open && (                             
                            <Layer position="center" onClickOutside={onClose} onEsc={onClose}>
                                                                                                    
                                    <Box  pad="medium" height="large" width="large">
                                    {data2.map((item) => (                                      
                                        <Box  item={item} key={item.image}>
                                            <Image fit="cover" src={item.image}></Image>
                                            <Text margin={{top:"small", bottom:"small"}}alignSelf="center">{item.caption}</Text>
                                            <Button onClick={onClose} color="dark-3" label="Close" ></Button> 
                                        </Box>
                                    ))}                                       
                                    </Box> 
                                                                                                
                            </Layer>                              
                        )}
                          
                        {/* <Box pad="small">
                            <Image fit="contain"src={require("./Carousel/IMG_5169.JPG").default}></Image>
                        </Box>
                        <Box pad="small"><Image fit="contain"src={require("./Carousel/IMG_5813.JPG").default}></Image></Box>
                        <Box pad="small"><Image fit="contain"src={require("./Carousel/IMG_6060.JPG").default}></Image></Box>
                        <Box pad="small"><Image fit="contain"src={require("./Carousel/IMG_2032.JPG").default}></Image></Box>
                        <Box pad="small"><Image fit="contain"src={require("./Carousel/IMG_2452.JPG").default}></Image></Box>
                        <Box pad="small"><Image fit="contain"src={require("./Carousel/IMG_4185.JPG").default}></Image></Box>
                        <Box pad="medium"><Image fit="contain"src={require("./Carousel/IMG_5375.JPG").default}></Image></Box>
                        <Box pad="medium"><Image fit="contain"src={require("./Carousel/apptrailphoto.JPG").default}></Image></Box> */}
                        
                    </Box>
                </Grid>
            </Box>
        </Grommet>
    )
}



export default About;