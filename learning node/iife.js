// console.log(global);

((name) => {
  const a = 10; // blocked scoped
  console.log(`I Will Level Up My Skills in ${name}`);
})("level2");

console.log(__dirname);
console.log(__filename);
console.log(module);
