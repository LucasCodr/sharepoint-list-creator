import { IListInfo } from "@pnp/sp-commonjs/lists/types";

export default interface ICreateListDTO extends Partial<IListInfo> {
    Title: string;
    DisplayName: string;
    Description: string;
    /** List: 100, Library: 101 */
    BaseTemplate: 100 | 101;
    ContentTypesEnabled: boolean;
}