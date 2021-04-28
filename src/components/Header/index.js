import React from 'react';

import {Link} from 'react-router-dom';

import {Grommet, Header, Box, Avatar, ResponsiveContext, Menu, grommet, Text} from 'grommet';
import {Menu as MenuIcon } from 'grommet-icons';
import {deepMerge} from 'grommet/utils';

const customTheme = deepMerge(grommet, {
    anchor: {
        textDecoration: 'none',
        fontWeight: "500"
    }
})

function Nav() {
    return (
        <Grommet theme={customTheme}>
            <Header pad="small" background={{color: "dark-1"}}>
                    <Box direction="row">
                        <Link to="/">
                        <Avatar background="accent-2" src={require("../../assets/images/Gint.JPG").default} />
                        </Link>                    
                    </Box>
                    <ResponsiveContext.Consumer>
                        {size => 
                            size === 'small' ? (
                                <Box justify="end">
                                    <Menu a11yTitle="navigation menu"
                                        dropProps={{ align: {top: "bottom", right: "right"}}}
                                        icon={<MenuIcon color="black" />}
                                        items={[                                            
                                            {
                                                label: "About",
                                                href: "#"
                                            },
                                            {
                                                label: "Portfolio",
                                                href: "#portfolio"
                                            },
                                            {
                                                label: "Resume",
                                                href: "#resume"
                                            },
                                            {
                                                label: "Contact",
                                                href: "#contact"
                                            },
                                            {
                                                label: "Hobbies",
                                                href: "#hobbies"
                                            }
                                        ]}
                                    />
                                </Box>
                            ) : (
                                <Box direction="row" gap="medium" margin={{right: "medium"}}>
                                   
                                    <Link to="/">About</Link>
                                    <Link to="/portfolio">Portfolio</Link>
                                    <Link to="/resume">Resume</Link>
                                    <Link to="/contact">Contact</Link>
                                    <Link to="/hobbies">Hobbies</Link>
                                </Box>
                            )
                        }
                    </ResponsiveContext.Consumer>
            </Header>
        </Grommet>
    )
}

export default Nav;