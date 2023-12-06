import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();


function getCars() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      mark: 'Mazda',
      model: 'CX-3',
      engine: '2.0',
      HP: 120,
      price: 98000,
      description: 'This car have been designed by Hicarii'
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      mark: 'Mazda',
      model: 'CX-60',
      engine: '3.2',
      HP: 320,
      price: 290000,
      description: 'This model is the main car of comapny'
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      mark: 'Mazda',
      model: 'CX-5',
      engine: '2.0',
      HP: 120,
      price: 120000,
      description: 'This model is bigger than CX-3'
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
      mark: 'Mazda',
      model: 'RX-7',
      engine: '3.0',
      HP: 180,
      price: 168000,
      description: 'Engine of this model is legendary'
    },
    {
        id: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
        mark: 'Mazda',
        model: 'MX-5',
        engine: '1.5',
        HP: 120,
        price: 90000,
        description: 'One of the smallest car of company'
    },
  ];
}

async function seed() {
  await Promise.all(
    getCars().map((car) => {
      return db.car.create({ data: car });
    }),
  );
}

seed();