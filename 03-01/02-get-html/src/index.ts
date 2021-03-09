import axios from 'axios';

const AxiosInstance = axios.create();
let requestedData: string = '';

AxiosInstance.get('http://www.nodejs.org/')
  .then( 
    response => {
      requestedData = response.data; 
      console.log(requestedData);
   }).catch(error=> {
    console.log(error.message);
  } 
);
