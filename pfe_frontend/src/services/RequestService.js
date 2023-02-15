import axios from 'axios'
import StorageService from './StorageService'
class RequestService{
    static async get(url,bearer=false){
        let result
        if(bearer){
            await axios.get(url,{headers:{"Authorization":"Bearer "+StorageService.getIdToken()}})
            .then(response=>result=[response.status,response.data,response.data.message])
            .catch(error=>result=[error.response.status,error.response.data.errors,error.response.data.message])
            return result
        }
        else{
            await axios.get(url)
            .then(response=>result=[response.status,response.data,response.data.message])
            .catch(error=>result=[error.response.status,error.response.data.errors,error.response.data.message])
            return result
        }                    
    }
    static async post(url,data,bearer=false){
        let result
        if(bearer){
            let result
            await axios.post(url,data,{headers:{"Authorization":"Bearer "+StorageService.getIdToken()}})
            .then(response=>result=[response.status,response.data,response.data.message])
            .catch(error=>result=[error.response.status,error.response.data.errors])
            return result
        }
        else{
            await axios.post(url,data)
            .then(response=>result=[response.status,response.data])
            .catch((error)=> result=[error.response.status,error.response.data.errors])
            return result;
        }
    }
    static async put(url,data,bearer=false){
        let result
        if(bearer){
            let result
            await axios.put(url,data,{headers:{"Authorization":"Bearer "+StorageService.getIdToken()}})
            .then(response=>result=[response.status,response.data,response.data.message])
            .catch(error=>result=[error.response.status,error.response.data.errors,error.response.data.message])
            return result
        }
        else{
            await axios.put(url,data)
            .then(response=>result=[response.status,response.data])
            .catch((error)=> result=[error.response.status,error.response.data.errors])
            return result;
        }
    }
    static async delete(url,data_,bearer=false){
        let result
        if(bearer){
            let result
            await axios.delete(url,{data:data_,headers:{"Authorization":"Bearer "+StorageService.getIdToken()}})
            .then(response=>result=[response.status,response.data,response.data.message])
            .catch(error=>result=[error.response.status,error.response.data.errors,error.response.data.message])
            return result
        }
        else{
            await axios.delete(url,data_)
            .then(response=>result=[response.status,response.data])
            .catch((error)=> result=[error.response.status,error.response.data.errors])
            return result;
        }
    }
}

export default RequestService;