import { User } from "../shared/user";
import { Action } from '@ngrx/store';
import * as detailsActions from './details.actions';

const initialState = {
    ingredients: [
    new User('Rahul','rahul@gmail.com','9410000000'),
  ]
};
  
export function DetailsReducer(state = initialState,
     action: detailsActions.AddUser){
    switch(action.type){
        case detailsActions.ADD_USER:
            //state.ingredients.push()  it will add items to the existing state
            return {
                ...state,   // copy all state with ...
                ingredients: [...state.ingredients, action.payload]
            };
            default:
                return state;

    }

}