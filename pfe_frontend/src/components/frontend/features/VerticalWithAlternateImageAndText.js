import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "components/frontend/images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "components/frontend/misc/Headings.js";
//import './style.css'
import Fade from 'react-reveal/Fade';
const Container = tw.div `relative`;

const SingleColumn = tw.div `max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div `flex flex-col text-black items-center`;
const HeadingDescription = tw.p `mt-2 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div `mt-16`;

const Card = styled.div(props => [
    tw `mt-24 md:flex justify-center items-center`,
    props.reversed ? tw `flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw `rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div `mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div `font-bold tracking-wide text-secondary-100`;
const Title = tw.h4 `text-3xl font-bold text-gray-900`;
const Description = tw.p `mt-2 text-sm text-black leading-loose`;

const SvgDotPattern1 = tw(
    SvgDotPatternIcon
)
`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
    SvgDotPatternIcon
)
`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
    SvgDotPatternIcon
)
`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
    SvgDotPatternIcon
)
`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

const VerticalWithAlternateImageAndText=() => {
    const cards = [{
            imageSrc: 'https://zdrowy.net/wp-content/uploads/2018/06/dysplazja-u-psa-e1530111083608.jpg',
            subtitle: "1.",
            title: "Qu'est-ce que la dysplasie canine de la hanche?",
            description: "Hip dysplasia is a common inherited orthopaedic problem where abnormalities occur in the hip joints. These abnormalities include changes to the shape of the hip, ball and socket and the development of osteoarthritis (a common form of arthritis). Changes to the hip joint will begin at a young age as the puppy starts to become more active and will get worse over time. These changes can lead to excessive wear and tear of the joint, causing one or both hip joints to become defective. At this stage the hip joint(s) may be painful and can have serious effects on the health, behaviour and welfare of the dog. The severity of hip dysplasia can vary from a poorly shaped hip joint with osteoarthritis (a common form of arthritis) to a very deformed hip joint with advanced and very painful osteoarthritis.",
            
        },

        {
            imageSrc: "https://www.thehealthydogco.com/wp-content/uploads/2021/01/What-can-I-give-My-Dog-for-Hip-Pain_The-Healthy-Dog-Co-1-1200x800.jpg",
            subtitle: "2.",
            title: "Quels sont les signes de la dysplasie canine de la hanche? ",
            description: "Signs of hip dysplasia in dogs vary between individuals and breeds. Some visible signs include: \n Lameness (being unable to walk correctly)\n Stiffness after rest \n A reluctance to exercise \n Groaning while resting or getting up \n Difficulty in using the stairs \n A vet’s physical examination will provide a more reliable assessment of whether hip dysplasia is present and an X-ray is the only definitive way of diagnosing hip dysplasia.",
            
        },

        {
            imageSrc: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/04/24145846/Beagle-at-the-Vet-e1572989550709.jpg",
            subtitle: "3.",
            title: "Comment traiter la dysplasie canine de la hanche?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            
        }
    ];

    return ( 
    <Container >
        <SingleColumn >
        <HeadingInfoContainer >
        <HeadingTitle > Dysplasie de la hanche chez les chiens </HeadingTitle> 
        <HeadingDescription >Le programme a examiné plus de 250000 chiens de plus de 180 races pour la dysplasie de la hanche </HeadingDescription>
        </HeadingInfoContainer >
        
        <Content id='savPlus' > {
            cards.map((card, i) => ( 
                <Card key = { i }
                reversed = { i % 2 === 1 } >
                
                <Image className="imageCard" imageSrc = { card.imageSrc }/>
                <Fade right>  
                    <Details >
                        < Subtitle > { card.subtitle } </Subtitle> 
                        <Title > { card.title } </Title> 
                        <Description > { card.description } </Description>
                    </Details>
                    </Fade>
                </Card>
            ))
        } 
        </Content>
       
        </SingleColumn> 
        <SvgDotPattern1/>
        <SvgDotPattern2/>
        <SvgDotPattern3/>
        <SvgDotPattern4/>
        </Container>
    );
};

export default VerticalWithAlternateImageAndText;