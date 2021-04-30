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

function ContactForm() {
  const [value, setValue] = useState(defaultValue);

  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const {name, email, message} = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://gintstir.github.io/react-portfolio/#/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <Grommet full  >
      <Box fill align="center" justify="center">
        <Text size="3xl" weight="bold" margin={{bottom: "medium"}}>Get in touch!</Text>
        <Box elevation="xlarge" width="large" pad="medium" background={{color:"white", opacity:"strong"}} border={{size:"medium", color:"black", style:"double"}}>
          <Form
            value={value}
            onChange={(nextValue, { touched }) => {
              console.log("Change", nextValue, touched);
              setValue(nextValue);
            }}
            onReset={() => setValue(defaultValue)}
            // onSubmit={(event) =>
            //   console.log("Submit", event.value, event.touched)
            // }
            onSubmit={handleSubmit}
          >
            <FormField htmlFor="name" label="Name" name="name" required>
              <TextInput name="name" />
            </FormField>
            <FormField htmlFor="email" label="Email" name="email" required>
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
            <FormField htmlFor="message" label="Message" name="message">
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
