import {BACKEND_URL} from 'components/frontend/env'
import RequestService from './RequestService'
class AuthService{
    static async signUpWithEmailAndPassword(data){
        return await RequestService.post(BACKEND_URL+'/signup',data)
    }
    static async signInWithEmailAndPassword(data){
        return await RequestService.post(BACKEND_URL+'/signin',data)
    }
    static async sendPasswordResetLink(data){
        return await RequestService.post(BACKEND_URL+'/reset/password/',data)
    }
}
export default AuthService;
