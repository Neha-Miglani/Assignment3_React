import React, { useState } from 'react';

function PhotoGallery({ photos, updatePhoto, removePhoto }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedPhoto, setEditedPhoto] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedPhoto(photos[index].photo);
    setEditedDescription(photos[index].description);
  };

  const handleUpdate = (index) => {
    updatePhoto(index, { photo: editedPhoto, description: editedDescription });
    setEditingIndex(null);
  };

  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => (
        <div key={index} className="photo-item">
          {editingIndex === index ? (
            <div>
              <input 
                type="file" 
                onChange={(e) => setEditedPhoto(URL.createObjectURL(e.target.files[0]))} 
              />
              <input 
                type="text" 
                value={editedDescription} 
                onChange={(e) => setEditedDescription(e.target.value)} 
              />
              <button onClick={() => handleUpdate(index)}>Update</button>
            </div>
          ) : (
            <div>
              <img src={photo.photo} alt={photo.description} className="photo" />
              <p>{photo.description}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => removePhoto(index)}>Remove</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default PhotoGallery;
