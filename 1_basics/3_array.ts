// dizinin veri tipini tanımlarken
// dizinin içerisinde ki elemanların tipini söyleriz

const students: string[] = ["ahmet", "mehmet", "ayşe"];

// bütün dizi methodları dizinin tipini dikkate alır
students.push("ali");
students.push("10");
// students.push(10);

const ages: number[] = [12, 45, 56, 687, 78];

const licences: boolean[] = [true, false, true];

// normalde dizinin tek bir veri tipinden oluşmasını bekleriz.
// bazı durumlarda birden fazla fakrlı veritipinden oluşabilir.
// union type kullanarak "ya bu type olsun ya bu type"

const teachers: (string | null | number)[] = [
  "uğur",
  null,
  "ahmet",
  null,
  "ali",
  50,
];
