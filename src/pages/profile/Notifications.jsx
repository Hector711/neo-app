import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Droppable from '@/components/dnd-kit/Droppable';
import Draggable from '@/components/dnd-kit/Draggable';

export default function Notifications() {
  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id='draggable' className='draggable'>
      ARRASTRA ESTO
    </Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className='draggable'>
        {parent === null ? draggableMarkup : null}
        HOLA
      </div>

      {containers.map(id => (
        // Actualizamos el componente Droppable para que acepte un prop `id`
        // y lo pase a `useDroppable`
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : 'SUELTALO AQUI'}
        </Droppable>
      ))}
      <hr className='w-[100%] h-[100px]' />
      <Droppable> CIRCULO</Droppable>
      <hr className='w-[100%] h-[100px]' />
      <Droppable> CUADRADO</Droppable>
    </DndContext>
  );

  function handleDragEnd(event) {
    const { over } = event;

    // Si el elemento se suelta sobre un contenedor, se establece como el padre
    // de lo contrario, restablece el padre a `null`
    setParent(over ? over.id : null);
  }
}
