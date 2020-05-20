import { Action } from '@ngrx/store';
import { User } from '../shared/user';

export enum ActionTypes {
  AddUser = 'ADD_USER',
  LoadFetchDetails = 'FETCH_DETAILS_LOAD',
  LoadDataSuccess = 'FETCH_DETAILS_SUCCESS',
  LoadDataFailure = 'FETCH_DETAILS_FAILURE',
}

    export class AddUser implements Action{
      type = ActionTypes.AddUser;
      constructor(public payload: User){}    //use constructor to make payload as public
    }

    export class LoadFetchDetails implements Action {
      readonly type = ActionTypes.LoadFetchDetails;
      }

      export class LoadDataSuccess implements Action {
        readonly type = ActionTypes.LoadDataSuccess;
      
        constructor(public payload : any ) {}
      }
      
      export class LoadDataFailure implements Action {
        readonly type = ActionTypes.LoadDataFailure;
      
        constructor(public payload: string) {}
      }

      export type ActionsUnion = LoadFetchDetails | LoadDataSuccess | LoadDataFailure;

      