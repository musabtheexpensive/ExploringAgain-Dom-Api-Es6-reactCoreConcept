function upperName(name) {
  console.log(name.toUpperCase());
}

function fullName(first, callback) {
  const fullName = first + "Mahi";
  callback(fullName);
}
fullName("Musab", upperName);
