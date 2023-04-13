// @import npm modules
import React from "react";

// @import custom components
import { Input, Button } from "../";

// @import styled-componenets
import { RequestQuoteCardWrapper, RequestQuoteFormGroup } from "./styles";

export const RequestQuoteCard: React.FC = () => {
  return (
    <RequestQuoteCardWrapper>
      <h2>{"Request your free quote"}</h2>
      <h3>
        {"Complete the form below and we’ll get back to you within an hour"}
      </h3>
      <RequestQuoteFormGroup>
        <Input placeholder="First Name*" />
        <Input placeholder="Last Name*" />
      </RequestQuoteFormGroup>
      <Input placeholder="Business Email*" />
      <Input type="textarea" placeholder="Message..." />
      <Button label="Submit" onClick={() => {}} width={176} />
      <p>
        By submitting this form, you agree to the pixelworks{" "}
        <a href="#">Privacy Policy.</a>
      </p>
    </RequestQuoteCardWrapper>
  );
};
