/*
*Typscript, js'in önemli açıklarını düzeltmek için microsoft
tarafından geliştirilmiş bir programlama dili
** js,2 tanımoanan bir değişkene her türde değer ataması yapılabilir.

* js de tanımlanan bir değişkene her türde değer atamsı yapılabilir.
* js de otomatik tanımlama özelliği yok.

*/
//1) tip koruması
var user = "ahmet";
user = "mehmet";
// user = 50;
//2) otomatik tanımlama
var teacher = {
  name: "furkan",
  age: 30,
};
teacher.name;
teacher.age;
console.log(teacher.name);
