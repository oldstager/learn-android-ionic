export interface Cat {
  nama: string;
  file: string;
  adopted: boolean;
  id: number;
}

const cats: Cat[] = [
  {
    nama: 'Cipa',
    file: '/assets/img/cipa.png',
    adopted: true,
    id: 0
  },
  {
    nama: 'Cipo',
    file: '/assets/img/cipo.png',
    adopted: false,
    id: 1
  },
  {
    nama: 'Kuro',
    file: '/assets/img/kuro.png',
    adopted: true,
    id: 2

  },
  {
    nama: 'Garfield',
    file: '/assets/img/garfield.png',
    adopted: true,
    id: 3
  },
  {
    nama: 'Leon',
    file: '/assets/img/leon.png',
    adopted: false,
    id: 4
  },
  {
    nama: 'Haiku',
    file: '/assets/img/haiku.png',
    adopted: true,
    id: 5
  },
  {
    nama: 'Mio',
    file: '/assets/img/mio.png',
    adopted: true,
    id: 6
  },
  {
    nama: 'Maska',
    file: '/assets/img/maska.png',
    adopted: false,
    id: 7
  }
];

export const getCats = () => cats;
export const getCat = (id: number) => cats.find(m => m.id === id);
