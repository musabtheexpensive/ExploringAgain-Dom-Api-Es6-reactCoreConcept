const function1 = (a, b, callback) => {
//   console.log(typeof callback);
  callback(a, b);
};

const callback = (x, y) => {
  console.log("sum = ", x + y);
};

function1(10, 5, callback);
