import axios from 'axios';

export default class EndPointAccess {
  theUrl: string;
  constructor(url: string) {
    this.theUrl = url;
  }
  /*
  async getRes() {
    const response = await axios.get(this.theUrl);
    return response;
  }
  */

  async getRes() {
    const response = await axios.get(this.theUrl)
      .then((resp: any) => 
        { 
          console.log(resp.data);
          return resp.data 
        })
  //  return response;
  }

}
