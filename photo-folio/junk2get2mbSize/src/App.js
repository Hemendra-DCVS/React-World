// App.js
import React, { useReducer, useEffect, useState } from 'react';
import { AppContainer } from './styled';
import Tile from './components/Tile';
import TileForm from './components/TileForm';
import { db } from './firebase.config';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const initialState = {
  tiles: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TILES':
      return {
        ...state,
        tiles: action.payload,
      };
    case 'TOGGLE_TILE':
      return {
        ...state,
        tiles: state.tiles.map((tile) =>
          tile.id === action.payload ? { ...tile, open: !tile.open } : tile
        ),
      };
    case 'ADD_TILE':
      return {
        ...state,
        tiles: [...state.tiles, action.payload],
      };
    case 'UPDATE_TILE':
      return {
        ...state,
        tiles: state.tiles.map((tile) =>
          tile.id === action.payload.id ? action.payload : tile
        ),
      };
    case 'REMOVE_TILE':
      return {
        ...state,
        tiles: state.tiles.filter((tile) => tile.id !== action.payload),
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editTileId, setEditTileId] = useState(null);
  const [tileToEdit, setTileToEdit] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const tilesRef = collection(db, 'tiles');
      const unsubscribe = onSnapshot(tilesRef, (snapshot) => {
        const tiles = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        dispatch({ type: 'SET_TILES', payload: tiles || [] });
      });
      return () => unsubscribe();
    };

    fetchData();
  }, []);

  const handleTileClick = (id) => {
    setEditTileId(id);
  };

  const addTile = async (newTile) => {
    try {
      const docRef = await addDoc(collection(db, 'tiles'), newTile);
      dispatch({ type: 'ADD_TILE', payload: { id: docRef.id, ...newTile } });
    } catch (error) {
      console.error('Error adding document: ', error);
    } finally {
      setEditTileId(null);
    }
  };

  const updateTile = async (updatedTile) => {
    try {
      const tileRef = doc(db, 'tiles', updatedTile.id);
      await updateDoc(tileRef, updatedTile);
      dispatch({ type: 'UPDATE_TILE', payload: updatedTile });
    } catch (error) {
      console.error('Error updating document: ', error);
    } finally {
      setEditTileId(null);
    }
  };

  const removeTile = async (id) => {
    try {
      await deleteDoc(doc(db, 'tiles', id));
      dispatch({ type: 'REMOVE_TILE', payload: id });
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };

  return (
    <AppContainer>
      
      {state.tiles.map((tile) => (
        <Tile
          key={tile.id}
          data={tile}
          onClick={() => handleTileClick(tile.id)}
          onUpdate={(updatedTile) => updateTile(updatedTile)}
          onRemove={() => removeTile(tile.id)}
          setTileToEdit={setTileToEdit} 
        />
      ))}
      <TileForm
        onAdd={(newTile) => addTile(newTile)}
        onUpdate={(updatedTile) => updateTile(updatedTile)}
        editTileId={editTileId}
        setTileToEdit={setTileToEdit} 
        tileToEdit={tileToEdit} 
      />
    </AppContainer>
  );
};

export default App;
