import Router from 'express';
import listRouter from '../modules/list-creator/infra/http/routes/list';

const routes = Router();

routes.use('/lists', listRouter);

export default routes;