import React from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import styled from 'styled-components';
import type { FamilyMember } from '../types/FamilyTree';

const NodeContainer = styled.div<{ $hasCitizenship: boolean; $isCurrentUser: boolean; $citizenshipType?: string }>`
  padding: 16px 20px;
  border-radius: 12px;
  border: 3px solid ${props => {
    if (props.$isCurrentUser) return '#2563eb';
    if (!props.$hasCitizenship) return '#6b7280';
    if (props.$citizenshipType === 'por declaração') return '#0ea5e9';
    if (props.$citizenshipType === 'staatsangehörigkeitsausweis') return '#eab308';
    return '#6b7280';
  }};
  background: ${props => {
    if (props.$isCurrentUser) return '#eff6ff';
    if (!props.$hasCitizenship) return '#f9fafb';
    if (props.$citizenshipType === 'por declaração') return '#f0f9ff';
    if (props.$citizenshipType === 'staatsangehörigkeitsausweis') return '#fefce8';
    return '#f9fafb';
  }};
  min-width: 180px;
  max-width: 220px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px) scale(1.02);
  }
`;

const Name = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.3;
  word-wrap: break-word;
`;

const ClickHint = styled.div`
  font-size: 10px;
  color: #9ca3af;
  margin-top: 6px;
  opacity: 0.7;
  font-style: italic;
`;

interface FamilyMemberNodeProps extends NodeProps {
  data: Record<string, unknown>;
}

const FamilyMemberNode: React.FC<FamilyMemberNodeProps> = ({ data }) => {
  const member = data as unknown as FamilyMember;
  const isCurrentUser = member.relationship === 'Pessoa Principal';

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Dispatch custom event to open modal
    const event = new CustomEvent('openPersonDetails', {
      detail: member
    });
    window.dispatchEvent(event);
  };

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <NodeContainer 
        $hasCitizenship={member.hasCitizenship} 
        $isCurrentUser={isCurrentUser}
        $citizenshipType={member.citizenshipType}
        onClick={handleClick}
      >
        <Name>{member.name}</Name>
        <ClickHint>clique para detalhes</ClickHint>
      </NodeContainer>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default FamilyMemberNode;
