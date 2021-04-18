import React from 'react';

import {Grommet, Box, Image} from 'grommet'


function Resume() {
    return(
        <Grommet>
            <Box margin={{horizontal: "auto"}}fill={false} pad="medium" height="large" width="large">
               <Image
                    src={require("./assets/resume.png").default}
                    fit="contain"
                    
                />
            </Box>
            
        </Grommet>
    )
}

export default Resume;