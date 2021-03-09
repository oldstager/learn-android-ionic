Kompilasi dengan hanya memanggil tsc:

$ tsc

Jika mengkompilasi dengan memanggil nama file yang akan dikompilasi, maka harus disertakan argumen karena jika memanggil nama file yang akan dikompilasi tsconfig.json tidak akan dibaca tsc:

$ tsc  --target ES5 --experimentalDecorators decExample.ts

