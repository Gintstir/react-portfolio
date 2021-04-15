import React from 'react';

import {Link} from 'react-router-dom';

import {Grommet, grommet, Text, Header, Box, Avatar} from 'grommet';

function Nav() {
    return (
        <Grommet>
            <Header pad="small" background="light-6">
                    <Box direction="row">
                        <Link to="/">
                        <Avatar background="accent-2" src={require("../../assets/images/Gint.JPG").default} />
                        </Link>                    
                    </Box>
                    <Box direction="row" gap="medium" >
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/">About</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/hobbies">Hobbies</Link>
                    </Box>
            </Header>
        </Grommet>
    )
}

export default Nav;