// @import npm modules
import React from "react";

// @import custom components
import { Button, Input } from "../../components";

// @import styled-components
import {
  ContactCardWrapper,
  ContactFormGroup,
  ContactFormWrapper,
  ContactUsWrapper,
  MeetTextItem,
  MeetingTextWrapper,
} from "./styles";

// @import page data
import { contactMeetData } from "../data";

export const ContactUs: React.FC = () => {
  return (
    <ContactUsWrapper>
      <ContactCardWrapper>
        <MeetingTextWrapper>
          <h1>{"Book a conversation and in 30 minutes we’ll"}</h1>
          {contactMeetData.map((item, key) => (
            <MeetTextItem key={key}>
              <div>
                <img src={item.icon} alt="" />
              </div>
              <p>{item.text}</p>
            </MeetTextItem>
          ))}
        </MeetingTextWrapper>
        <ContactFormWrapper>
          <h2>Speak to us about your goals</h2>
          <ContactFormGroup>
            <Input placeholder="First Name*" />
            <Input placeholder="Last Name*" />
          </ContactFormGroup>
          <Input placeholder="Business Email*" />
          <Input placeholder="Message..." type="textarea" />
          <Button label="Submit" width={176} />
          <p>
            By submitting this form, you agree to the pixelworks{" "}
            <a href="#">Privacy Policy.</a>
          </p>
        </ContactFormWrapper>
      </ContactCardWrapper>
    </ContactUsWrapper>
  );
};
