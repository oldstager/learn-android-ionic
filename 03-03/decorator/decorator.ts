function buatMax(jumlah: number) {
    
    return (target: Object, propertyKey: string, 
            descriptor: TypedPropertyDescriptor<any>) => {
    
        let oldMethod = descriptor.value

        descriptor.value = function(...args: any[]) {
      
            let returnedResult: string;
            
            let result = oldMethod.apply(this, arguments)
            
            if (result.length > jumlah) {
                returnedResult = result.substring(0, jumlah);
            } else {
                returnedResult = result;
            }
            
            return returnedResult;
 
        }
    }
}

class ClassA {

    str1: string;

    constructor(teks: string) {
        this.str1 = teks;
    }

    method1(newStr1: string): string {
        this.str1= newStr1;
        return this.str1;
    }

    @buatMax(5)
    method2(newStr2: string): string {
        this.str1= newStr2;
        return this.str1;
    }

}

let kelasA = new ClassA("isi awal");
console.log(kelasA.str1);

console.log(kelasA.method1('lebih dari 5 karakter'));
console.log(kelasA.method2('lebih dari 5 karakter'));
