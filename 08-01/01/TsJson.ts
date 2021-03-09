import * as data from "./sample-01.json"

export const getAllData = () => data;
//export const getData = (id: number) => data.find(m => m.id === id);

console.log(getAllData());
