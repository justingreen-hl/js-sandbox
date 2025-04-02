const burger = {
  cheese: true,
  mustard: true,
  patty: true
}

function burgerInfo() {
  return burger?.ketchup;
}

console.log(burgerInfo())