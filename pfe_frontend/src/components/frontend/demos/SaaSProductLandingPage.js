import React from "react";
import tw from "twin.macro";
import Hero from "components/frontend/hero/TwoColumnWithInput.js";
import FeatureWithSteps from "components/frontend/features/TwoColWithSteps.js";
import Features from "components/frontend/features/VerticalWithAlternateImageAndText.js";
import Fade from 'react-reveal/Fade';
import Testimonial from "components/frontend/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/frontend/faqs/SingleCol.js";
import Footer from "components/frontend/footers/FiveColumnWithBackground.js";
import macHeroScreenshotImageSrc from "components/frontend/images/Diagnoster.jpg";
import ContactUsForm from "components/frontend/forms/SimpleContactUs.js";
import Blogs from 'components/frontend/testimonials/TwocolumnWithImage'

const SaasProductLandingPage=() => {
    const Subheading = tw.span `uppercase tracking-widest font-bold text-gray-400`;
    const HighlightedText = tw.span `text-gray-500`;
    return (
         <div className="page-container page">
            <>
        
                        <Hero roundedHeaderButton={ true }/>  
                        <Features/>
                        <Blogs/>
                        <FeatureWithSteps subheading = { < Subheading > LES ÉTAPES </Subheading>}
                            heading = { <>Comment <HighlightedText> Diagnostiquer ? </HighlightedText> </>
                            }
                            textOnLeft = { false }
                            imageSrc = { macHeroScreenshotImageSrc }
                            imageDecoratorBlob = { true }
                            decoratorBlobCss = { tw `xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2` }
                            />
                           

                            <Testimonial heading = { <>Les opinions < HighlightedText> de nos utilisateurs. </HighlightedText> </>
                            }
                            testimonials = {
                                [{
                                        stars: 5,
                                        heading: "Expérience incroyable",
                                        quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
                                        customerName: "Mohammed Ali",
                                        customerTitle: "Dr veterinaire."
                                    },
                                    {
                                        stars: 5,
                                        heading: "Ce site web vraiment utile !",
                                        quote: "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                                        customerName: "Amel Hiba",
                                        customerTitle: "Etudiant de veterinaire"
                                    }
                                ]
                            }
                            /> 
                            <Fade left>
                            <FAQ
                            subheading ={ < Subheading > FAQS </Subheading>}
                            heading ={ <>Vous avez <HighlightedText> des Questions ? </HighlightedText> </>}
                            faqs={
                                    [{
                                            question: " Quels sont les chiens touchés par la dysplasie coxofémorale ? ",
                                            answer: "La dysplasie de la hanche peut affecter les chiens de toutes races et de toutes tailles,mais elle est plus fréquemment rencontrée dans les grandes races et les races géantes : chiens de montagne, chiens de berger, chiens de garde, chiens de traîneau,chiens de chasse, chiens de petit format... etc"
                                        },
                                        {
                                            question: " La dysplasie de la hanche, une maladie génétique ? ",
                                            answer: "La dysplasie de la hanche est une maladie héréditaire polygénique (transmise par plusieurs gènes) caractérisée par une instabilité de l’articulation coxofémorale (articulation de la hanche) pouvant entraîner une subluxation de la hanche (séparation partielle des surfaces articulaires) et secondairement de l’ostéoarthrose (dégénérescence des structures articulaires), la maladie est héréditaire et causée par l’interaction de plusieurs gènes (polygénique), ce qui rend son élimination difficile. De nombreux chiens ont les gênes de la dysplasie mais ne montrent aucun signe de la maladie. Il faut donc être très strict dans les critères de sélection des reproducteurs et l’étude de leur généalogie, à savoir le statut des hanches des parents, grandsparents et arrière-grands-parents, et si possible des frères, sœurs, oncles et tantes. Pour l’instant, la seule façon de diminuer la fréquence de la dysplasie est de reproduire sélectivement des animaux dépourvus de dysplasie."
                                        },
                                        {
                                            question: "C'est quoi la hanche normale? ",
                                            answer: "La hanche est l’articulation qui met en contact le bassin avec la cuisse, plus exactement la tête du fémur avec le cotyle de l’os iliaque du bassin. Il s’agit d’une énarthrose c’est à dire une articulation cavitaire qui permet de réaliser un cône de mouvement. Elle comprend la tête fémorale qui est ronde et fait entre 40 et 60 mm de diamètre selon la taille du sujet et la cavité cotyloïdienne dans laquelle elle s’emboite."
                                        },
                                        {
                                            question: "C'est quoi la hanche dysplasique ? ",
                                            answer: "La dysplasie de la hanche est une malformation qui consiste en une asymétrie plus ou moins importante de la tête du fémur avec sa cavité et en un relâchement du ligament qui les rend solidaires. Elle évolue plus ou moins rapidement vers une arthrose douloureuse et invalidante."
                                        },
                                        {
                                            question: " Qu’est ce qui cause la dysplasie de la hanche ?",
                                            answer: "La dysplasie de la hanche est une atteinte d’origine principalement génétique, mais des facteurs environnementaux comme l’obésité durant le jeune âge, la prise de poids et l’exercice intense peuvent favoriser l’expression clinique chez des animaux génétiquement atteints. Certaines races sont plus à risque que d’autre d’un point de vue génétique : Parmi celles-ci les Bergers allemands, Labrador Retrievers, Golden Retrievers , Rottweilers, St Bernard, Bouvier Bernois et Bobtails par exemple.Les estimations actuelles indiquent que plus d’une centaine de gènes codent pour la dysplasie de la hanche . Il est important de comprendre que les facteurs environnementaux sont incapables de provoquer une dysplasie de la hanche, mais ils vont favoriser"
                                        }
                                    ]
                                }
                                />  
                                </Fade>
                                <ContactUsForm/>
                                <Footer/>                    
                        </>

         </div>
                );
            }

export default SaasProductLandingPage;