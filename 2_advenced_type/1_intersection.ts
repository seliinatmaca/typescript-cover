// Intersection (Kesişim Tipler)
// İki veya daha faszl tipi birlikte kullanmamızı sağlar

type Car = {
  make: string;
  model: string;
};

type Electric = {
  voltage: number;
  charge_time: number;
};

// bir nesne oluşturuken yukarıdaki iki tipide kullanabiliyoruz
const tesla: Car & Electric = {
  make: "Tesla",
  model: "Model S",
  voltage: 40,
  charge_time: 6,
};
