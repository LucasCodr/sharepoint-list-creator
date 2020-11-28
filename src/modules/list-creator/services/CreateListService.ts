import '@pnp/sp-commonjs/webs'
import '@pnp/sp-commonjs/lists'
import ICreateListDTO from '../dtos/ICreateLiistDTO'
import Connection from '../infra/connection/sp-auth'

export default class CreateListService {

    async execute({ DisplayName, Title, Description, BaseTemplate }: ICreateListDTO, connection: any) {

        const conn = new Connection(connection.username, connection.password, connection.site_url)

        await conn.getConnetion();


        const site = await conn.spRest.web.lists.getByTitle('LIXO').delete();

        console.log(site)


    }
}