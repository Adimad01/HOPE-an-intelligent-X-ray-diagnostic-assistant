import React ,{useEffect,useState} from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";
import "./cropper.css";
const ImageCropper = ({src})=>{
    // eslint-disable-next-line
    const [imageElement,setImageElement] = useState(React.createRef())
    const [imageDestination,setImageDestination] = useState("")
    useEffect(()=>{
        const cropper = new Cropper(imageElement.current, {
            zoomable: false,
            scalable: false,
            aspectRatio: 1,
            crop: () => {
                const canvas = cropper.getCroppedCanvas();
                setImageDestination(canvas.toDataURL("image/png"));
            }
        });
    })
    return (
        <div style={{display: "flex",justifyContent: "center",alignItems: "center",marginTop: "3em"}}>
            <div className="img-container">
                <img id="image-to-crop" ref={imageElement} src={src} alt="Source" />
            </div>
            <img id="image-cropped" src={imageDestination} className="img-preview" alt="Destination" />
        </div>
    );
}


export default ImageCropper;