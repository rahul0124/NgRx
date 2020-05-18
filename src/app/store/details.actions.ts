import { Action } from '@ngrx/store';
import { User } from '../shared/user';

export const ADD_USER = 'ADD_USER';

export class AddUser implements Action{
    type = ADD_USER;
    constructor(public payload: User){}    //use constructor to make payload as public

}