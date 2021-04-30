import React, { useState } from "react";
// import { validateEmail } from "../../utils/helpers";

// import background from '../../assets/images/forestbackdrop.jpg'

import {
  Box,
  Button,  
  Form,
  FormField,
  Grommet,
  MaskedInput,  
//   Select,
  Text,
  TextArea,
  TextInput,
} from "grommet";

// import { grommet } from "grommet/themes";

const defaultValue = {
  name: "",
  email: "",    
  message: "",
  
};

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      name: '',
      email: '',
      message: '',
    }
  }
  // const [value, setValue] = useState(defaultValue);

  // const [status, setStatus] = useState("Submit");

  onNameChange(event) {
    this.setState({name: event.target.value})
  }
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }
  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  submitEmail(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"/send",
      data: this.state
    })
    .then((response) => {
      if(response.data.status === 'success') {
        alert ()
      }
    })
  }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");
  //   const {name, email, message} = e.target.elements;
  //   let details = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   let response = await fetch("https://gintstir.github.io/react-portfolio/#/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(details),
  //   });
  //   setStatus("Submit");
  //   let result = await response.json();
  //   alert(result.status);
  // };
  return (
    <Grommet full  >
      <Box fill align="center" justify="center">
        <Text size="3xl" weight="bold" margin={{bottom: "medium"}}>Get in touch!</Text>
        <Box elevation="xlarge" width="large" pad="medium" background={{color:"white", opacity:"strong"}} border={{size:"medium", color:"black", style:"double"}}>
          <Form
            id="contact-form"
            onSubmit={this.submitEmail.bind(this)}
            method="POST"            
            value={value}
            onChange={(nextValue, { touched }) => {
              console.log("Change", nextValue, touched);
              setValue(nextValue);
            }}
            onReset={() => setValue(defaultValue)}
            // onSubmit={(event) =>
            //   console.log("Submit", event.value, event.touched)
            // }
            // onSubmit={handleSubmit}
          >
            <FormField htmlFor="name" label="Name" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required>
              <TextInput name="name" />
            </FormField>
            <FormField htmlFor="email" label="Email" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} required >
              <MaskedInput
                name="email"
                mask={[
                  { regexp: /^[\w\-_.]+$/, placeholder: "example" },
                  { fixed: "@" },
                  { regexp: /^[\w]+$/, placeholder: "my" },
                  { fixed: "." },
                  { regexp: /^[\w]+$/, placeholder: "com" },
                ]}
              />
            </FormField>            
            <FormField htmlFor="message" value={this.state.message} onChange={this.OnMessageChange.bind(this)} required label="Message" name="message">
              <TextArea name="message" />
            </FormField>

            <Box direction="row" justify="between" margin={{ top: "medium" }}>
              <Button type="reset" label="Clear" color="neutral-3"/>
              <Button type="submit"  label={status} primary color="neutral-3"></Button>
            </Box>
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
}

export default ContactForm;
