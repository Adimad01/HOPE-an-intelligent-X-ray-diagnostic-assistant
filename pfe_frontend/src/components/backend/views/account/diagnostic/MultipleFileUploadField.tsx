import { Grid} from '@material-ui/core';
import React, { useCallback, useState,useContext } from 'react';
import { FileError, FileRejection, useDropzone } from 'react-dropzone';
import { SingleFileUploadWithProgress } from './SingleFileUploadWithProgress';
import { UploadError } from './UploadError';
import ImageProcess from "./ImageProcess"
import {ImageProcessContext} from './Diagnostic'
import ImageCropper from "components/backend/cropper/ImageCropper"

let currentId = 0;
function getNewId() {
  return ++currentId;
}
export interface UploadableFile {
  id: number;
  file: File;
  errors: FileError[];
  url?: string;
}
const MultipleFileUploadField=({ name }: { name: string }) =>{
  const {show,setShow} =useContext(ImageProcessContext)
  const [files, setFiles] = useState<UploadableFile[]>([]);
  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    setShow(true)
    const mappedAcc = accFiles.map((file) => ({ file, errors: [], id: getNewId() }));
    const mappedRej = rejFiles.map((r) => ({ ...r, id: getNewId() }));
      setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function onUpload(file: File, url: string) {
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }
        return fw;
      })
    );
  }
  function onDelete(file: File) {
    setFiles((curr) => curr.filter((fw) => fw.file !== file));
  }
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ['image/*'],
    maxSize: 1000 * 1024, // 300KB
  });
  return (
    <React.Fragment>
        <div {...getRootProps()} className="drag-drop-box" style={{visibility:show?"hidden":"visible",backgroundColor:show?"transparent":"white"}}>
            <input {...getInputProps()} />
            <img className="upload-image" src={require('assets/img/upload.png').default} alt="Upload"/>
           <p>Veuillez glisser-déposer vos images radiographiques</p>
        </div>
        <ImageProcess>   
        {files.map((fileWrapper,index) => {
           return index===files.length -1 &&  <Grid item key={fileWrapper.id} >
            {  fileWrapper.errors.length ?
                ( <UploadError
                    file={fileWrapper.file}
                    errors={fileWrapper.errors}
                    onDelete={onDelete}
                    />
                ) :
                   ( <>
                       <SingleFileUploadWithProgress
                       onDelete={onDelete}
                       onUpload={onUpload}
                       file={fileWrapper.file}
                       />
                      {fileWrapper.url && <ImageCropper src={fileWrapper.url} />} 
                    </>
                )
            }
            </Grid>
         })}          
        </ImageProcess>
    </React.Fragment>
  );
}

export default MultipleFileUploadField;