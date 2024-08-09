radius = [2, 4, 5, 3];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const diameter = (radius) => {
  return 2 * radius;
};

function calculate(arr, callback) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i]));
  }

  return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));

Array.prototype.calculateMap = function (callback) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i]));
  }

  return output;
};
