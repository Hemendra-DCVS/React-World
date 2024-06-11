// Tile.js
import React, { useState } from 'react';
import { TileContainer } from '../styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Tile = ({ data, onClick, onUpdate, onRemove, setTileToEdit }) => {
  const [name, setName] = useState(data.name);
  const [image, setImage] = useState(data.image);

  const handleUpdate = () => {
    onUpdate({
      id: data.id,
      name: name,
      image: image,
      open: data.open,
    });
  };

  const handleEditClick = () => {
    setTileToEdit(data);
  };

  return (
    <TileContainer onClick={onClick} open={data.open}>
      <>
        <img key={data.id} src={data.image} alt={data.name} />
        <div>
          <button onClick={handleEditClick}>
            <FontAwesomeIcon icon={faEdit} style={{ fontSize: '13px' }} />
          </button>
          <button onClick={onRemove}>
            <FontAwesomeIcon icon={faTrash} style={{ fontSize: '13px' }} />
          </button>
        </div>
      </>
    </TileContainer>
  );
};

export default Tile;
