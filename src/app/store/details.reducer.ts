import { DetailsState } from "../shared/user";
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionsUnion, ActionTypes } from './details.actions';


  const initialState: DetailsState = {
    Details: [],
    error: "",
  };


export function DetailsReducer(state = initialState,
     action: ActionsUnion){
    switch(action.type){
            case ActionTypes.LoadDataSuccess:
                return{
                    ...state,
                    DetailsState: action.payload
                }

                case ActionTypes.LoadDataFailure:
                    return{
                        ...state,
                        DetailsState:[],
                        error: action.payload
                                            
                    };
                    
            default:
                return state;
            }
}

const featureState = createFeatureSelector<DetailsState>("reducer");

export const getDetails = createSelector(
    featureState,
    (state) => state.Details
  );
export const getError = createSelector(
    featureState,
    (state) => state.error
  );
  
