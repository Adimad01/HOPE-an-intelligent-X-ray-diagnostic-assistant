import React,{useState,useRef,useLayoutEffect} from 'react'
import './diagnostic.scss'
import MultipleFileUploadField from './MultipleFileUploadField'
export const ImageProcessContext = React.createContext()
export default function Diagnostic(props){
    const [show, setShow] = useState(false);
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({});
    let movement_timer = null;
    const RESET_TIMEOUT = 100;
    const test_dimensions = () => {
      if (targetRef.current) {
        setDimensions({
          width: targetRef.current.offsetWidth,
          height: targetRef.current.offsetHeight
        });
      }
    }
    useLayoutEffect(() => {
      test_dimensions();
    }, []);
    window.addEventListener('resize', ()=>{
      clearInterval(movement_timer);
      movement_timer = setTimeout(test_dimensions, RESET_TIMEOUT);
    });
    return (
    <div>
        <div ref={targetRef} className="diagnostic-box" style={{backgroundColor:show?"transparent":"white",boxShadow:show?"0px 0px 0px gray":"0px 0px 10px gray"}} > 
            <ImageProcessContext.Provider value={{show,setShow,dimensions}} >
                <MultipleFileUploadField/>
            </ImageProcessContext.Provider>
        </div>
    </div>
 
    );
}