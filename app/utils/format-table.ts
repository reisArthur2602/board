type TypeTicket = 'INCIDENT' | 'REQUEST' | 'PROBLEM' | 'CHANGE';
type Priority = 'LOW' | 'AVERAGE' | 'HIGH' | 'CRITICAL';
type CategoryTicket = 'HARDWARE' | 'SOFTWARE' | 'NETWORK' | 'GENERAL_SUPPORT';

const formatType = (type: TypeTicket) => {
  switch (type) {
    case 'INCIDENT':
      return 'Incidente';
    case 'REQUEST':
      return 'Solicitação';
    case 'PROBLEM':
      return 'Problema';
    case 'CHANGE':
      return 'Mudança';
    default:
      return 'Desconhecido';
  }
};

const formatCategory = (category: CategoryTicket) => {
  switch (category) {
    case 'HARDWARE':
      return 'Hardware';
    case 'SOFTWARE':
      return 'Software';
    case 'NETWORK':
      return 'Rede';
    case 'GENERAL_SUPPORT':
      return 'Suporte Geral';
    default:
      return null;
  }
};

const formatPriority = (priority: Priority) => {
  switch (priority) {
    case 'LOW':
      return 'Baixa';
    case 'AVERAGE':
      return 'Média';
    case 'HIGH':
      return 'Alta';
    case 'CRITICAL':
      return 'Crítica';
    default:
      return null;
  }
};

export { formatCategory, formatType, formatPriority };
