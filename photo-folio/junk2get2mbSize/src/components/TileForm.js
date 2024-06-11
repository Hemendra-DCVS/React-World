// TileForm.js
import React, { useState, useEffect } from 'react';
import { FormContainer } from '../styled';

const TileForm = ({ onAdd, onUpdate, editTileId, tileToEdit, onClose }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (editTileId || tileToEdit) {
      const tileData = tileToEdit || {};
      setName(tileData.name || '');
      setImage(tileData.image || '');
    }
  }, [editTileId, tileToEdit]);

  const handleAction = () => {
    if (editTileId) {
      if (name && image) {
        onUpdate({
          id: editTileId,
          name: name,
          image: image,
        });

        setName('');
        setImage('');
        onClose();
      }
    } else {
      if (name && image) {
        onAdd({
          name: name,
          image: image,
          open: false,
        });

        setName('');
        setImage('');
        onClose();
      }
    }
  };

  return (
    <FormContainer>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={handleAction}>
        {editTileId ? 'Update Tile' : 'Add Tile'}
      </button>
    </FormContainer>
  );
};

export default TileForm;
