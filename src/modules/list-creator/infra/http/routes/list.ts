import Router from 'express'
import ListController from '../controllers/ListController'

const listRouter = Router()
const listController = new ListController()

listRouter.post('/', listController.create)

export default listRouter;