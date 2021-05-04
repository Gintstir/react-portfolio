import React from "react";



import {
  Box,
  Button, 
  Grid,
  Layer, 
  Form,
  FormField,
  Grommet,
  MaskedInput,  
//   Select,
  Text,
  TextArea,
  TextInput,
} from "grommet";

import {Close} from 'grommet-icons'

function ContactForm() {
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState('');

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  return (
    <Grommet full  >
      <Box fill pad="medium" justify="center" direction="row" >
        
        <Grid gap="xsmall" columns={{count: "fit", size: "auto"}} rows={["xsmall", "xsmall", "xsmall", "xsmall"]} responsive alignSelf="center">
          
            
              
                <Box pad="small" justify="center" align="center">
                  <Box border width="300px" height="100px" align="center" justify="center" >
                    <Button primary label="Github" fill color="neutral-3" onClick={onOpen}/>
                    {open && (
                      <Layer animation="fadeIn" background={{color:"light-3", opacity: "strong"}} position="center"  modal onClickOutside={onClose} onEsc={onClose}>
                        <Box  overflow="auto" width="large" height="large" pad="medium" direction="row">Spicy Salsa!<Button icon={<Close/>} onClick={onClose}></Button></Box>
                      </Layer>
                    )}
                  </Box>
                </Box>

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
              
            
        </Grid>
      </Box>
    </Grommet>
  );
}


export default ContactForm;
