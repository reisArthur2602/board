const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const userId = 'clzvypgys00005u10lszb7mlj';

async function seedDatabase() {
  try {
    // Dados fictícios para clientes
    const customers = [
      {
        name: 'João Silva',
        phone: '(11) 91234-5678',
        email: 'joao.silva@example.com',
        cnpj: '12.345.678/0001-90',
        userId,
      },
      {
        name: 'Maria Oliveira',
        phone: '(11) 92345-6789',
        email: 'maria.oliveira@example.com',
        cnpj: '23.456.789/0001-91',
        userId,
      },
      {
        name: 'Pedro Santos',
        phone: '(21) 93456-7890',
        email: 'pedro.santos@example.com',
        cnpj: '34.567.890/0001-92',
        userId,
      },
      {
        name: 'Ana Costa',
        phone: '(21) 94567-8901',
        email: 'ana.costa@example.com',
        cnpj: '45.678.901/0001-93',
        userId,
      },
      {
        name: 'Carlos Pereira',
        phone: '(31) 95678-9012',
        email: 'carlos.pereira@example.com',
        cnpj: '56.789.012/0001-94',
        userId,
      },
      {
        name: 'Fernanda Lima',
        phone: '(31) 96789-0123',
        email: 'fernanda.lima@example.com',
        cnpj: '67.890.123/0001-95',
        userId,
      },
      {
        name: 'Lucas Almeida',
        phone: '(41) 97890-1234',
        email: 'lucas.almeida@example.com',
        cnpj: '78.901.234/0001-96',
        userId,
      },
      {
        name: 'Juliana Silva',
        phone: '(41) 98901-2345',
        email: 'juliana.silva@example.com',
        cnpj: '89.012.345/0001-97',
        userId,
      },
      {
        name: 'Rafael Martins',
        phone: '(51) 99012-3456',
        email: 'rafael.martins@example.com',
        cnpj: '90.123.456/0001-98',
        userId,
      },
      {
        name: 'Isabela Santos',
        phone: '(51) 99123-4567',
        email: 'isabela.santos@example.com',
        cnpj: '01.234.567/0001-99',
        userId,
      },
    ];

    // Dados fictícios para tickets
    const tickets = [
      {
        title: 'Problema com o sistema',
        description: 'O sistema está travando frequentemente.',
        status: 'OPEN',
        type: 'INCIDENT',
        category: 'SOFTWARE',
        priority: 'HIGH',
        userId,
      },
      {
        title: 'Solicitação de upgrade',
        description: 'Solicito upgrade de hardware para o servidor.',
        status: 'OPEN',
        type: 'REQUEST',
        category: 'HARDWARE',
        priority: 'AVERAGE',
        userId,
      },
      {
        title: 'Configuração de rede',
        description: 'A rede está lenta e precisa de ajustes.',
        status: 'OPEN',
        type: 'PROBLEM',
        category: 'NETWORK',
        priority: 'CRITICAL',
        userId,
      },
      {
        title: 'Troca de equipamento',
        description: 'Troca de equipamento para a nova estação de trabalho.',
        status: 'OPEN',
        type: 'CHANGE',
        category: 'HARDWARE',
        priority: 'LOW',
        userId,
      },
      {
        title: 'Erro de software',
        description: 'Erro ao executar a aplicação X.',
        status: 'OPEN',
        type: 'INCIDENT',
        category: 'SOFTWARE',
        priority: 'HIGH',
        userId,
      },
      {
        title: 'Novo software solicitado',
        description: 'Solicitação para a instalação do software Y.',
        status: 'OPEN',
        type: 'REQUEST',
        category: 'SOFTWARE',
        priority: 'AVERAGE',
        userId,
      },
      {
        title: 'Problema com a impressão',
        description: 'A impressora está com problemas de conexão.',
        status: 'OPEN',
        type: 'PROBLEM',
        category: 'GENERAL_SUPPORT',
        priority: 'LOW',
        userId,
      },
      {
        title: 'Manutenção preventiva',
        description: 'Manutenção preventiva programada para o servidor.',
        status: 'OPEN',
        type: 'CHANGE',
        category: 'HARDWARE',
        priority: 'AVERAGE',
        userId,
      },
      {
        title: 'Configuração de nova rede',
        description: 'Configuração para nova rede de escritórios.',
        status: 'OPEN',
        type: 'REQUEST',
        category: 'NETWORK',
        priority: 'HIGH',
        userId,
      },
      {
        title: 'Ajuste de segurança',
        description: 'Ajuste das configurações de segurança do sistema.',
        status: 'OPEN',
        type: 'PROBLEM',
        category: 'SOFTWARE',
        priority: 'CRITICAL',
        userId,
      },
    ];

    // Criar 10 clientes com dados fictícios
    const createdCustomers = [];
    for (const customerData of customers) {
      const customer = await prisma.customer.create({
        data: customerData,
      });
      createdCustomers.push(customer);
    }

    // Criar 10 tickets com dados fictícios e associar a cada um um cliente correspondente
    for (let i = 0; i < tickets.length; i++) {
      const ticketData = tickets[i];
      const customerId = createdCustomers[i % createdCustomers.length].id; // Associar ticket ao cliente correspondente
      await prisma.ticket.create({
        data: {
          ...ticketData,
          customerId: customerId,
        },
      });
    }

    console.log('Dados inseridos com sucesso!');

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect();
  } catch (error) {
    console.error('Erro ao criar os dados:', error);
  }
}

seedDatabase();
