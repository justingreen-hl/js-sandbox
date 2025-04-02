// The two functions below are simliar
async function foo() {
  return 1;
}

function bar() {
  return Promise.resolve(1);
}



function baz() {
  return Promise.resolve("Hello");
}

const p = new Promise((res, rej) => {
  res(1);
});

async function asyncReturn() {
  return p;
}

function basicReturn() {
  return Promise.resolve(p);
}

// console.log(p === basicReturn()); // true
// console.log(p === asyncReturn()); // false, different reference in memory

// Foobar is equivalent to foobarbaz
async function foobar() {
  await 1;
}

function foobarbaz() {
  return Promise.resolve(1).then(() => undefined);
}

async function footest() {
  const result1 = await new Promise((resolve) => {
    setTimeout(() => resolve("1"), 1000);
  })

  const result2 = await new Promise((resolve) => {
    setTimeout(() => resolve("2"), 500);
  });
}

console.log(footest());