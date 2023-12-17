import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();


function getCars() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      mark: 'Lamborghini',
      model: 'Aventador SV Coupe',
      scale: '1/36',
      price: 15,
      description: 'Legendary model of super cars',
      picture: 'lambo.jpg'
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      mark: 'BMW',
      model: 'M3 DTM (E92)',
      scale: '1/32',
      price: 29,
      description: 'Beautiful racing model BMW',
      picture: 'bmw.jpg'
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      mark: 'McLaren',
      model: '675LT',
      scale: '1/36',
      price: 12,
      description: 'This model is fast and agressive',
      picture: 'mclaren.jpg'
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
      mark: 'Toyota GR',
      model: 'Supra Racing concept',
      scale: '1/36',
      price: 17,
      description: 'Engine of this model is legendary',
      picture: 'supra.jpg'
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
      mark: 'Shelby',
      model: 'Cobra',
      scale: '1/32',
      price: 21,
      description: 'Made by Carol Shelby',
      picture: 'cobra.jpg'
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17265',
      mark: 'Mercedes',
      model: 'AMG GTS',
      scale: '1/36',
      price: 14,
      description: 'The great star in cars world',
      picture: 'amg.jpg'
  },
  {
    id: 'fd105551-0f0d-4a9f-bc41-c559c8a17266',
    mark: 'Shelby',
    model: 'Mustang',
    scale: '1/32',
    price: 25,
    description: 'Amazing version of legendary car',
    picture: 'mustang.jpg'
  },
  {
    id: 'fd105551-0f0d-4a9f-bc41-c559c8a17267',
    mark: 'Chevrolet',
    model: 'Corvette Stingray SW',
    scale: '1/36',
    price: 23,
    description: 'One of the most popular car of company',
    picture: 'stingray.jpg'
  },
  {
    id: 'fd105551-0f0d-4a9f-bc41-c559c8a17268',
    mark: 'Subaru',
    model: 'Impreza WRC',
    scale: '1/36',
    price: 17,
    description: 'Subaru Impreza WRC - what else...',
    picture: 'impreza.jpg'
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