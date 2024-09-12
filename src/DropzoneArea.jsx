import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './Dropzone.css';

const DropzoneArea = ({ onFilesDrop }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onFilesDrop(acceptedFiles);
  }, [onFilesDrop]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? 'active' : ''}`}
      style={isDragActive ? activeStyle : dropzoneStyle}
    >
      <input {...getInputProps()} className="dropzone-input" />
      <div className="icon-container">
        <FontAwesomeIcon icon={faUpload} size="4x" />
        <p>
          {isDragActive ? 'Dosyayı bırakın...' : 'Dosyayı sürükleyin veya yüklemek için tıklayın'}
        </p>
      </div>
    </div>
  );
};

DropzoneArea.propTypes = {
  onFilesDrop: PropTypes.func.isRequired,
};

export default DropzoneArea;

const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '10px',
  margin: '0 30px',
  padding: '20px',
  backgroundColor: 'aliceBlue',
  textAlign: 'center',
  cursor: 'pointer',
};

const activeStyle = {
  ...dropzoneStyle,
  backgroundColor: 'lightyellow',
  border: '2px solid green',
};
