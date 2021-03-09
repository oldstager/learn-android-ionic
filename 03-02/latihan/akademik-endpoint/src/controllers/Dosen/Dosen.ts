import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import dataDosenJson from '../../resources/dataDosen.json';

export class DosenController extends CrudController {

    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        res.json(dataDosenJson);
    }

}
