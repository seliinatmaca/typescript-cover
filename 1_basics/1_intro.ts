/*
* Typscript, js'in önemli açıklarını düzeltmek için microsoft
* tarafından geliştirilmiş bir programlama dili


* 1)js de tanımlanan bir değişkene her türde değer atamsı yapılabilir.
* 2)js de otomatik tanımlama özelliği yok.
* 3)js de kodu çalıştırmadan hataları göremiyoruz.



* typescriptte kodları doğrudan çalıştırılamazlar.
* yazılan ts kodunu js koduna derlemeliyiz.
* 
* 
*  TSC: Typscript Complier;
*  yazılan ts kodunu js'e çevirir.

*/

//1) tip koruması
let user = "ahmet";

user = "mehmet";

// user = 50;

//2) otomatik tanımlama
const teacher = {
  name: "furkan",
  age: 30,
};

teacher.name;
teacher.age;
// teacher.degree
