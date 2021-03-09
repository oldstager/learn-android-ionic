import EndPointAccess from '@/services/EndPointAccess';
    
const resData = new EndPointAccess('https://jsonplaceholder.typicode.com/users');

//export const getUsers = () => 
//  resData.getRes().then((resp: any) => console.log(resp.data))

/*
const hasilTmp = resData.getRes().then((resp: any) => { return resp.data })

export const getUsers = async() => {
  const a = await hasilTmp;
  return a;
}
*/
/*
export const getUsers = () => 
  resData.getRes().then((resp: any) => 
    { 
      console.log(resp.data); 
      return resp.data 
    })
*/

export const getUsers = resData.getRes()
