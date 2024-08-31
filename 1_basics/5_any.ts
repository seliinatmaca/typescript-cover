// Any bir verini tipi belli olmadığı zaman kullanılır.
// Kullanımı ts'e aykırıdır.
// Saedce geçici oalrak veya acil durumlarda kullnılabilir

let foo: any;

foo = "asda";
foo = 32;
foo = {};
foo = true;
foo = null;

let bar: string;

bar = "sadasd";
// bar = 45;
