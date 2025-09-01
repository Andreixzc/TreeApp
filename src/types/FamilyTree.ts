export interface FamilyMember {
  id: string;
  name: string;
  birthDate?: string;
  marriageDate?: string;
  divorceDate?: string;
  deathDate?: string;
  militaryService?: string;
  citizenshipDate?: string;
  hasCitizenship: boolean;
  citizenshipType?: 'staatsangehörigkeitsausweis' | 'por declaração' | 'none';
  relationship: string;
  notes?: string;
}

export interface FamilyConnection {
  id: string;
  from: string;
  to: string;
  type: 'parent' | 'spouse' | 'sibling';
}

export const familyData: FamilyMember[] = [
  // Bisavós
  { 
    id: 'olga',
    name: 'Olga Martha Rohlfs',
    birthDate: '06/11/1901',
    marriageDate: '24/12/1925',
    deathDate: '07/02/1986',
    hasCitizenship: true,
    citizenshipType: 'staatsangehörigkeitsausweis',
    relationship: 'Bisavó'
  },
  {
    id: 'fritz',
    name: 'Fritz Heinrich Eduard Rohlfs',
    birthDate: '25/12/1902',
    marriageDate: '24/12/1925',
    deathDate: '13/05/1966',
    hasCitizenship: false,
    relationship: 'Bisavô'
  },
  
  // Avó e tias
  {
    id: 'maria-gloria',
    name: 'Maria Glória Rohlfs Mass',
    birthDate: '08/08/1944',
    marriageDate: '25/07/1966',
    citizenshipDate: '26/05/2025',
    hasCitizenship: true,
    citizenshipType: 'staatsangehörigkeitsausweis',
    relationship: 'Avó'
  },
  {
    id: 'anitta',
    name: 'Anita Luzia Rohlfs',
    birthDate: '12/07/1930',
    citizenshipDate: '22/09/1988',
    hasCitizenship: true,
    citizenshipType: 'staatsangehörigkeitsausweis',
    relationship: 'Irmã da Avó'
  },
  {
    id: 'ilse',
    name: 'Ilse Martha Rohlfs',
    birthDate: '27/07/1936',
    citizenshipDate: '22/09/1988',
    hasCitizenship: true,
    citizenshipType: 'staatsangehörigkeitsausweis',
    relationship: 'Irmã da Avó'
  },
  
  // Pais e tios
  {
    id: 'alessandro',
    name: 'Alessandro Rohlfs Massain',
    birthDate: '01/04/1971',
    marriageDate: '05/11/1998',
    divorceDate: '19/11/2020',
    citizenshipDate: '26/05/2025',
    hasCitizenship: true,
    citizenshipType: 'por declaração',
    relationship: 'Pai'
  },
  {
    id: 'eduardo',
    name: 'Eduardo Rohlfs Massaini',
    birthDate: '01/04/1971',
    marriageDate: '05/11/1998',
    divorceDate: '19/11/2020',
    citizenshipDate: '18/02/2025',
    hasCitizenship: true,
    citizenshipType: 'por declaração',
    relationship: 'Irmão do Pai'
  },
  {
    id: 'felipe',
    name: 'Felipe Celso Rohlfs Massaini',
    birthDate: '10/05/1984',
    marriageDate: '11/12/2009',
    militaryService: '07/02/2005',
    hasCitizenship: false,
    citizenshipType: 'none',
    relationship: 'Irmão do Pai'
  },
  
  // Primos
  {
    id: 'anne',
    name: 'Anne Rohlfs Massaini',
    birthDate: '24/07/1993',
    hasCitizenship: false,
    citizenshipType: 'none',
    relationship: 'Prima'
  },
  {
    id: 'clarice',
    name: 'Clarice',
    birthDate: '20/05/2024',
    hasCitizenship: false,
    relationship: 'Filha da Prima'
  },
  {
    id: 'augusto',
    name: 'Augusto',
    birthDate: '02/08/2024',
    hasCitizenship: false,
    relationship: 'Primo',
    notes: 'Sem informações ainda'
  },
  
  // Irmãos
  {
    id: 'adrianne',
    name: 'Adrianne G R Massaini',
    birthDate: '17/04/1999',
    citizenshipDate: '26/05/2025',
    hasCitizenship: true,
    citizenshipType: 'por declaração',
    relationship: 'Irmã'
  },
  {
    id: 'andrei',
    name: 'Andrei G R Massaini',
    birthDate: '03/03/2000',
    citizenshipDate: '26/05/2025',
    hasCitizenship: true,
    citizenshipType: 'por declaração',
    relationship: 'Pessoa Principal'
  }
];

export const familyConnections: FamilyConnection[] = [
  // Fritz e Olga são casados
  { id: 'fritz-olga', from: 'fritz', to: 'olga', type: 'spouse' },
  
  // Maria Gloria é filha de Olga e Fritz
  { id: 'olga-maria', from: 'olga', to: 'maria-gloria', type: 'parent' },
  { id: 'fritz-maria', from: 'fritz', to: 'maria-gloria', type: 'parent' },
  
  // Anitta e Ilse são filhas de Olga e Fritz (irmãs de Maria Gloria)
  { id: 'olga-anitta', from: 'olga', to: 'anitta', type: 'parent' },
  { id: 'fritz-anitta', from: 'fritz', to: 'anitta', type: 'parent' },
  { id: 'olga-ilse', from: 'olga', to: 'ilse', type: 'parent' },
  { id: 'fritz-ilse', from: 'fritz', to: 'ilse', type: 'parent' },
  
  // Alessandro, Eduardo, Felipe são filhos de Maria Gloria
  { id: 'maria-alessandro', from: 'maria-gloria', to: 'alessandro', type: 'parent' },
  { id: 'maria-eduardo', from: 'maria-gloria', to: 'eduardo', type: 'parent' },
  { id: 'maria-felipe', from: 'maria-gloria', to: 'felipe', type: 'parent' },
  
  // Anne é filha de Eduardo
  { id: 'eduardo-anne', from: 'eduardo', to: 'anne', type: 'parent' },
  
  // Clarice é filha de Anne
  { id: 'anne-clarice', from: 'anne', to: 'clarice', type: 'parent' },
  
  // Augusto é filho de Felipe
  { id: 'felipe-augusto', from: 'felipe', to: 'augusto', type: 'parent' },
  
  // Adrianne e Andrei são filhos de Alessandro
  { id: 'alessandro-adrianne', from: 'alessandro', to: 'adrianne', type: 'parent' },
  { id: 'alessandro-andrei', from: 'alessandro', to: 'andrei', type: 'parent' }
];
