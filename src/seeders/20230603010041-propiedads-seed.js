module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Propiedads', [
    {
      id: 0,
      idCasilla: 1,
      idJugador: 0,
      color: 'morado',
      precio: 60,
      nombre: 'nike',
      renta: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 1,
      idCasilla: 3,
      idJugador: 0,
      color: 'morado',
      precio: 60,
      nombre: 'North Face',
      renta: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      idCasilla: 4,
      idJugador: 0,
      color: 'morado',
      precio: 60,
      nombre: 'Under Armour',
      renta: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      idCasilla: 6,
      idJugador: 0,
      color: 'naranjo',
      precio: 100,
      nombre: 'Disney',
      renta: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      idCasilla: 8,
      idJugador: 0,
      color: 'naranjo',
      precio: 100,
      nombre: 'Netflix',
      renta: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      idCasilla: 9,
      idJugador: 0,
      color: 'naranjo',
      precio: 100,
      nombre: 'HBO',
      renta: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 6,
      idCasilla: 11,
      idJugador: 0,
      color: 'rojo',
      precio: 120,
      nombre: 'Burger King',
      renta: 30,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 7,
      idCasilla: 13,
      idJugador: 0,
      color: 'rojo',
      precio: 120,
      nombre: 'Starbucks',
      renta: 30,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 8,
      idCasilla: 14,
      idJugador: 0,
      color: 'rojo',
      precio: 120,
      nombre: 'McDonalds',
      renta: 30,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 9,
      idCasilla: 16,
      idJugador: 0,
      color: 'amarillo',
      precio: 140,
      nombre: 'hp',
      renta: 40,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 10,
      idCasilla: 17,
      idJugador: 0,
      color: 'amarillo',
      precio: 140,
      nombre: 'Windows',
      renta: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 11,
      idCasilla: 19,
      idJugador: 0,
      color: 'amarillo',
      precio: 140,
      nombre: 'Apple',
      renta: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 12,
      idCasilla: 21,
      idJugador: 0,
      color: 'verde',
      precio: 160,
      nombre: 'Play Station',
      renta: 60,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 13,
      idCasilla: 22,
      idJugador: 0,
      color: 'verde',
      precio: 160,
      nombre: 'Xbox',
      renta: 60,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 14,
      idCasilla: 24,
      idJugador: 0,
      color: 'verde',
      precio: 160,
      nombre: 'Nintendo',
      renta: 60,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 15,
      idCasilla: 27,
      idJugador: 0,
      color: 'azul',
      precio: 180,
      nombre: 'Ralph Lauren',
      renta: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 16,
      idCasilla: 29,
      idJugador: 0,
      color: 'azul',
      precio: 180,
      nombre: 'Louis Vuitton',
      renta: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 17,
      idCasilla: 31,
      idJugador: 0,
      color: 'rosado',
      precio: 200,
      nombre: 'Maserati',
      renta: 80,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 18,
      idCasilla: 33,
      idJugador: 0,
      color: 'rosado',
      precio: 200,
      nombre: 'Rolls Royce',
      renta: 80,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 19,
      idCasilla: 36,
      idJugador: 0,
      color: 'celeste',
      precio: 220,
      nombre: 'Swarovski',
      renta: 90,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 20,
      idCasilla: 38,
      idJugador: 0,
      color: 'celeste',
      precio: 220,
      nombre: 'Rolex',
      renta: 90,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 21,
      idCasilla: 39,
      idJugador: 0,
      color: 'celeste',
      precio: 240,
      nombre: 'Cartier',
      renta: 90,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Propiedads', null, {}),
};