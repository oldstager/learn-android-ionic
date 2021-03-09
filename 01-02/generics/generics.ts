// tanpa generics                         // <1>
function funN(argN: number): number {
  return argN;
}

function funS(argS: string): string {
  return argS;
}

console.log(funN(23));
console.log(funS('TypeScript'));

// tanpa generics - menggunakan any
// tidak type safe, karena menerima tipe 
// data apa saja.
function funA(argA: any): any{            // <2>
  return argA;
}

console.log(funA(true));
console.log(funA([1,2,3]));

// menggunakan generics
function funG1<T>(argG1:T):T {            // <3>
  return argG1;
}

function funGn<T, U>(argGn1:T, argGn2: U): U {          // <4>
  return argGn2;
}

console.log(funG1<string>('TypeScript'));
console.log(funG1<number>(23));

console.log(funGn<string, number>('TypeScript', 23));

interface argGenConstraint {                                      // <5>
  length: number;
}

function panjang<T extends argGenConstraint>(argGC:T): number {   // <6>
  return argGC.length;
}

let hasil1 = panjang({ length: 23, name: 'TypeScript'});          // <7>
let hasil2 = panjang('TypeScript');

console.log(hasil1);
console.log(hasil2);
