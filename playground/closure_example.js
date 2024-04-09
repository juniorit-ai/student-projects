function createCounter() {
  let count = 0;
  return function() {
    count += 1;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
