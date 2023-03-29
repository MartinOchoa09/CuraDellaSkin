import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import IconArchivo from "../../assets/icons/subir-archivos.svg";
import '../../assets/styles/Productos.css'

function MyDropzone() {
  const onDrop = useCallback(acceptedFiles => {
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className='contenedorCentradoDropFile' {...getRootProps()}>
      <input {...getInputProps()} name="file" className="input-dropzone"/>
      {
        isDragActive ?
          <p>Suelta los archivos aqui...</p> :
         <><div className="icono-archivo"> <img src={IconArchivo} alt="icono de archivo" className="iconoArchivo"/> <p className="tipo-archivo">PNG/JPG/JPEG</p> </div></>
      }
    </div>
  )
}

export default MyDropzone;