// type aliases
// custom type

// CUSTOM TYPE KULLANMADAN OBJE TİPİ TANIMALMA

let foo: {
  name: string;
  age: number;
} = {
  name: "Ali",
  age: 50,
};

let foo10: {
  name: string;
  age: number;
} = {
  name: "Ahmet",
  age: 20,
};

let foo11: {
  name: string;
  age: number;
} = {
  name: "Ayşe",
  age: 30,
};

// CUSTOM TYPE KULLANARAK

type UserType = {
  name: string;
  age: number;
};

const foo17: UserType = {
  name: "Ayşe",
  age: 21,
};

const foo12: UserType = {
  name: "Bilal",
  age: 21,
};
const foo14: UserType = {
  name: "Fırat",
  age: 41,
};

const users: UserType[] = [
  {
    name: "Fırat",
    age: 41,
  },
  {
    name: "Bilal",
    age: 21,
  },
];
