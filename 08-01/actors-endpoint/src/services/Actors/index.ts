import actors from '../../resources/actors.json';

export default class ActorsServices {

  getAll() {
    return actors;
  }

  getId(theId: number) {
      let result = actors.find(m => m.id === theId);
      return result;
  } 

}
