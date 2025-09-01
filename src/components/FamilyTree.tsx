import React, { useCallback, useMemo, useState, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  type Connection,
  type Edge,
  type Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import styled from 'styled-components';

import { familyData, familyConnections, type FamilyMember } from '../types/FamilyTree';
import FamilyMemberNode from './FamilyMemberNode';
import PersonDetailsModal from './PersonDetailsModal';

const TreeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const nodeTypes = {
  familyMember: FamilyMemberNode,
};

const FamilyTree: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<FamilyMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Listen for person selection events
  useEffect(() => {
    const handleOpenPersonDetails = (event: CustomEvent) => {
      setSelectedPerson(event.detail as FamilyMember);
      setIsModalOpen(true);
    };

    window.addEventListener('openPersonDetails', handleOpenPersonDetails as EventListener);
    return () => {
      window.removeEventListener('openPersonDetails', handleOpenPersonDetails as EventListener);
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPerson(null);
  };
  // Convert family data to React Flow nodes
  const initialNodes: Node[] = useMemo(() => {
    // Define posições específicas para cada pessoa - ajustadas para começar do topo-esquerda
    const nodePositions: Record<string, { x: number; y: number }> = {
      // Bisavós (nível 0) - movidos para direita e para baixo
      'olga': { x: 200, y: 100 },
      'fritz': { x: 600, y: 100 },
      
      // Avós/Tias-avós (nível 1)
      'anitta': { x: 0, y: 400 },
      'maria-gloria': { x: 400, y: 400 },
      'ilse': { x: 800, y: 400 },
      
      // Pais/Tios (nível 2)
      'alessandro': { x: 200, y: 700 },
      'eduardo': { x: 600, y: 700 },
      'felipe': { x: 1000, y: 700 },
      
      // Geração atual/Primos (nível 3)
      'adrianne': { x: 50, y: 1000 },
      'andrei': { x: 350, y: 1000 },
      'anne': { x: 650, y: 1000 },
      'augusto': { x: 1000, y: 1000 },
      
      // Próxima geração (nível 4)
      'clarice': { x: 650, y: 1300 },
    };

    return familyData.map((member: FamilyMember) => {
      const position = nodePositions[member.id] || { x: 0, y: 0 };

      return {
        id: member.id,
        type: 'familyMember',
        position,
        data: member as unknown as Record<string, unknown>,
        draggable: true,
      };
    });
  }, []);

  // Convert family connections to React Flow edges
  const initialEdges: Edge[] = useMemo(() => {
    return familyConnections.map((connection) => ({
      id: connection.id,
      source: connection.from,
      target: connection.to,
      type: 'smoothstep',
      style: {
        stroke: connection.type === 'spouse' ? '#ec4899' : 
                connection.type === 'parent' ? '#3b82f6' : '#10b981',
        strokeWidth: 3,
        opacity: 0.8,
      },
      markerEnd: {
        type: 'arrowclosed',
        width: 24,
        height: 24,
        color: connection.type === 'spouse' ? '#ec4899' : 
               connection.type === 'parent' ? '#3b82f6' : '#10b981',
      },
    }));
  }, []);

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <TreeContainer>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{
          padding: 50,
          includeHiddenNodes: false,
          minZoom: 0.2,
          maxZoom: 2.0
        }}
        attributionPosition="top-right"
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
        minZoom={0.2}
        maxZoom={2.0}
      >
        <MiniMap />
        <Controls />
        <Background color="#e2e8f0" gap={20} size={1} />
      </ReactFlow>
      
      {selectedPerson && (
        <PersonDetailsModal
          person={selectedPerson}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </TreeContainer>
  );
};

export default FamilyTree;
