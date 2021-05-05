import React from 'react';

import {Text, Box, Card, Button, CardBody, CardFooter, Collapsible, Heading, Grommet, Image, Anchor, Paragraph} from 'grommet';
import {FormDown, FormUp, Github, Globe} from "grommet-icons";


function PortfolioCard({item}) {
    const [open, setOpen]= React.useState(false);
    const ExpandButton = ({ ...rest }) => {
        const Icon = open ? FormUp : FormDown;
        return (
            <Button
            hoverIndicator="light-4"
            icon={<Icon color="brand" />}
            {...rest}
            />
        );
    };
    return (
        <Grommet>
            <Card background={{color:"light-6", opacity:"strong"}} elevation="large" width="large" key={item.heading}>
                <CardBody pad={{vertical: "small"}} height="small" >
                    {/* <Box height="small" width="large" alignContent="center"> */}
                        <Anchor className="portCards" href={item.applink} target="_blank">
                            <Image

                                fit="contain"
                                fill="false"
                                alignSelf="center"                                
                                src={item.image}
                                a11ytitle={item.a11ytitle}
                                pad={{horizontal: "small"}}
                            />
                        </Anchor>    
                    {/* </Box> */}
                </CardBody>
                <Box pad={{horizontal: "medium"}}  >
                    <Heading alignSelf="center" level="2" margin={{vertical: "medium"}}>
                        {item.heading}
                    </Heading>
                   
                </Box>
                <CardFooter>
                    <Box direction="row" alignContents="center" gap="small">
                        <Button
                            className="portLink"
                            icon={<Github color="black" />}
                            href={item.gitlink}
                            target="_blank"
                        />
                        <Button
                            className="portLink"
                            icon={<Globe color="black" />}
                            href={item.applink}
                            target="_blank"
                        />
                    </Box>
                    <ExpandButton onClick={() => setOpen(!open)} />
                </CardFooter>
                <Collapsible open={open}>
                    <Paragraph textAlign="center" fill="false" level="3" margin="medium" pad={{horizontal:"small"}}>
                        <Text weight="bold">{item.tech}</Text>
                    </Paragraph>
                    <Paragraph margin="medium" color="black">
                        {item.summary}
                    </Paragraph>
                </Collapsible>
            </Card>
        </Grommet>
    )
};

export default PortfolioCard;