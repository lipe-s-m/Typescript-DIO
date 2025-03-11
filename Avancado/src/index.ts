//Generics,  TS NODE DEV

//generics
function concatenarArrays<T>(...elementos: T[]): T[] {
  return new Array().concat(...elementos);
}

const numsArray = concatenarArrays<number[]>([1, 2, 3], [6, 5, 4]);

const stringArray = concatenarArrays<string[]>(
  ["Felipe", "Serejo"],
  ["Monteiro"]
);

console.log(numsArray);
console.log(stringArray);
