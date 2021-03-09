import express, { Request, Response } from 'express';
import { actorsController } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.get('/', (req: Request, res: Response) => {
    actorsController.read(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
    actorsController.readId(req, res);
});
