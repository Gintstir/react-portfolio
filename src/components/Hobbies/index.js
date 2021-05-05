import React from 'react';
import {Grommet, Box, Grid, Paragraph} from "grommet"
//import background from '../../assets/images/forestbackdrop.jpg'


function Hobbies() {
    return (
        <Grommet  full>
            <Box  fill gap="small" pad="medium" justify="center" wrap responsive>
                <Grid  justify="center" gap="small" columns={{count:"fit", size: "small"}} alignContent="center" responsive={true}>
                    <Box alignSelf="center" round="small" width="medium" height="small" background={{color:"white", opacity:"strong"}} >
                    
                    </Box>
                    <Box alignSelf="center" round="small" width="medium" height="small" background={{color:"white", opacity:"strong"}} >
                        
                    </Box>
                    <Box alignSelf="center" round="small" width="medium" height="small" background={{color:"white", opacity:"strong"}} >
                        
                    </Box>
                    <Box alignSelf="center" round="small" width="medium" height="small" background={{color:"white", opacity:"strong"}} >
                        
                    </Box>
                </Grid>
            </Box>
        </Grommet>
    )
}

export default Hobbies;