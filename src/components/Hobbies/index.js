import React from 'react';
import {Grommet, Box, Carousel, Image, Text, } from "grommet"
//import background from '../../assets/images/forestbackdrop.jpg'


function Hobbies() {
    return (
        <Grommet >
            <Box  fill  justify="center" align="center" margin="smal"  direction="row" responsive wrap>
                {/* <Grid  gap="medium" columns={{count: "fit", size: "medium"}}  justifyContent="center" alignContent="center" responsive> */}
                    <Box>
                        <Text size="large" color="white" weight="bold"alignSelf="center">Hiking</Text>
                        <Box margin="small" alignSelf="center" round="small" width="medium" height="small" background={{color:"white", opacity:"strong"}} >
                            
                            <Carousel fill controls="arrows">
                                <Image fit="contain" src={require('../About/Carousel/apptrailphoto.jpg').default}/>
                                <Image fit="contain" src={require('../About/Carousel/IMG_1835.JPG').default}/>
                                <Image fit="contain" src={require('../About/Carousel/IMG_2032.JPG').default}/>

                            </Carousel>
                        </Box>
                    </Box>

                    <Box>
                        <Text color="white" weight="bold" size="large" alignSelf="center">Cooking</Text>
                        <Box margin="small" alignSelf="center" round="small" width="medium" height="small" background={{color:"white", opacity:"strong"}} >
                        
                        </Box>
                    </Box>

                    <Box margin="small" alignSelf="center" round="small" width="medium" height="small" background={{color:"white", opacity:"strong"}} >
                        
                    </Box>

                    <Box margin="small" alignSelf="center" round="small" width="medium" height="small" background={{color:"white", opacity:"strong"}} >
                       
                    </Box>

                {/* </Grid> */}
            </Box>
        </Grommet>
    )
}

export default Hobbies;