import { Product } from "../shared/user";
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionsUnion, ActionTypes } from './details.actions';


export interface ProductState {
  currentProduct: Product;
  products: Product[];
  error: String;
}

  const initialState: ProductState = {
    currentProduct: null,
    products: [],
    error: "",
  };


export function DetailsReducer(state = initialState,
     action: ActionsUnion):ProductState{
    switch(action.type){

      case ActionTypes.SetCurrentProduct:
        return {
          ...state,
          currentProduct: { ...action.payload }
        };
        
            case ActionTypes.LoadDataSuccess:
                return{
                    ...state,
                    products: action.payload 
                };

                case ActionTypes.LoadDataFailure:
                    return{
                        ...state,
                        products:[],
                        error: action.payload
                                            
                    };
                    
            default:
                return state;
            }
}

const featureState = createFeatureSelector<ProductState>("reducer");

export const getDetails = createSelector(
    featureState,
    (state) => state.products
  );
export const getError = createSelector(
    featureState,
    (state) => state.error
  );
export const getCurrentProduct = createSelector(
  featureState,
  state => state.currentProduct
  );  

  
