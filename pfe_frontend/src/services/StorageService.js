class StorageService{
    static setAccessToken(accessToken){
        localStorage.setItem('access-token',accessToken)
    }
    
    static getAccessToken(){
        return localStorage.getItem('access-token')
    }
    static deleteAccessToken(){
        localStorage.removeItem('access-token')
    }

    static setIdToken(idToken){
        localStorage.setItem('id-token',idToken)
    }
    
    static getIdToken(){
        return localStorage.getItem('id-token')
    }
    static deleteIdToken(){
        localStorage.removeItem('id-token')
    }

    static setUserEmail(userEmail){
        localStorage.setItem('user-email',userEmail)
    }
    static getUserEmail(){
        return localStorage.getItem('user-email')
    }
    static deleteUserEmail(){
        localStorage.removeItem('user-email')
    }

    static setUser(user){
        localStorage.setItem('user',user)
    }

    static getUser(){
        return localStorage.getItem('user')
    }
    static deleteUser(){
        localStorage.removeItem('user')
    }

}

export default StorageService