import React from "react";



import {
  Box,
  Anchor,  
  Image,   
  Grommet,
  Tip,
  Text    
} from "grommet";



import {Github, Linkedin, Send, Instagram} from 'grommet-icons'

//Leaving this data here so I can go back and DRY up the code below!
// const data = [
//   {
//     buttonTitle: "Github",
//     buttonLink: "https://github.com/Gintstir",
//     qrCode: require('./generatorGithub.png').default,
//     buttonIcon: <Github />,
//   },
//   {
//     buttonTitle: "LInkedIn",
//     buttonLink: "https://www.linkedin.com/in/gintautas-stirbys/",
//     qrCode: require('./generatorLinkedin.png').default,
//     buttonIcon: <Linkedin />,
//   },
//   {
//     buttonTitle: "Email",
//     buttonLink: "gint.stirbys@gmail.com",
//     qrCode: require('./generator.png').default,
//     buttonIcon: <Send />,
//   },
//   {
//     buttonTitle: "Instagram",
//     buttonLink: "https://www.instagram.com/gintstir/",
//     qrCode: require('./generatorInsta.png').default,
//     buttonIcon: <Instagram />,
//   }
// ]


function ContactForm() {
  
  return (
    <Grommet  >
      <Box overflow="auto" pad="small" justifyContent="center" justify="center" align="center" gap="small" direction="row" responsive wrap>
        
            <Tip plain content={
              <Box  margin="small" round="small" background={{color:"light-3", opacity: "strong"}} align="center">
                <Text margin="small">https://www.linkedin.com/in/gintautas-stirbys/</Text>
              </Box>
            }>
              <Box  round="small" margin="medium" width="small" height="small" align="center" justify="center" background={{color: "light-3", opacity:"strong"}} >
                <Anchor textDecoration="none" className="contactLink" color="neutral-3"margin={{bottom: '20px'}} icon={<Linkedin/>} label="Linkedin" href="https://www.linkedin.com/in/gintautas-stirbys/" target="_blank" />
                <Box height="xsmall" width="xsmall"><Image  fit="contain" src={require('./generatorLinkedin.png').default} /></Box>
              </Box>
            </Tip>

            <Tip plain content={
              <Box  margin="small" round="small" background={{color:"light-3", opacity: "strong"}} align="center">
                <Text margin="small">https://github.com/Gintstir</Text>
              </Box>
            }>
              <Box  round="small" margin="medium" width="small" height="small" align="center" justify="center" background={{color: "light-3", opacity:"strong"}}>
                <Anchor className="contactLink" color="neutral-3" margin={{bottom: '20px'}} icon={<Github/>} label="Github" href="https://github.com/Gintstir" target="_blank" />
                <Box height="xsmall" width="xsmall"><Image  fit="contain" src={require('./generatorGithub.png').default} /></Box>
              </Box>
            </Tip>

            <Tip plain content={
              <Box  margin="small" round="small" background={{color:"light-3", opacity: "strong"}} align="center">
                <Text margin="small">gint.stirbys@gmail.com</Text>
              </Box>
            }>
              <Box  round="small" margin="medium" width="small" height="small" align="center" justify="center" background={{color: "light-3", opacity:"strong"}} >
                <Anchor className="contactLink" color="neutral-3" margin={{bottom: '20px'}} icon={<Send />} label="Email" href="mailto:gint.stirbys@gmail.com?subject=Hi Gint, just saw your portfolio!" target="_blank" />
                <Box height="xsmall" width="xsmall"><Image  fit="contain" src={require('./generator.png').default} /></Box>
              </Box>
            </Tip>

            <Tip plain content={
              <Box  margin="small" round="small" background={{color:"light-3", opacity: "strong"}} align="center">
                <Text margin="small">https://www.instagram.com/gintstir/</Text>
              </Box>
            }>
              <Box  round="small" margin="medium" width="small" height="small" align="center" justify="center" background={{color: "light-3", opacity:"strong"}} >
                <Anchor className="contactLink" color="neutral-3" margin={{bottom: '20px'}} icon={<Instagram/>} label="Instagram" href="https://www.instagram.com/gintstir/" taregt="_blank" />
                <Box height="xsmall" width="xsmall"><Image  fit="contain" src={require('./generatorInsta.png').default} /></Box>
              </Box>
            </Tip>
          
      </Box>
    </Grommet>
  );
}


export default ContactForm;
