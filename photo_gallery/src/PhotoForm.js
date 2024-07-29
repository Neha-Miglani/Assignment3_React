import React, { useState } from 'react';

function PhotoForm({ addPhoto }) {
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!photo || !description) return;
    addPhoto({ photo, description });
    setPhoto('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="file" 
        onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))} 
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button type="submit">Add Photo</button>
    </form>
  );
}

export default PhotoForm;
