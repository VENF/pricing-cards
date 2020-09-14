import { Router, Request, Response } from 'express';
import path from 'path';

const routes = Router();

routes.get('/*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname + '/../public/index.html'))
})

export default routes;
