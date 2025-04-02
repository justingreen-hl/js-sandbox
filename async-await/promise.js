// function doSomething() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Did something");
//       resolve("https://example.com/");
//     }, 200)
//   })
// }

// doSomething();

// Promise.resolve().then(() => console.log(2));
// console.log(1);

function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done")
    }, 2000)
  })
}

function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  })
}

async function sequentialStart() {
  console.log("== sequentialStart starts ==");

  // 1. start a timer, log it after it's done
  const slow = resolveAfter2Seconds();
  console.log(await slow);

  // 2. Start the next timer after waiting for the previous one
  const fast = resolveAfter1Second();
  console.log(await fast);

  console.log("== sequentialStart done ==");
}

// sequentialStart();

async function concurrent1() {
  console.log("== concurrent1 starts ==");

  // 1. Start two timers concurrently and wait for both to complete
  const results = await Promise.all([
    resolveAfter2Seconds(),
    resolveAfter1Second()
  ]);

  console.log(results[0]);
  console.log(results[1]);
  console.log("== concurrent1 done ==");
}

concurrent1();