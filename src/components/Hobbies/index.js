import React from 'react';
import {Grommet, Box, Carousel, Image, Text, } from "grommet"
//import background from '../../assets/images/forestbackdrop.jpg'


function Hobbies() {
    return (
        <Grommet >
            <Box  fill  justify="center" align="center" margin={{vertical: "large"}}  direction="row" responsive wrap>
                {/* <Grid  gap="medium" columns={{count: "fit", size: "medium"}}  justifyContent="center" alignContent="center" responsive> */}
                    <Box responsive={true}>
                        <Text size="xlarge" color="light-3" weight="bold"alignSelf="center">Adventuring</Text>
                        <Box margin="small" alignSelf="center" round="small" width="medium" height="medium" background={{color:"white", opacity:"strong"}} >
                            
                            <Carousel fill controls="arrows">
                                <Image margin="medium" fit="contain" src={require('./assets/hiking1.jpg').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/hiking2.JPG').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/hiking3.JPG').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/hiking4.JPG').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/hiking5.jpg').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/hiking6.JPG').default}/>

                            </Carousel>
                        </Box>
                    </Box>

                    <Box responsive={true}>
                        <Text color="black" weight="bold" size="xlarge" alignSelf="center">Cooking / Baking</Text>
                        <Box margin="small" alignSelf="center" round="small" width="medium" height="medium" background={{color:"white", opacity:"strong"}} >
                            <Carousel fill controls="arrows">
                                <Image margin="medium" fit="contain" src={require('./assets/cooking1.JPG').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/cooking2.JPG').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/cooking3.JPG').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/cooking6.JPG').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/cooking7.JPG').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/cooking8.JPG').default}/>
                                

                            </Carousel>
                        
                        </Box>
                    </Box>

                    <Box responsive={true}>
                        <Text color="light-3" weight="bold" size="xlarge" alignSelf="center">Crafting</Text>
                        <Box margin="small" alignSelf="center" round="small" width="medium" height="medium" background={{color:"white", opacity:"strong"}} >
                            <Carousel fill controls="arrows">
                                <Image margin="medium" fit="contain" src={require('./assets/crafting1.jpg').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/crafting2.jpg').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/crafting3.jpg').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/crafting4.jpg').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/crafting5.jpg').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/crafting6.jpg').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/crafting7.jpg').default}/>
                                <Image margin="medium" fit="contain" src={require('./assets/crafting8.JPG').default}/>
                                

                            </Carousel>
                        </Box>
                    </Box>    

                    

                {/* </Grid> */}
            </Box>
        </Grommet>
    )
}

export default Hobbies;