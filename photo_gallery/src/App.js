import React, { useState } from 'react';
import PhotoForm from './PhotoForm';
import PhotoGallery from './PhotoGallery';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);

  const addPhoto = (photo) => {
    setPhotos([...photos, photo]);
  };

  const updatePhoto = (index, updatedPhoto) => {
    const newPhotos = [...photos];
    newPhotos[index] = updatedPhoto;
    setPhotos(newPhotos);
  };

  const removePhoto = (index) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
  };

  return (
    <div className="App">
      <PhotoForm addPhoto={addPhoto} />
      <PhotoGallery 
        photos={photos} 
        updatePhoto={updatePhoto} 
        removePhoto={removePhoto} 
      />
    </div>
  );
}

export default App;
