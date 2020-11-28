import { Request, Response, NextFunction } from "express";
import CreateListService from "../../../services/CreateListService";

export default class ListController {

    async create(request: Request, response: Response) {

        const list = request.body;

        try {

            await new CreateListService().execute(list, request.headers);
            return response.json({})

        } catch (e) {

            console.error(e)
            return response.status(500).send({ error: e })

        }

    }
}