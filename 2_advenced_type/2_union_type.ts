// Bir verinin tipi için birden fazla seçenek
// bulunuyorsa bu ifadayei kullanırız

let phone: number | string;

phone = '566-566-56-56';

phone = 56565656656;

// örnek 2

type Laptop = {
  ram: number;
  cpu: string;
};

type Desktop = {
  desk_ram: number;
  desk_cpu: string;
  desk_gpu: string;
  monitor: string;
};

// bu tiplerden bütün değerlerin tanımlanması zorunluluğu bulunmuyor
const pc: Laptop | Desktop = {
  ram: 16,
  cpu: 'intel',
  desk_cpu: 'safas',
  monitor: 'string',
};