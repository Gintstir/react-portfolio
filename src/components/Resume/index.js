import React from 'react';

import {Grommet, Box, Image, Anchor} from 'grommet';

//import { Document } from 'react-pdf';

//import background from '../../assets/images/forestbackdrop.jpg'
// import resume from './assets/resume.pdf';

function Resume() {
    return(
        // <Grommet style={{backgroundImage: `url(${background})`, }}>
        <Grommet full>
            <Box margin="auto">
              
                   <Box margin="auto" align="center"height="large" width="large">
                        <Anchor className="resumeLink" target="_blank" href="https://drive.google.com/file/d/14on57tyej7CNccacz9QqZZaKn2OpW0Pt/view?usp=sharing">
                            <Image
                                src={require("./assets/Gintautas P Stirbys - Google Docs-1.png").default}
                                fit="contain"
                                opacity="strong"                            
                                a11ytitle="resume"
                                margin={{vertical: "small"}}
                                fill="false"
                            
                            />
                        </Anchor>
                   </Box>
              

                {/* <Document file={{resume}} /> */}
            </Box>
            
        </Grommet>
    )
}

export default Resume;