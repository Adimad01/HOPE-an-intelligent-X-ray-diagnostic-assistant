import React ,{useState}from "react";
import {Link,Redirect} from "react-router-dom"
import { Container as ContainerBase } from "components/frontend/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import logo from "components/frontend/images/logo-full.png";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "components/frontend/images/forgot-password.svg";
import AuthService from "services/AuthService"
import StorageService from "services/StorageService"
const Container = tw(ContainerBase)
`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div `max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div `lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoImage = tw.img `h-12 mx-auto`;

const MainContent = tw.div `mt-12 flex flex-col items-center`;
const Heading = tw.h1 `text-2xl xl:text-3xl font-extrabold text-center mt-5`;
const FormContainer = tw.div `w-full h-full flex-1 mt-16`;

const Form = tw.form`mx-auto max-w-xs mt-5`;
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

const PasswordReset= ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Réinitialiser mon mot de passe",

  submitButtonText = "Envoyer",
  tosUrl = "#",
  privacyPolicyUrl = "#",
  signInUrl = "#"
}) => {

  const [form,setForm]=useState({email:"",password:""});
  const [passwordResetEmailSent,setPasswordResetEmailSent]= useState(false)
  const onChangeHandler=(e)=>{
    form[e.target.name]=e.target.value
    setForm(form)
  }
  const [loading,setLoading] = useState(false)
  const [passwordResetErrors,setPasswordResetErrors] = useState({})
  const resetPassword = async (e)=>{
      e.preventDefault();
      setLoading(true)
      let result = await AuthService.sendPasswordResetLink(form)
      setLoading(false)
      if(result[0]===200){
          setPasswordResetEmailSent(true)
      }
      else if(result[0]===422){
        setPasswordResetErrors(result[1])
      }
    
  }
  return (
    StorageService.getUser()===null?
    <div className="page-container page" style={{height:"100vh"}}>
      <Container>
        <Content>
          <MainContainer>
            <Link to="/">
              <LogoImage src={logo} />
            </Link>
            <MainContent style={{minHeight:"70vh"}}>
              <FormContainer>
              <Heading>{headingText}</Heading>
                <Form>
                {passwordResetEmailSent && <div className="alert alert-success">Un lien de réinitialisation vous a été envoyé avec succès</div>}
                <Input type="email" name="email" required placeholder="Email" onChange={(e)=>onChangeHandler(e)}/>
                 <div className="text-left text-error">
                    {passwordResetErrors.email&&<p>{passwordResetErrors.email[0]}</p>}
                </div>
                <SubmitButton className="particular-submit-button" onClick={(e)=>resetPassword(e)}>
                    {loading?
                    <div className="spinner-border text-light" role="status">
                      <span className="sr-only">Chargement...</span>&nbsp;&nbsp;
                    </div>:
                          <span className="text">{submitButtonText}</span>
                    }
                </SubmitButton>
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
    :<Redirect to="/diagnostic"/>
  );
}

export default PasswordReset;