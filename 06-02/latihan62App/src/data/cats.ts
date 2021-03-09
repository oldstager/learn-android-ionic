export interface Cat {
  nama: string;
  file: string;
  id: number;
}

const cats: Cat[] = [
  {
    nama: 'Cipa',
    file: '/assets/img/cipa.png',
    id: 0
  },
  {
    nama: 'Cipo',
    file: '/assets/img/cipo.png',
    id: 1
  },
  {
    nama: 'Kuro',
    file: '/assets/img/kuro.png',
    id: 2

  },
  {
    nama: 'Garfield',
    file: '/assets/img/garfield.png',
    id: 3
  },
  {
    nama: 'Leon',
    file: '/assets/img/leon.png',
    id: 4
  },
  {
    nama: 'Haiku',
    file: '/assets/img/haiku.png',
    id: 5
  },
  {
    nama: 'Mio',
    file: '/assets/img/mio.png',
    id: 6
  },
  {
    nama: 'Maska',
    file: '/assets/img/maska.png',
    id: 7
  }
];

export const getCats = () => cats;
export const getCat = (id: number) => cats.find(m => m.id === id);
