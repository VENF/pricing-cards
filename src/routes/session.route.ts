import { Router } from 'express';
import { handlerSessionPay } from '../controllers/session.controller';
const routes = Router();

routes.route('/create-checkout-session/:amount/:service').post(handlerSessionPay);

export default routes;
