function handleClick(data) {
  console.log(data.parentNode.childNodes[1].innerText);
  console.log("hello");
}

function test(params) {
  const sum = toNumber("input1");
  console.log(sum);
}

function toNumber(id) {
  const result = document.getElementById(id).value;
  return parseInt(result);
}
