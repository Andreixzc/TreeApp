import React from 'react';
import styled from 'styled-components';
import type { FamilyMember } from '../types/FamilyTree';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div<{ $hasCitizenship: boolean; $citizenshipType?: string }>`
  background: white;
  border-radius: 16px;
  padding: 24px;
  max-width: 400px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 3px solid ${props => {
    if (!props.$hasCitizenship) return '#6b7280';
    if (props.$citizenshipType === 'por declaração') return '#0ea5e9';
    if (props.$citizenshipType === 'staatsangehörigkeitsausweis') return '#eab308';
    return '#6b7280';
  }};
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.3;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #6b7280;
  padding: 0;
  margin-left: 16px;
  
  &:hover {
    color: #374151;
  }
`;

const Relationship = styled.div`
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 16px;
  padding: 4px 8px;
  background: #f3f4f6;
  border-radius: 6px;
  display: inline-block;
`;

const InfoSection = styled.div`
  margin-bottom: 16px;
`;

const InfoTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 8px 0;
`;

const InfoItem = styled.div`
  font-size: 14px;
  color: #4b5563;
  margin: 4px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CitizenshipBadge = styled.div<{ $type?: string }>`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 8px;
  background: ${props => {
    if (props.$type === 'staatsangehörigkeitsausweis') return '#fbbf24';
    if (props.$type === 'por declaração') return '#0ea5e9';
    return '#6b7280';
  }};
  color: ${props => {
    if (props.$type === 'staatsangehörigkeitsausweis') return '#92400e';
    if (props.$type === 'por declaração') return '#0c4a6e';
    return '#ffffff';
  }};
`;

const Notes = styled.div`
  font-size: 13px;
  color: #9ca3af;
  font-style: italic;
  margin-top: 12px;
  padding: 8px 12px;
  background: #f9fafb;
  border-radius: 8px;
  border-left: 3px solid #e5e7eb;
`;

interface PersonDetailsModalProps {
  person: FamilyMember;
  isOpen: boolean;
  onClose: () => void;
}

const PersonDetailsModal: React.FC<PersonDetailsModalProps> = ({ 
  person, 
  isOpen, 
  onClose 
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const isCurrentUser = person.relationship === 'Pessoa Principal';

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent 
        $hasCitizenship={person.hasCitizenship} 
        $citizenshipType={person.citizenshipType}
      >
        <ModalHeader>
          <div>
            <Name>{person.name}</Name>
            <Relationship>{person.relationship}</Relationship>
          </div>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        {(person.birthDate || person.marriageDate || person.divorceDate || person.deathDate || person.militaryService) && (
          <InfoSection>
            <InfoTitle>📅 Datas Importantes</InfoTitle>
            {person.birthDate && (
              <InfoItem><span>🎂</span> Nascimento: {person.birthDate}</InfoItem>
            )}
            {person.marriageDate && (
              <InfoItem><span>💒</span> Casamento: {person.marriageDate}</InfoItem>
            )}
            {person.divorceDate && (
              <InfoItem><span>⚖️</span> Divórcio: {person.divorceDate}</InfoItem>
            )}
            {person.militaryService && (
              <InfoItem><span>🎖️</span> Serviço Militar: {person.militaryService}</InfoItem>
            )}
            {person.deathDate && (
              <InfoItem><span>🕊️</span> Óbito: {person.deathDate}</InfoItem>
            )}
          </InfoSection>
        )}

        <InfoSection>
          <InfoTitle>🇩🇪 Status da Cidadania</InfoTitle>
          <CitizenshipBadge $type={person.citizenshipType}>
            {person.hasCitizenship ? (
              person.citizenshipType === 'staatsangehörigkeitsausweis' ? 
              '🇩🇪 Staatsangehörigkeitsausweis' :
              '🇩🇪 Urkunde über den Erwerb durch Erklärung'
            ) : (
              '❌ Sem Cidadania Alemã'
            )}
          </CitizenshipBadge>
          {person.citizenshipDate && (
            <InfoItem style={{ marginTop: '8px' }}>
              <span>📋</span> Data de Emissão: {person.citizenshipDate}
            </InfoItem>
          )}
        </InfoSection>

        {person.notes && (
          <Notes>
            💭 {person.notes}
          </Notes>
        )}
        
        {isCurrentUser && (
          <Notes>
            👤 Esta é a pessoa principal da árvore genealógica
          </Notes>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default PersonDetailsModal;
