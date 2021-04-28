import React from 'react';

import {Grommet, Box, Image, Anchor} from 'grommet';

//import { Document } from 'react-pdf';

//import background from '../../assets/images/forestbackdrop.jpg'
// import resume from './assets/resume.pdf';

function Resume() {
    return(
        // <Grommet style={{backgroundImage: `url(${background})`, }}>
        <Grommet full>
            <Box  fill margin="auto" height="xlarge" width="xlarge">
              
                   <Box margin="auto" align="center"height="large" width="large">
                    <Anchor margin={{bottom: "30px"}} target="_blank" href="https://drive.google.com/file/d/14on57tyej7CNccacz9QqZZaKn2OpW0Pt/view?usp=sharing">
                        <Image
                                src={require("./assets/Gintautas P Stirbys - Google Docs-1.png").default}
                                fit="cover"
                                opacity="strong"                            
                                a11ytitle="resume"
                               
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