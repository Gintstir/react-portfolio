import React from 'react';

import {Grommet, Box, Image, Anchor} from 'grommet';

//import { Document } from 'react-pdf';

//import background from '../../assets/images/forestbackdrop.jpg'
// import resume from './assets/resume.pdf';

function Resume() {
    return(
        // <Grommet style={{backgroundImage: `url(${background})`, }}>
        <Grommet >
            <Box pad="large" align="center" justifyContent="center" >              
                   <Box margin="medium"justify="center" height="xlarge" width="large">
                        <Anchor target="_blank" href="https://drive.google.com/file/d/1LJwNzLjaU0cdMSrF0YF0pTdWaq_qIknE/view?usp=sharing">
                            <Image
                                src={require("assets/resumeScreenshot.jpg").default}
                                fit="contain"
                                opacity="strong"                            
                                a11ytitle="resume"                                
                                fill
                            
                            />
                        </Anchor>
                   </Box>
              

                {/* <Document file={{resume}} /> */}
            </Box>
            
        </Grommet> 
    )
}

export default Resume;