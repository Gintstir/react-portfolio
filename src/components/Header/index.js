import React from 'react';

import {Link} from 'react-router-dom';

import {Grommet, grommet, Text, Header, Box, Avatar} from 'grommet';

function Nav() {
    return (
        <Grommet>
            <Header pad="small" background="white">
                <Box direction="row">
                    <Link to="/">
                    <Avatar background="accent-2" src="//src/assets/images/screenchot.png" />
                    </Link>
                    
                </Box>
            </Header>
        </Grommet>
    )
}

export default Nav;