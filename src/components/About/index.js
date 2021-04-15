import React from 'react';

import {Grommet, Box, Grid, Image} from 'grommet';
import { grommet } from 'grommet/themes'


function About () {
    return (
        <Grommet full theme={grommet}>
            <Box margin={{horizontal:"40px"}} pad="large">
                <Grid 
                    rows={['xxsmall', 'medium', 'xsmall']}
                    columns={['1/4', '3/4']}
                    areas={[
                        {name:'sidebar', start: [0, 1], end: [0, 1] },
                        {name: "main", start: [1, 1], end: [1, 1] }
                    ]}
                    gap="medium">
                    <Box background="light-2" gridArea="sidebar">
                        <Image
                            a11yTitle="A really cool guy"
                            alignSelf="center"
                            fit="cover"
                            src={require("../../assets/images/profpic.JPG").default}
                        />
                    </Box>
                    <Box background="light-1" gridArea="main">
                        main
                    </Box>
                </Grid>
            </Box>
        </Grommet>
    )
}



export default About;