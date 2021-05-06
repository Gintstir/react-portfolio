import React from 'react';
import {Grommet, Box, Grid, Paragraph} from "grommet"
//import background from '../../assets/images/forestbackdrop.jpg'


function Hobbies() {
    return (
        <Grommet full>
            <Box  fill  justify="center" align="center" margin="smal"  direction="row" responsive wrap>
                {/* <Grid  gap="medium" columns={{count: "fit", size: "medium"}}  justifyContent="center" alignContent="center" responsive> */}
                    <Box margin="small" alignSelf="center" round="small" width="medium" height="small" background={{color:"white", opacity:"strong"}} >
                    
                    </Box>
                    <Box margin="small" alignSelf="center" round="small" width="medium" height="small" background={{color:"white", opacity:"strong"}} >
                        
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