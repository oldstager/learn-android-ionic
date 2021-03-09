import axios from 'axios';

export default class Rest {
  theUrl: string;
  constructor(url: string) {
    this.theUrl = url;
  }

  async get() {
    return await axios.get(this.theUrl)
  }

}
