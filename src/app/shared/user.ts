export class User{
    constructor(public name: string, public email: string, public contact: string){}

}
export interface DetailsState {
    Details: Array<any>;
    error: String;
  }