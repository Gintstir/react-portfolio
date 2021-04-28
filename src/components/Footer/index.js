import React from 'react'
import {Grommet, Anchor, Box, Footer} from 'grommet';
import { Github, Instagram, Linkedin } from 'grommet-icons'


function Foot() {

    return (
        <Grommet style={{marginTop: "auto"}}>
            <Footer background="dark-1">
                <Box direction="row" gap="large" style={{margin:"0 auto"}}>
                   <Anchor
                        a11yTitle="Check out my Github"
                        href="https://github.com/Gintstir"
                        icon={<Github color="white" size="medium" />}
                    />
                    <Anchor
                        a11yTitle="Add me on LinkedIn"
                        href="https://www.linkedin.com/in/gintautas-stirbys/"
                        icon={<Linkedin color="white" size="medium" />}
                    />
                    <Anchor
                        a11yTitle="Check out my pictures on Instagram"
                        href="https://www.instagram.com/gintstir/"
                        icon={<Instagram color="white" size="medium" />}
                    /> 
                </Box>
            </Footer>
        </Grommet>
    )
}

export default Foot;


