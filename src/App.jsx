import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from './components/DraggableItem';
import './App.css';

const App = () => {
  const [files, setFiles] = useState([
    { id: 1, name: 'File 1' },
    { id: 2, name: 'File 2' },
    { id: 3, name: 'File 3' },
    { id: 4, name: 'File 4' },
    { id: 5, name: 'File 5' },
  ]);

  const moveFile = (dragIndex, hoverIndex) => {
    const dragItem = files[dragIndex];
    const newFiles = [...files];
    newFiles.splice(dragIndex, 1);
    newFiles.splice(hoverIndex, 0, dragItem);
    setFiles(newFiles);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app flex flex-col items-center">
        <h1 className="text-center text-2xl font-bold">Drag and Drop Files</h1>
        <div className="file-list w-64 mt-8">
          {files.map((file, index) => (
            <DraggableItem
              key={file.id}
              index={index}
              id={file.id}
              name={file.name}
              moveFile={moveFile}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
