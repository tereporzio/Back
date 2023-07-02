module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Libres', [
    {
      id: 0,
      idCasilla: 0,
      tipo: 'partida',
      instruccion: 'comenzar',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 1,
      idCasilla: 2,
      tipo: 'parking',
      instruccion: 'El banco te paga 10',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      idCasilla: 5,
      tipo: 'parking',
      instruccion: 'El banco te paga 10',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      idCasilla: 7,
      tipo: 'arca comunal',
      instruccion: 'El banco te paga 20',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      idCasilla: 10,
      tipo: 'carcel',
      instruccion: 'Pagas 10 al banco',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      idCasilla: 12,
      tipo: 'fortuna',
      instruccion: 'El banco te paga 20',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 6,
      idCasilla: 15,
      tipo: 'parking',
      instruccion: 'El banco te paga 10',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 7,
      idCasilla: 18,
      tipo: 'parking',
      instruccion: 'El banco te paga 10',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 8,
      idCasilla: 20,
      tipo: 'parking',
      instruccion: 'El banco te paga 10',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 9,
      idCasilla: 23,
      tipo: 'arca comunal',
      instruccion: 'El banco te paga 20',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 10,
      idCasilla: 25,
      tipo: 'parking',
      instruccion: 'El banco te paga 10',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 11,
      idCasilla: 26,
      tipo: 'fortuna',
      instruccion: 'El banco te paga 20',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 12,
      idCasilla: 28,
      tipo: 'parking',
      instruccion: 'El banco te paga 10',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 13,
      idCasilla: 30,
      tipo: 'ir carcel',
      instruccion: 'vas a la carcel',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 14,
      idCasilla: 32,
      tipo: 'arca comunal',
      instruccion: 'el banco te paga 10',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 15,
      idCasilla: 34,
      tipo: 'parking',
      instruccion: 'el banco te paga 10',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 16,
      idCasilla: 35,
      tipo: 'parking',
      instruccion: 'el banco te paga 10',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 17,
      idCasilla: 37,
      tipo: 'fortuna',
      instruccion: 'El banco te paga 10',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Libres', null, {}),
};
