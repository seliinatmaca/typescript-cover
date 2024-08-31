//* Fonksiyonların tipini tanımlamak dediğimiz zman
//* fonksiyonlaraın parametrelerin ve return değerlerinin
//* tipini tanımlamaktan bahsediyoruz

function hesaplama(a: number, b: number): string {
  return "Sonucunuz:" + a + b;
}

// fonksiyonu çağırırken parama göre hata kontrolü yapara
hesaplama(12, 45);

// Örnek

// Kişinin bulunduğu konumu ve oranın hava dercesini parametre olar alıp
// "Merhaba , .... konumundaki hava derecesi ... derece" metnini döndüren fonksiyon yaz

const useLoc = (loc: string, degree: number): string => {
  return `Merhaba, ${loc} konumundaki hava derecesi ${degree} derece`;
};

useLoc("Türkiye", 34);
useLoc("Türkiye", 14);
useLoc("Türkiye", 24);

//  void
// her fonksiyon bir değer return etmez
// ve return değeri olamayan fonksiyonların
// return type'ına void
const selamla = (): void => {
  console.log("SELAM");
};
