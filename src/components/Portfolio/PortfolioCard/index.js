import React from 'react';

import {Box, Card, Button, CardBody, CardFooter, Collapsible, Heading, Grommet, Image, Paragraph} from 'grommet';
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
                    <Box height="small" width="large" alignContent="center">
                    <Image
                        fit="contain"
                        alignSelf="center"
                        
                        src={item.image}
                        a11ytitle={item.a11ytitle}
                        />
                    </Box>
                </CardBody>
                <Box pad={{horizontal: "medium"}} responsive={true}>
                    <Heading alignSelf="center" level="3" margin={{vertical: "medium"}}>
                        {item.heading}
                    </Heading>
                    <Paragraph margin={{top: "none", horizontal: "auto"}}>
                        {item.tech}
                    </Paragraph>
                </Box>
                <CardFooter>
                    <Box direction="row" alignContents="center" gap="small">
                        <Button
                            icon={<Github color="black" />}
                            href={item.gitlink}
                        />
                        <Button
                            icon={<Globe color="black" />}
                            href={item.applink}
                        />
                    </Box>
                    <ExpandButton onClick={() => setOpen(!open)} />
                </CardFooter>
                <Collapsible open={open}>
                    <Paragraph margin="medium" color="black">
                        {item.summary}
                    </Paragraph>
                </Collapsible>
            </Card>
        </Grommet>
    )
};

export default PortfolioCard;