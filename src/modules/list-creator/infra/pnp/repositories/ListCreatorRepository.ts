import { sp } from "@pnp/sp-commonjs"
import "@pnp/sp-commonjs/webs"
import "@pnp/sp-commonjs/lists"

import IListCreatorRepository from "../../../repositories/IListCreatorRepository";
import ICreateListDTO from "../../../dtos/ICreateLiistDTO";

class ListCreatorRepository implements IListCreatorRepository {

    async createList(params: ICreateListDTO): Promise<void> {

    }
}