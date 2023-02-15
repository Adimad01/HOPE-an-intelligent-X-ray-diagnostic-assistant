import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "components/frontend/images/dot-pattern.svg"
import Fade from 'react-reveal/Fade';
const Container = tw.div `relative`;
const Content = tw.div `max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div `
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-white	text-base font-medium tracking-wide border-b-2 py-2 text-white hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-white`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

const SimpleContactUs=() => {
  return (
    <Container id='contactUS'>
      <Content>
        <Fade left>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Contactez nous</h2>
            <form action="#">
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Nom et prénom </Label>
                    <Input id="name-input" type="text" name="name" placeholder="Ex Imad Eddine LASSAKEUR" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Adresse e-mail </Label>
                    <Input id="email-input" type="email" name="email" placeholder="Ex imadeddine@mail.com" />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Votre message</Label>
                    <TextArea id="message-input" name="message" placeholder="Bonjour monsieur, "/>
                  </InputContainer>
                </Column>
              </TwoColumn>

              <SubmitButton type="submit" value="Submit">Envoyez</SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
        </Fade>
      </Content>
    </Container>
  );
};

export default SimpleContactUs;