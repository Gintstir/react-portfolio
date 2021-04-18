import React from 'react';

import {Grommet, Box, Image} from 'grommet'

import background from '../../assets/images/forestbackdrop.jpg'


function Resume() {
    return(
        // <Grommet style={{backgroundImage: `url(${background})`, }}>
        <Grommet background={{image:`url(${background})`,}}>
            <Box margin="auto" pad="large" height="large" width="large">
               <Image
                    src={require("./assets/resume.png").default}
                    fit="contain"
                    opacity="strong"
                    a11ytitle="resume"
                    
                />
            </Box>
            
        </Grommet>
    )
}

export default Resume;