export type Car = {
  id: string
  stockNo: string
  name: string
  year: number
  price: number
  mileage: string
  grade: string
  transmission: string
  fuel: string
  image: string
  imageFolder: string
  badge?: string
  description: string
  specs: { label: string; value: string }[]
}

export const cars: Car[] = [
  // UNIT WN101
  {
    id: 'stepwgn-2023-spada-premium-wn101',
    stockNo: 'WN101',
    name: 'Honda StepWGN Spada Premium Line',
    year: 2023,
    price: 180000,
    mileage: '32,340 km',
    grade: '4.5',
    transmission: 'IAT',
    fuel: 'Petrol',

    // TUKAR NAMA FILE INI kepada gambar sebenar dalam folder WN101
    image:
      '/Cars/stepwgn-2023-spada-premium-wn101/NAMA-FILE-GAMBAR.jpeg',

    imageFolder: 'stepwgn-2023-spada-premium-wn101',

    badge: 'Grade 4.5',

    description:
      '2023 Honda StepWGN Spada Premium Line 7-seater with 32,340 km. Auction grade 4.5 and interior grade B. Equipped with Honda Sensing, Blind Spot Monitor, Adaptive Driving Beam, Honda Connect 11.4-inch navigation, multi-view camera, power tailgate, half leather seats and seat heater.',

    specs: [
      { label: 'Stock No.', value: 'WN101' },
      { label: 'Engine', value: '1.5L Petrol' },
      { label: 'Drive', value: '2WD' },
      { label: 'Seats', value: '7' },
      { label: 'Interior', value: 'Grade B' },
      { label: 'Colour', value: 'Pearl' },
      { label: 'Mileage', value: '32,340 km' },
      { label: 'Auction Grade', value: '4.5' },
      { label: 'Chassis', value: 'RP6-1111080' },
    ],
  },

  // UNIT BM2378
  {
    id: 'stepwgn-2024-spada-premium-bm2378',
    stockNo: 'BM2378',
    name: 'Honda StepWGN Spada Premium Line',
    year: 2024,
    price: 188000,
    mileage: '2,223 km',
    grade: '5',
    transmission: 'AT',
    fuel: 'Petrol',

    // TUKAR NAMA FILE INI kepada gambar sebenar dalam folder BM2378
    image:
      '/Cars/stepwgn-2024-Spada-Premium-BM2378/NAMA-FILE-GAMBAR.jpeg',

    imageFolder: 'stepwgn-2024-Spada-Premium-BM2378',

    badge: 'Grade 5 · Interior A',

    description:
      '2024 Honda StepWGN Spada Premium Line with only 2,223 km. Auction grade 5 and interior grade A. Finished in Purple PB87P and equipped with Honda Sensing, Honda Connect 11.4-inch navigation, ETC 2.0, multi-view camera, smart key and power tailgate.',

    specs: [
      { label: 'Stock No.', value: 'BM2378' },
      { label: 'Engine', value: '1.5L Petrol' },
      { label: 'Drive', value: '2WD' },
      { label: 'Seats', value: '7' },
      { label: 'Interior', value: 'Grade A' },
      { label: 'Colour', value: 'Purple (PB87P)' },
      { label: 'Mileage', value: '2,223 km' },
      { label: 'Auction Grade', value: '5' },
      { label: 'Chassis', value: 'RP6-1120802' },
    ],
  },
]
