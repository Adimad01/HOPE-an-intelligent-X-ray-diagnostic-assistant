import React,{useState} from "react";
import {Link} from "react-router-dom"
import logo from "components/frontend/images/logo-full.png";
import {withRouter,Redirect} from "react-router-dom"
import AuthService from "services/AuthService"
import StorageService from "services/StorageService"
import { Container as ContainerBase } from "components/frontend/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "components/frontend/images/signup.svg";
import googleIconImageSrc from "components/frontend/images/google-icon.png";
import twitterIconImageSrc from "components/frontend/images/facebook-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import './signup.css';
import firebase from "firebase"
import axios from "axios"
import { BACKEND_URL } from "../env";
import {CircularProgress} from "@material-ui/core"


const Container = tw(ContainerBase)
`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div `max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div `lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoImage = tw.img `h-12 mx-auto`;
const MainContent = tw.div `mt-12 flex flex-col items-center`;
const Heading = tw.h1 `text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div `w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div `flex flex-col items-center`;
const SocialButton = styled.a `
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-1 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

const SignUp=({
  history,
  illustrationImageSrc = illustration,
  headingText = "S'inscrire gratuitement",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "S'inscrire avec Google",
      name:'google'
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "S'inscrire avec Facebook",
      name:'facebook'
    }
  ],
  submitButtonText = "S'inscrire",
  SubmitButtonIcon = SignUpIcon,
  tosUrl = "#",
  privacyPolicyUrl = "#",
  signInUrl = "/connexion"
}) => {
  const [form,setForm]=useState({email:"",password:"",password_confirmation:""});
  //const [formErrors,setFormErrors] = useState({})
  const onChangeHandler=(e)=>{
    form[e.target.name]=e.target.value
    setForm(form)
  }
  const [loading,setLoading] = useState(false)
  const [signUpErrors,setSignUpErrors] = useState({})
  const signupWithEmailAndPassword = async (e)=>{
      e.preventDefault();
      setLoading(true)
      console.log(form)
          let result = await AuthService.signUpWithEmailAndPassword(form)
          setLoading(false)
          if(result[0]===200){
          
            firebase.auth().signInWithEmailAndPassword(form.email,form.password)
            .then((userCredential) => {
              var user = userCredential.user;
              StorageService.setAccessToken(user.token)
              StorageService.setUserEmail(user.email)
              history.push('/diagnostic')

            })
            .catch((error) => {
              //var errorCode = error.code;
              //var errorMessage = error.message;
            });
          }
          else if(result[0]===422){
            setSignUpErrors(result[1])
          }
            
    
  }


  const signInWithGoogle=(e)=>{
    e.preventDefault()
    const provider = new firebase.auth.GoogleAuthProvider()
    
      socialSignIn(provider,e)
  }
  const signInWithFacebook = (e)=>{
    const provider = new firebase.auth.FacebookAuthProvider()
    socialSignIn(provider,e)
  }
  const socialSignIn = (provider,e)=>{
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user
      firebase.auth().currentUser.getIdToken().then(idToken=>{
        console.log(idToken)
        StorageService.setAccessToken(token)
        StorageService.setIdToken(idToken)
        StorageService.setUser(user)
        axios.post(BACKEND_URL+'/social/signin',{email:user.email,uid:user.uid})
        .then(response=>{
          history.push("/diagnostic")
        })
      
      })
      //console.log(user.uid)
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode+errorMessage+email+credential)
    });
  }
  const socialCallbacks={'facebook':signInWithFacebook,'google':signInWithGoogle}
  return(
    StorageService.getUser()===null?
    <div className="page-container page">
    <Container>
      <Content>
        <MainContainer>
          <Link to="/">
              <LogoImage src={logo} />
          </Link>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
            <SocialButtonsContainer ClassName="SocialButtonsContainer">
                  {socialButtons.map((socialButton, index) => (
                    <SocialButton className="SocialBtn" style={{cursor:"pointer"}} key={index} onClick={(e)=>{socialCallbacks[socialButton.name](e)}}>
                      <span className="iconContainer" >
                        <img src={socialButton.iconImageSrc} className="icon" alt=""/>
                      </span>
                      <span className="text">{socialButton.text}</span>
                    </SocialButton>
                  ))}
              </SocialButtonsContainer>
              <DividerTextContainer>
                <DividerText>Ou</DividerText>
              </DividerTextContainer>
              <Form onSubmit={(e)=>signupWithEmailAndPassword(e)}>
                  {/*<Input type="text" placeholder="Nom complet" />
                  <Input type="text" placeholder="Adresse" />*/}
                <Input type="email" name="email" required placeholder="Email" onChange={(e)=>onChangeHandler(e)}   
               />
                 <div className="text-left text-error">
                    {signUpErrors.email &&<p>{signUpErrors.email[0]}</p>}
                </div>                  
               
            
               
               <Input type="password" name="password" placeholder="Mot de passe" required onChange={(e)=>onChangeHandler(e)}
                />
                 <div className="text-left text-error">
                    {signUpErrors.password &&<p>{signUpErrors.password[0]}</p>}
                </div>
                <Input type="password" name="password_confirmation" placeholder="Confirmation de mot de passe" required onChange={(e)=>onChangeHandler(e)}
               />
                <div className="text-left text-error">
                    {signUpErrors.password_confirmation &&<p>{signUpErrors.password_confirmation[0]}</p>}
                </div>
                    
                <SubmitButton type="submit" className="particular-submit-button">
                    {loading?
                    <div className="spinner-border text-light" role="status">
                       <CircularProgress />&nbsp;&nbsp;
                    </div>:
                          <span className="text">{submitButtonText}</span>
                    }
                </SubmitButton>
                    <p tw="mt-6 text-xs text-gray-600 text-center">
                    J'accepte de respecter HOPE {" "}
                      <a href={tosUrl} tw="border-b border-gray-500 border-dotted">
                      Ses conditions d'utilisation
                      </a>{" "}
                      et sa{" "}
                      <a href={privacyPolicyUrl} tw="border-b border-gray-500 border-dotted">
                      Politique de confidentialité 
                      </a>
                    </p>
                    <p tw="mt-8 text-sm text-gray-600 text-center">
                    Vous avez déjà un compte? {" "}
                      <Link to={signInUrl} >
                      S'identifier 
                      </Link>
                    </p>
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer>
      </Content>
    </Container>
  </div>
  :<Redirect to="/diagnostic" />
  )
}
  
  

export default withRouter(SignUp);