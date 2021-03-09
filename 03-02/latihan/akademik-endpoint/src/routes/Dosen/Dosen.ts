import express, { Request, Response } from 'express';
import { dosenController } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.get('/', (req: Request, res: Response) => {
    dosenController.read(req, res);
});

