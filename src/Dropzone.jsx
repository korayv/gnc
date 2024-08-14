import { useCallback } from 'react';
import {useDropzone} from 'react-dropzone';

const Dropzone = () => {
  const onDrop = useCallback(acceptedFiles => {
      console.log(acceptedFiles)
      }, [])
  const {getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        {isDragActive ? (
        <p> Drop files here ...</p>
       ) : (
        <p className='drag-text'>Drag and drop some files here, or click to select files</p>
       )}
      </div>

    </section>
  );
}
export default Dropzone;