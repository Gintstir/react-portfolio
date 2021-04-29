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
  color: "brown",
  message: "",
  
};

function ContactForm() {
  const [value, setValue] = useState(defaultValue);
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
            onSubmit={(event) =>
              console.log("Submit", event.value, event.touched)
            }
          >
            <FormField label="Name" name="name" required>
              <TextInput name="name" />
            </FormField>
            <FormField label="Email" name="email" required>
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

            {/* <FormField label="Favorite color?" name="color" background={{color:"white"}}>
              <Select
                background="white"
                name="color"
                options={[
                  "red",
                  "orange",
                  "brown",
                  "yellow",
                  "cyan",
                  "taupe",
                  "green",
                  "indigo",
                  "violet",
                ]}
              />
            </FormField> */}
            <FormField label="Message" name="message">
              <TextArea name="message" />
            </FormField>

            <Box direction="row" justify="between" margin={{ top: "medium" }}>
              <Button type="reset" label="Clear" color="neutral-3"/>
              <Button type="submit" label="Send" primary color="neutral-3"/>
            </Box>
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
}

export default ContactForm;
