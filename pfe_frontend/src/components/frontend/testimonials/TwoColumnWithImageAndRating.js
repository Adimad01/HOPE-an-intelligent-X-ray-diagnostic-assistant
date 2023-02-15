import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/frontend/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/frontend/misc/Layouts.js";
import loveIllustrationImageSrc from "components/frontend/images/feedback.jpg";
import { ReactComponent as StarIconBase } from "components/frontend/images/star-icon.svg";
import { ReactComponent as ArrowLeftIcon } from "components/frontend/images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "components/frontend/images/arrow-right-3-icon.svg";

const Row = tw.div `flex flex-col md:flex-row justify-between items-center`;
const Column = tw.div `w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)
`md:w-5/12 xl:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
    tw `md:w-7/12 xl:w-6/12 mt-16 md:mt-0`,
    props.textOnLeft ? tw `md:pr-12 lg:pr-16 md:order-first` : tw `md:pl-12 lg:pl-16 md:order-last`
]);

const Image = styled.img(props => [
    props.imageRounded && tw `rounded`,
    props.imageBorder && tw `border`,
    props.imageShadow && tw `shadow`
]);

const Subheading = tw(SubheadingBase)
`text-center md:text-left`;
const Heading = tw(
    SectionHeading
)
`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const TestimonialSlider = styled(Slider)
`
  ${tw`w-full mt-10 text-center md:text-left`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;

const Testimonial = tw.div`outline-none h-full flex! flex-col`;
const StarsContainer = styled.div``;
const StarIcon = tw(StarIconBase)`inline-block w-5 h-5 text-orange-400 fill-current mr-1 last:mr-0`;
const TestimonialHeading = tw.div`mt-4 text-xl font-bold`;
const Quote = tw.blockquote`mt-4 mb-8 sm:mb-10 leading-relaxed font-medium text-gray-700`;

const CustomerInfoAndControlsContainer = tw.div`mt-auto flex justify-between items-center flex-col sm:flex-row`;

const CustomerInfo = tw.div`flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerTextInfo = tw.div`text-center md:text-left sm:ml-6 mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-bold text-gray-900 text-xl`;
const CustomerTitle = tw.p`font-medium text-gray-500`;

const Controls = styled.div`
  ${tw`flex mt-8 sm:mt-0`}
  .divider {
    ${tw`my-3 border-r`}
  }
`;
const ControlButton = styled.button`
  ${tw`mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-primary-500 hover:text-primary-700 focus:outline-none focus:shadow-outline`}
  svg {
    ${tw`w-4 h-4 stroke-3`}
  }
`;

const TwoColumnWithImageAndRating= ({
  imageSrc = loveIllustrationImageSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  subheading = "",
  heading = "Our Clients Love Us.",
  // description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
  textOnLeft = false,
  testimonials = [
    {
      stars: 5,
      heading: "Amazing User Experience",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      customerName: "Charlotte Hale",
      customerTitle: "CEO, Delos Inc."
    },
    {
      stars: 5,
      heading: "Love the Developer Experience and Design Principles !",
      quote:
        "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      customerName: "Adam Cuppy",
      customerTitle: "Founder, EventsNYC"
    }
  ]
}) => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Container>
      <ContentWithPaddingXl>
        <Row>
          <ImageColumn>
            <Image src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            {/* <Description>{description}</Description> */}
            <TestimonialSlider arrows={false} ref={setSliderRef}>
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index}>
                  <StarsContainer>
                    {Array.from({ length: testimonial.stars }).map((_,indexIcon) => (
                      <StarIcon key={indexIcon} />
                    ))}
                  </StarsContainer>
                  <TestimonialHeading>{testimonial.heading}</TestimonialHeading>
                  <Quote>{testimonial.quote}</Quote>
                  <CustomerInfoAndControlsContainer>
                    <CustomerInfo>
                    <CustomerTextInfo>
                        <CustomerName>{testimonial.customerName}</CustomerName>
                        <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                      </CustomerTextInfo>
                    </CustomerInfo>
                    <Controls>
                      <ControlButton onClick={sliderRef?.slickPrev}>
                        <ArrowLeftIcon />
                      </ControlButton>
                      <div className="divider" />
                      <ControlButton onClick={sliderRef?.slickNext}>
                        <ArrowRightIcon />
                      </ControlButton>
                    </Controls>
                  </CustomerInfoAndControlsContainer>
                </Testimonial>
              ))}
            </TestimonialSlider>
          </TextColumn>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default TwoColumnWithImageAndRating;