//type guard

function sum(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Impossivel somar!");
  }
}

sum(1, 2);
sum("40", "2");
sum("40", 5);

// checando se valor existe
function operations(arr: number[], operation?: string | undefined) {
  if (operation) {
    if (operation === "sum") {
      const sum = arr.reduce((i, total) => i + total);
    } else if (operation === "multyply") {
      const sum = arr.reduce((i, total) => i * total);
    }
  } else {
    console.log("por favor defina uma operação");
  }
}

operations([1, 2, 3], "sum");
operations([1, 2, 8], "multyply");
