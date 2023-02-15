import React ,{useContext,useEffect,useState} from "react"
import  {ImageProcessContext} from './Diagnostic'
import './image-process.scss'
import axios from "axios"
import {FAST_API_URL} from "components/backend/env"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { CircularProgress} from '@material-ui/core';
import StorageService from "services/StorageService"
import RequestService from "services/RequestService"
import {BACKEND_URL} from "components/frontend/env"
import firebase from "firebase"
const ImageProcess=({children})=> {
  const {show,setShow,dimensions} =useContext(ImageProcessContext)
  const [loading,setLoading] = useState(false)
  const [predictions,setPredictions]=useState(false)
  useEffect(()=>{
    if(predictions){
      Swal.fire({
        title: 'Résultats du diagnostic',
        html:`<ul ><li><b className="stade">Stade A:</b>${predictions["A"]}%</li><li><b class="stade">Stade B:</b>${predictions["B"]}%</li><li><b class="stade">Stade C:</b>${predictions["C"]}%</li><li><b class="stade">Stade D:</b>${predictions["D"]}%</li><li><b class="stade">Stade E:</b>${predictions["E"]}%</li></ul>`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Enregister`,
        denyButtonText: `Fermer`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          
          await Swal.fire({
            title: 'Veuillez donner un nom au résultat',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Valider',
            showLoaderOnConfirm: true,
            preConfirm: async (name) => {
              const formData = new FormData();
              formData.append("file",document.getElementById("image-cropped").src)
              formData.append("upload_preset","dqr0cesd")
              await axios.post("https://api.cloudinary.com/v1_1/dwfm2bsym/image/upload",formData)
              .then(response=>{
                predictions["name"]=name
                predictions["image"]=response.data.secure_url
                setPredictions(predictions)
              })
              const res = await RequestService.post(BACKEND_URL+"/diagnostic/save",predictions,true)
              if(res[0]!==200){
                Swal.showValidationMessage(
                      `Echec de la sauvegarde: ${res[1].name}`
                )
              }
                
            },
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                icon: 'success',
                text: 'Diagnostic sauvegardé avec succès',
              })
            }
          })
          
        } 
      })

    }
  },[predictions])
  const diagnostic=  ()=>{
      if(firebase.auth().currentUser.emailVerified){
        setLoading(true)
        axios.post(FAST_API_URL+'/diagnostic',{image:document.getElementById("image-cropped").src.replace("data:image/png;base64,",""),token:StorageService.getIdToken()})
        .then(async (response) =>{
          setPredictions(response.data)
          setLoading(false)
        })
        .catch(error=>console.log(error.response))
      }
      else{
        /*Swal.fire(
          'Désolé',
          'Vous ne pouvez pas effectuer votre diagnostic sans vérifier votre adresse email',
          'error'
        )*/
      }

      
  }
   return (
    <>
      {show ? (
        <>
          <div className="justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none" style={{width:dimensions.width,height:dimensions.height}}>
            <div className="relative w-full my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="image-process-container border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Traitement d'images
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShow(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {children}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    Fermer
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => diagnostic()}
                  >
                    {!loading?<p>Diagnostiquer</p>:<CircularProgress />}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
  export default ImageProcess;