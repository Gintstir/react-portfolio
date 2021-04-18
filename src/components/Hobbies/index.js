import React from 'react';
import {Grommet, Box, Paragraph} from "grommet"
import background from '../../assets/images/forestbackdrop.jpg'


function Hobbies() {
    return (
        <Grommet full background={{image:`url(${background})`,}}>
            <Box fill align="center" justify="center">
                <Box round="small" width="large" height="small" background={{color:"white", opacity:"strong"}} >
                    <Paragraph textAlign="center" alignSelf="center">
                        Coming soon!<br></br><br></br>
                        This component is under construction!
                    </Paragraph>
                </Box>
            </Box>
        </Grommet>
    )
}

export default Hobbies;