let urutan = new Set([1, 2, 3, 3]);

urutan.add(4);
urutan.add(4);
urutan.add(5);
urutan.add(6);
console.log(urutan);

console.log();
urutan.delete(6);
console.log(urutan);