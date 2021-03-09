import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import ActorsServices from '../../services/Actors';

export class ActorsController extends CrudController {
    
    actors: any;

    constructor() {
        super();
        this.actors = new ActorsServices();
    }
    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        let actorsAll = this.actors.getAll();
        res.json(actorsAll);
    }

    public readId(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        let theId = parseInt(req.params.id);
        let actorsId = this.actors.getId(theId);
        res.json(actorsId);
    }

}
