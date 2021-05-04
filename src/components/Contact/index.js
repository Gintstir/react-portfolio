import React from "react";



import {
  Box,
  Carousel,
  Button, 
  Grid,
  DropButton,
  Layer,
  Image, 
  Form,
  FormField,
  Grommet,
  MaskedInput,  
//   Select,
  Text,
  TextArea,
  TextInput,
} from "grommet";

import {Close, Github, Linkedin, Send, Instagram} from 'grommet-icons'

const data = [
  {
    buttonTitle: "Github",
    buttonLink: "https://github.com/Gintstir",
    qrCode: require('./qrcode_github.com.png').default,
    buttonIcon: <Github />,
  },
  {
    buttonTitle: "LInkedIn",
    buttonLink: "https://www.linkedin.com/in/gintautas-stirbys/",
    qrCode: require('./qrcode_www.linkedin.com.png').default,
    buttonIcon: <Linkedin />,
  },
  {
    buttonTitle: "Email",
    buttonLink: "gint.stirbys@gmail.com",
    qrCode: require('./generator.png').default,
    buttonIcon: <Send />,
  },
  {
    buttonTitle: "Instagram",
    buttonLink: "https://www.instagram.com/gintstir/",
    qrCode: require('./qrcode_www.instagram.com (1).png').default,
    buttonIcon: <Instagram />,
  }
]

// const DropContent = ({ onClose }) => {

//   {data.map((item) => (
//     <Box pad="small" item={item}>
//     <Box alignSelf="center"  height="small" width="small"><Image src={item.qrCode}></Image></Box>
//   </Box>
//   ))}
// }

function ContactForm() {
  // const [open, setOpen] = React.useState();
  // // const [select, setSelect] = React.useState('');

  // const onOpen = () => setOpen(true);
  // const onClose = () => setOpen(false);

  return (
    <Grommet full  >
      <Box fill overflow="hidden" pad="medium" justify="center" align="center" >
        
        <Box height="medium" width="large"  background={{color:"light-3", opacity:"strong"}} round="large" >
          <Carousel alignSelf="center" focusIndicator="false" controls="arrows">
            <Box  width="medium" height="medium" align="center" justify="center" background={{color: "light-3", opacity:"strong"}} >
              <Text><Linkedin/>LinkedIn</Text>
              <Box height="xsmall" width="xsmall"><Image  fit="contain" src={require('./qrcode_www.linkedin.com.png').default} /></Box>
            </Box>
            <Box  width="medium" height="medium" align="center" justify="center" background="light-3">
              <Text><Github/>Github</Text>
              <Box height="xsmall" width="xsmall"><Image  fit="contain" src={require('./qrcode_github.com.png').default} /></Box>
            </Box>
            <Box  width="medium" height="medium" align="center" justify="center" background="light-3">
              <Text><Send/>Email</Text>
              <Box height="xsmall" width="xsmall"><Image  fit="contain" src={require('./generator.png').default} /></Box>
            </Box>
            <Box  width="medium" height="medium" align="center" justify="center" background="light-3">
              <Text> <Instagram/>Instagram</Text>
              <Box height="xsmall" width="xsmall"><Image  fit="contain" src={require('./qrcode_www.instagram.com (1).png').default} /></Box>
            </Box>
          </Carousel>
        </Box>

        {/* <Grid gap="xsmall" columns={{count: "fit", size: "auto"}} rows={["xsmall", "xsmall", "xsmall", "xsmall"]} responsive alignSelf="center">
          
            
              {data.map ((item) => (
                <Box pad="small" justify="center" align="center" item={item} key={item.buttonTitle}>
                  <Box border width="300px" height="100px" align="center" justify="center" >
                    <DropButton primary label={item.buttonTitle} fill color="neutral-3" icon={item.buttonIcon} onOpen={onOpen} onClose={onClose} dropContent={<DropContent onClose={onClose} /> } dropProps={{align: {left: "right"}}} />
                    {open && (
                      <Layer animation="fadeIn" background={{color:"light-3", opacity: "strong"}} full="vertical" position="right" modaL onClickOutside={onClose} onEsc={onClose}>
                        <Box  overflow="auto" width="medium"  pad="medium" direction="row"><Button icon={<Close/>} onClick={onClose}></Button></Box>
                        <Box alignSelf="center"  height="small" width="small"><Image src={item.qrCode}></Image></Box>
                      </Layer>
                    )}
                  </Box>
                </Box>
              ))}
                <Box  pad="small" justify="center" align="center" >
                  <Box border width="300px" height="100px" align="center" justify="center" >
                    <Button primary label="linkedin" fill color="neutral-3"/>
                  </Box>
                </Box>

                <Box pad="small" justify="center" align="center" >
                  <Box border width="300px" height="100px" align="center" justify="center" >
                    <Button primary label="Email" fill color="neutral-3"/>
                  </Box>
                </Box>
                
                <Box pad="small" justify="center" align="center" >
                  <Box border width="300px" height="100px" align="center" justify="center" >
                    <Button primary label="Instagram" fill color="neutral-3"/>
                  </Box>
                </Box>
               
            
        </Grid> */}
      </Box>
    </Grommet>
  );
}


export default ContactForm;
