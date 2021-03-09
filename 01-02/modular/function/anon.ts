((str: string, idx: number) => {                  // <1>
  console.log(str[idx])                           // <2>
})('Universitas Terbuka', 4);                     // <3>

let idxStr = function(str: string, idx: number): void {   // <4>
  console.log(str[idx]);                                  // <5>
}

console.log(idxStr('Universitas Terbuka', 4));    // <6>
