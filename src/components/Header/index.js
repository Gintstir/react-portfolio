import React from 'react';

import {Link, NavLink} from 'react-router-dom';

import {Grommet, Header, Box, Avatar, ResponsiveContext, Menu, grommet} from 'grommet';
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
                        <Link to="/about">
                        <Avatar background="accent-2" src={require("../../assets/images/Gint.JPG").default} />
                        </Link>                    
                    </Box>
                    <ResponsiveContext.Consumer>
                        {size => 
                            size === 'small' ? (
                                <Box justify="end">
                                    <Menu a11yTitle="navigation menu"
                                        dropProps={{ align: {top: "bottom", right: "right"}}}
                                        dropBackground="dark-3"
                                        icon={<MenuIcon color="white" />}
                                        items={[                                            
                                            {
                                                label: <Box pad="small">About</Box>,
                                                href: "#about"
                                            },
                                            {
                                                label: <Box pad="small">Portfolio</Box>,
                                                href: "#portfolio"
                                            },
                                            {
                                                label: <Box pad="small">Resume</Box>,
                                                href: "#resume"
                                            },
                                            {
                                                label: <Box pad="small">Contact</Box>,
                                                href: "#contact"
                                            },
                                            {
                                                label: <Box pad="small">Hobbies</Box>,
                                                href: "#hobbies"
                                            }
                                        ]}
                                    />
                                </Box>
                            ) : (
                                <Box direction="row" gap="medium" margin={{right: "medium"}}>
                                   
                                    <NavLink activeStyle={{color: "#FFAA15"}} to="/about" >About</NavLink>
                                    <NavLink activeStyle={{color: "#FFAA15"}} to="/portfolio">Portfolio</NavLink>
                                    <NavLink activeStyle={{color: "#FFAA15"}} to="/resume">Resume</NavLink>
                                    <NavLink activeStyle={{color: "#FFAA15"}} to="/contact">Contact</NavLink>
                                    <NavLink activeStyle={{color: "#FFAA15"}} to="/hobbies">Hobbies</NavLink>
                                </Box>
                            )
                        }
                    </ResponsiveContext.Consumer>
            </Header>
        </Grommet>
    )
}

export default Nav;