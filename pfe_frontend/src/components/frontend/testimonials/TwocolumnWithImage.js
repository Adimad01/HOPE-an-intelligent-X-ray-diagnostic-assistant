import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as QuotesLeftIcon } from "../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../images/quotes-r.svg";
import { ReactComponent as ArrowLeftIcon } from "../images/arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../images/arrow-right-2-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../images/svg-decorator-blob-5.svg";
import './styleQuestion.css'
import "slick-carousel/slick/slick.css";
import Fade from 'react-reveal/Fade';
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const TestimonialSliderContainer = tw.div`mt-24`;
const TestimonialSlider = styled(Slider)``;
const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const img = styled.div`
  ${tw`md:mx-3 lg:mx-6 w-2/3 md:w-4/12 rounded flex items-center max-w-xs md:max-w-none`}
  img {
    ${tw`rounded`}
  }
`;
const TextContainer = tw.div`md:mx-3 lg:mx-6 md:w-6/12 py-4 flex flex-col justify-between`;
const QuoteContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-6 md:mt-0 `;
const Quote = tw.blockquote`text-center md:text-left font-medium text-xl lg:text-2xl xl:text-3xl`;
const CustomerInfo = tw.div`px-5 lg:px-10 text-center md:text-left mt-4 md:mt-0`;
const CustomerName = tw.h5`font-bold text-lg lg:text-xl xl:text-2xl text-primary-500`;
const CustomerTitle = tw.p`font-bold text-sm`;

const QuotesLeft = tw(QuotesLeftIcon)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute top-0 left-0`;
const QuotesRight = tw(QuotesRightIcon)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute bottom-0 right-0`;

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20`}
  button {
    ${tw`text-secondary-500 hover:text-primary-500 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8`}
    }
  }
`;

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

const TwoColumnWithImage=() => {

  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Les différents degrés de dysplasie</HeadingTitle>
          <HeadingDescription></HeadingDescription>
        </HeadingInfoContainer>
        <TestimonialSliderContainer>
          <TestimonialSlider nextArrow={<NextArrow />} prevArrow={<PreviousArrow />}>
           <Fade bottom>
           <Testimonial> 
               <img className="imgContent" src="https://www.vetopedia.fr/wp-content/uploads/2018/10/dysplasie-hanche-chien-stades-radiologiques3-1.jpg" alt="dog"/>
                <TextContainer>
                <CustomerInfo>
                  <CustomerName> Stade A </CustomerName>
                  <CustomerTitle className="CustomerTitle">Aucun signe de dysplasie coxo-fémorale.</CustomerTitle>
                  </CustomerInfo>
               <QuoteContainer className="QuoteContainer">
                    <QuotesLeft />
                    <Quote>Le chien n'est pas atteint. La coaptation entre la tête fémorale et l'acétabulum est parfaite et l'angle de Norberg-Olsson est supérieur ou égal à 105°</Quote>
                    <QuotesRight />
                  </QuoteContainer>  
                </TextContainer>
            </Testimonial>
            </Fade>
            <Fade bottom> 
               <Testimonial> 
               <img className="imgContent" src="https://www.vetopedia.fr/wp-content/uploads/2018/10/dysplasie-hanche-chien-stades-radiologiques6-1.jpg" alt="dog"/>
                <TextContainer>
                <CustomerInfo>
                  <CustomerName> Stade B </CustomerName>
                  <CustomerTitle className="CustomerTitle">Etat sensiblement normal</CustomerTitle>
                  </CustomerInfo>
               <QuoteContainer className="QuoteContainer">
                    <QuotesLeft />
                    <Quote>Soit l'angle de Norberg-Olsson supérieur à 105° mais coaptation imparfaite entre la tête fémorale et l'acétabulum, Soit l'angle de Norberg-Olsson est compris entre 100 et 105° mais bonne coaptation entre la tête fémorale et l'acétabulum</Quote>
                    <QuotesRight />
                  </QuoteContainer>  
                </TextContainer>
               </Testimonial> 
               </Fade>
               <Fade bottom> 
               <Testimonial> 
               <img className="imgContent" src="https://www.vetopedia.fr/wp-content/uploads/2018/10/dysplasie-hanche-chien-stades-radiologiques4-1.jpg" alt="dog"/>
                <TextContainer>
                <CustomerInfo>
                  <CustomerName> Stade C </CustomerName>
                  <CustomerTitle className="CustomerTitle">Dysplasie coxo-fémorale légère</CustomerTitle>
                  </CustomerInfo>
               <QuoteContainer className="QuoteContainer">
                    <QuotesLeft />
                    <Quote>Angle de Norberg-Olsson compris entre 100 et 105°, Coaptation imparfaite entre la tête fémorale et l'acétabulum, Présence éventuelle de légers signes d'arthrose.</Quote>
                    <QuotesRight />
                  </QuoteContainer>  
                </TextContainer>
               </Testimonial> 
               </Fade>
               <Fade bottom>
               <Testimonial> 
               <img className="imgContent" src="https://www.vetopedia.fr/wp-content/uploads/2018/10/dysplasie-hanche-chien-stades-radiologiques9-1.jpg" alt="Dog"/>
                <TextContainer>
                <CustomerInfo>
                  <CustomerName> Stade D </CustomerName>
                  <CustomerTitle className="CustomerTitle">Dysplasie coxo-fémorale moyenne</CustomerTitle>
                  </CustomerInfo>
               <QuoteContainer className="QuoteContainer">
                    <QuotesLeft />
                    <Quote>Mauvaise congruence articulaire angle NO compris  entre 100 et 90°  La petite indiquée par la flèche correspond à une image d’arthrose (ostéophytose du col fémoral) appelée ligne de Morgan. subluxation de la tête fémorale avec un angle de NO = 90°</Quote>
                    <QuotesRight />
                  </QuoteContainer>  
                </TextContainer>
               </Testimonial>
               </Fade> 
               <Fade bottom>
               <Testimonial> 
               <img className="imgContent" src="https://www.vetopedia.fr/wp-content/uploads/2018/10/dysplasie-hanche-chien-stades-radiologiques11-1.jpg" alt="Dog"/>
                <TextContainer>
                <CustomerInfo>
                  <CustomerName> Stade E </CustomerName>
                  <CustomerTitle className="CustomerTitle">Dysplasie coxo-fémorale sévère</CustomerTitle>
                  </CustomerInfo>
               <QuoteContainer className="QuoteContainer">
                    <QuotesLeft />
                    <Quote>subluxation de la tête fémorale pincement de l’interligne articulaire (correspond à une diminution de l’épaisseur du cartilage articulaire) angle NO inférieur à 90°. subluxation importante angle NO très inférieur à 90° nombreux signes d’arthrose (flèches blanches)</Quote>
                    <QuotesRight />
                  </QuoteContainer>  
                </TextContainer>
               </Testimonial> 
               </Fade>
          </TestimonialSlider>
        </TestimonialSliderContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

export default TwoColumnWithImage;
