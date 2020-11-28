import ICreateListDTO from "../dtos/ICreateLiistDTO";

export default interface IListCreatorRepository {

    createList(params: ICreateListDTO): Promise<void>;
}