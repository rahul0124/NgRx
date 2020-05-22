export class User{
    constructor(public name: string, public email: string, public contact: string){}

}
export interface Product {
    userId: number;
    id: number | null;
    title: string;
    completed: boolean;
}

