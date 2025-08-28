// src/components/LeadsPage.tsx
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import type { DropResult, DroppableProvided, DroppableStateSnapshot, DraggableProvided, DraggableStateSnapshot } from '@hello-pangea/dnd';


// Definindo o tipo para os status
type Status = 'Novo' | 'Em Contato' | 'Fechado';

// Dados de exemplo (mock data) para o Kanban
const mockLeads = [
  { id: 'lead-1', name: 'João Silva', company: 'Tech Solutions', status: 'Novo' as Status },
  { id: 'lead-2', name: 'Maria Souza', company: 'Innovate Corp', status: 'Em Contato' as Status },
  { id: 'lead-3', name: 'Carlos Santos', company: 'Global S.A.', status: 'Novo' as Status },
  { id: 'lead-4', name: 'Ana Costa', company: 'Future Systems', status: 'Fechado' as Status },
];

const LeadsPage = () => {
  const [leads, setLeads] = useState(mockLeads);

  const statuses: Status[] = ['Novo', 'Em Contato', 'Fechado'];

  const getLeadsByStatus = (status: Status) => {
    return leads.filter(lead => lead.status === status);
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const movedLead = leads.find(lead => lead.id === draggableId);

    if (movedLead) {
      const updatedLeads = leads.map(lead =>
        lead.id === movedLead.id ? { ...lead, status: destination.droppableId as Status } : lead
      );

      setLeads(updatedLeads);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Funil de Vendas</h1>
      
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex space-x-4 overflow-x-auto">
          {statuses.map(status => (
            <Droppable droppableId={status} key={status}>
              {(provided: DroppableProvided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex-none w-80 p-4 bg-gray-200 rounded-lg shadow-md"
                >
                  <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">{status}</h2>
                  <div className="space-y-4">
                    {getLeadsByStatus(status).map((lead, index) => (
                      <Draggable key={lead.id} draggableId={lead.id} index={index}>
                        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              backgroundColor: snapshot.isDragging ? '#c7f1ff' : 'white',
                              ...provided.draggableProps.style,
                            }}
                            className="p-4 rounded-md shadow border-l-4 border-blue-500"
                          >
                            <h3 className="font-bold text-lg">{lead.name}</h3>
                            <p className="text-sm text-gray-600">{lead.company}</p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default LeadsPage;
