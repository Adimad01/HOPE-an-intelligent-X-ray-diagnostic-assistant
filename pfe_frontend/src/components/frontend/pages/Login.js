import React ,{useState} from "react";
import {Link,withRouter,Redirect} from "react-router-dom"
import { Container as ContainerBase } from "components/frontend/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "components/frontend/images/Signin.png";
import logo from "components/frontend/images/logo-full.png";
import googleIconImageSrc from "components/frontend/images/google-icon.png";
import twitterIconImageSrc from "components/frontend/images/facebook-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import firebase from "firebase"
import axios from 'axios'
import StorageService from "services/StorageService"
import {BACKEND_URL} from '../env'
import AuthService from "services/AuthService";
import {CircularProgress} from "@material-ui/core"
import './signup.css'

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
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;
const Login=({
  history,
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Connectez-vous à HOPE",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Connectez-vous avec Google",
      name:'google'
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Connectez-vous avec Facebook",
      name:'facebook'
    }
  ],
  submitButtonText = "Connexion",
  SubmitButtonIcon = LoginIcon,

}) => {
  const [form,setForm]=useState({email:"",password:""});
  const [invalidCredentials,setInvalidCredentials] = useState(false)
  const [loginErrors,setLoginErrors] = useState({})
  const [loading,setLoading] = useState(false)


  const signInWithEmailAndPassword = async (e)=>{
      e.preventDefault();
      setLoading(true)
      let result = await AuthService.signInWithEmailAndPassword(form)
      if(result[0]===200){
        firebase.auth().signInWithEmailAndPassword(form.email,form.password)
        .then((credential)=>{
          var user = credential.user
          firebase.auth().currentUser.getIdToken().then(idToken=>{
            console.log(idToken)
            StorageService.setIdToken(idToken)
            StorageService.setUser(user)
            history.push("/diagnostic")
        })
      
      })
    }
    else if(result[0]===404){
        setInvalidCredentials(true)
    }
    else if(result[0]===422){
      setLoginErrors(result[1])
    }
    setLoading(false)

  }
  //const [formErrors,setFormErrors] = useState({})
  const onChangeHandler=(e)=>{
    form[e.target.name]=e.target.value
    setForm(form)
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
    <div  className="page-container page">
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
                {invalidCredentials && <div className="my-alert alert-danger">Ses identifiants ne correspondent à aucun compte</div>}
                <Form onSubmit={(e)=>signInWithEmailAndPassword(e)}>
                  <Input type="email" name="email" placeholder="Email" onChange={(e)=>onChangeHandler(e)} />
                  {loginErrors.email &&<p className="p-error">{loginErrors.email[0]}</p>}
                  <Input type="password" name="password"  placeholder="Mot de passe" onChange={(e)=>onChangeHandler(e)} />
                  {loginErrors.password &&<p className="p-error">{loginErrors.password[0]}</p>}
                  <SubmitButton className="particular-submit-button">
                    {loading?
                    <div className="spinner-border text-light" role="status">
                      <CircularProgress />&nbsp;&nbsp;
                    </div>:
                          <span className="text">{submitButtonText}</span>
                    }
                </SubmitButton>
                </Form>
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  <Link to="/reinitialisation-mot-de-passe" >
                  Avez vous oublié votre mot de passe ?
                  </Link>
                </p>
                <p tw="mt-8 text-sm text-gray-600 text-center">
                Je n'ai pas de compte ?{" "}
                  <Link to="/inscription" >
                  S'inscrire
                  </Link>
                </p>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage className="signin" imageSrc={illustrationImageSrc} />
          </IllustrationContainer>
        </Content>
      </Container>
    </div>
    :
    <Redirect to="/diagnostic"/>
);}

export default withRouter(Login);