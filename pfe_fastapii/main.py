from tensorflow.keras.models import load_model
from fastapi import FastAPI,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from skimage import io,img_as_ubyte,img_as_float
from skimage.transform import resize
from skimage.filters import farid
from matplotlib import pyplot as plt
import base64
import cv2
import numpy
import firebase_admin
from firebase_admin import auth
from firebase_admin import credentials

cred = credentials.Certificate("firebase.json")

firebase = firebase_admin.initialize_app(cred)

def equalize(path):
    image = cv2.cvtColor(cv2.imread(path),cv2.COLOR_BGR2LAB)
    l,a,b = cv2.split(image)
    clahe = cv2.createCLAHE(clipLimit=3.0,tileGridSize=(8,8))
    l_clahe = clahe.apply(l)
    return cv2.cvtColor(cv2.merge((l_clahe,a,b)),cv2.COLOR_LAB2LRGB)
def process_image(image_resized):
    image= equalize(image_resized)
    image=cv2.cvtColor(image,cv2.COLOR_RGB2GRAY)
    image.astype(numpy.float32)
    image = image/ 255
    return image

def processing(image:str):
    image_decoded = base64.standard_b64decode(image)
    image = io.imread(image_decoded,plugin="imageio")
    image_resized=resize(image,(224,224))
    io.imsave("image.png",image_resized)
    image_processed = process_image("image.png")
    io.imsave("image.png",img_as_ubyte(image_processed))
    image_processed=cv2.imread("image.png",0)
    image_processed=cv2.cvtColor(image_processed,cv2.COLOR_GRAY2RGB)
    image_processed = numpy.expand_dims(image_processed,axis=0)
    image_processed=img_as_float(image_processed)
    return image_processed

app = FastAPI()

origin=["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origin,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class Model(BaseModel):
    image:str
    token:str
def get_model():
    global model
    model = load_model('model.h5')
    print(" * Model loaded!")
get_model()


@app.post('/diagnostic')
def diagnostic(item:Model):
    try:
        res = auth.verify_id_token(item.token)
        image_processed = processing(item.image)
        predictions= model.predict(image_processed).tolist()[0]
        results = {chr(i):round(predictions[i-65]*100,2) for i in range(65,70)}
        return results
    except:
         raise HTTPException(status_code=403, detail="Veuillez vous authentifier")
